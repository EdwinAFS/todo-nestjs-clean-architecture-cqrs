import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Uuid } from 'src/shared/domain/value-object/Uuid';
import { CreateUserCommand } from './createUser.command';
import { CreateUserService } from './createUser.service';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler
	implements ICommandHandler<CreateUserCommand>
{
	constructor(private createUsersService: CreateUserService) { }

	async execute(command: CreateUserCommand) {
		const {
			email,
			username,
			password,
			role
		} = command;

		const userId = new Uuid(command.userId);

		await this.createUsersService.run(
			userId,
			email,
			username,
			password,
			role
		);
	}
}
