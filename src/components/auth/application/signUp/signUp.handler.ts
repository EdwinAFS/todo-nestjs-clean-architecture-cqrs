import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { SignUpCommand } from './signUp.command';
import { SignUpService } from './signUp.service';
import { Uuid } from 'src/shared/domain/value-object/Uuid';

@CommandHandler(SignUpCommand)
export class SignUpHandler
	implements ICommandHandler<SignUpCommand>
{
	constructor(private signUp: SignUpService) { }

	async execute(
		command: SignUpCommand,
	): Promise<any> {

		const {
			userId,
			email,
			username,
			password,
			role
		} = command;

		return await this.signUp.run(
			new Uuid(userId),
			email,
			username,
			password,
			role
		);
	}
}
