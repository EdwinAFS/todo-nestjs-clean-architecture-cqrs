import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Uuid } from 'src/shared/domain/value-object/Uuid';

import { CreateTodoCommand } from './createTodo.command';
import { CreateTodoService } from './createTodo.service';

@CommandHandler(CreateTodoCommand)
export class CreateTodoHandler
	implements ICommandHandler<CreateTodoCommand>
{
	constructor(private createTodoService: CreateTodoService) { }

	async execute(command: CreateTodoCommand) {
		const {
			id,
			title,
			description,
			userId
		} = command;

		const todoId = new Uuid(id);

		await this.createTodoService.run(
			todoId,
			title,
			description,
			userId
		);
	}
}
