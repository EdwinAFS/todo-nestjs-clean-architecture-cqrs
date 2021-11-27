import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateTodoCommand } from './updateTodo.command';
import { UpdateTodoService } from './updateTodo.service';

@CommandHandler(UpdateTodoCommand)
export class UpdateTodoHandler
	implements ICommandHandler<UpdateTodoCommand>
{
	constructor(private updateTodosService: UpdateTodoService) { }

	async execute(command: UpdateTodoCommand) {
		const { id,
			title,
			description,
			created_at,
			updated_at, } = command;

		await this.updateTodosService.run(
			id,
			title,
			description,
			created_at,
			updated_at,
		);
	}
}
