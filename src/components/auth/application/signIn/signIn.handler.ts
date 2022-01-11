import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { SignInCommand } from './signIn.command';
import { SignInResponse } from './signIn.response';
import { SignInService } from './signIn.service';

@CommandHandler(SignInCommand)
export class SignInHandler
	implements ICommandHandler<SignInCommand>
{
	constructor(private signIn: SignInService) { }

	async execute(
		command: SignInCommand,
	): Promise<SignInResponse> {
		return await this.signIn.run({
			id: command.id,
			username: command.username
		});
	}
}
