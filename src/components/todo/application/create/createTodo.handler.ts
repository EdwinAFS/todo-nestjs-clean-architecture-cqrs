import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

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

		await this.createTodoService.run(
			id,
			title,
			description,
			userId
		);
	}
}
