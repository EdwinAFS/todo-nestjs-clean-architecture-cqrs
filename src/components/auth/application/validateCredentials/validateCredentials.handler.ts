import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { ValidateCredentialsCommand } from './validateCredentials.command';
import { ValidateCredentialsResponse } from './validateCredentials.response';
import { ValidateCredentialsService } from './validateCredentials.service';

@CommandHandler(ValidateCredentialsCommand)
export class ValidateCredentialsHandler
	implements ICommandHandler<ValidateCredentialsCommand>
{
	constructor(private validateCredentialsService: ValidateCredentialsService) { }

	async execute(
		query: ValidateCredentialsCommand,
	): Promise<ValidateCredentialsResponse> {
		const { username, password } = query;
		return await this.validateCredentialsService.run(username, password);
	}
}
