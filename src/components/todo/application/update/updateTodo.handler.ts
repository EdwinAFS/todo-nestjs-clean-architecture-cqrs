import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Uuid } from 'src/shared/domain/value-object/Uuid';
import { UpdateTodoCommand } from './updateTodo.command';
import { UpdateTodoService } from './updateTodo.service';

@CommandHandler(UpdateTodoCommand)
export class UpdateTodoHandler
	implements ICommandHandler<UpdateTodoCommand>
{
	constructor(private updateTodosService: UpdateTodoService) { }

	async execute(command: UpdateTodoCommand) {
		const {
			title,
			description,
			userId
		} = command;

		const todoId = new Uuid(command.id);

		await this.updateTodosService.run(
			todoId,
			title,
			description,
			userId
		);
	}
}
