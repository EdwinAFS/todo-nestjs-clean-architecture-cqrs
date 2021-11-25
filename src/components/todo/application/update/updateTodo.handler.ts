import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateTodoCommand } from './updateTodo.command';
import { UpdateTodoService } from './updateTodo.service';

@CommandHandler(UpdateTodoCommand)
export class UpdateTodoHandler
	implements ICommandHandler<UpdateTodoCommand>
{
	constructor(private updateTodosService: UpdateTodoService) { }

	async execute(command: UpdateTodoCommand) {
		const { todoId, name, description, price } = command;

		await this.updateTodosService.run(
			todoId,
			name,
			description,
			price,
		);
	}
}
