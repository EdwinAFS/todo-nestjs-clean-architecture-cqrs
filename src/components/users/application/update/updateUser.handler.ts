import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Uuid } from 'src/shared/domain/value-object/Uuid';
import { UpdateUserCommand } from './updateUser.command';
import { UpdateUserService } from './updateUser.service';

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler
	implements ICommandHandler<UpdateUserCommand>
{
	constructor(private updateUsersService: UpdateUserService) { }

	async execute(command: UpdateUserCommand) {
		const {
			email,
			username,
			password,
			role
		} = command;

		const userId = new Uuid(command.userId);

		await this.updateUsersService.run(
			userId,
			email,
			username,
			password,
			role
		);
	}
}
