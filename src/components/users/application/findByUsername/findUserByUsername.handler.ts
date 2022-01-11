import { FindUserByUsernameResponse } from './findUserByUsername.response';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindUserByUsernameService } from './findUserByUsername.service';
import { FindUserByUsernameQuery } from './findUserByUsername.query';

@QueryHandler(FindUserByUsernameQuery)
export class FindUserByUsernameHandler
	implements IQueryHandler<FindUserByUsernameQuery>
{
	constructor(private findUserByUsernameService: FindUserByUsernameService) { }

	async execute(
		query: FindUserByUsernameQuery,
	): Promise<FindUserByUsernameResponse> {
		return await this.findUserByUsernameService.run(query.username);
	}
}
