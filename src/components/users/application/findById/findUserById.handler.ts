import { FindUserByIdResponse } from './findUserById.response';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindUserByIdService } from './findUserById.service';
import { FindUserByIdQuery } from './findUserById.query';
import { Uuid } from 'src/shared/domain/value-object/Uuid';

@QueryHandler(FindUserByIdQuery)
export class FindUserByIdHandler
	implements IQueryHandler<FindUserByIdQuery>
{
	constructor(private findUserByIdService: FindUserByIdService) { }

	async execute(
		query: FindUserByIdQuery,
	): Promise<FindUserByIdResponse> {
		const userId = new Uuid(query.userId);
		return await this.findUserByIdService.run(userId);
	}
}
