import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Uuid } from 'src/shared/domain/value-object/Uuid';
import { CompletedTodoCommand } from './completedTodo.command';
import { CompletedTodoService } from './completedTodo.service';

@CommandHandler(CompletedTodoCommand)
export class CompletedTodoHandler
	implements ICommandHandler<CompletedTodoCommand>
{
	constructor(private completedTodosService: CompletedTodoService) { }

	async execute(command: CompletedTodoCommand) {
		const { id } = command;

		const todoId = new Uuid(id);

		await this.completedTodosService.run(
			todoId
		);
	}
}
