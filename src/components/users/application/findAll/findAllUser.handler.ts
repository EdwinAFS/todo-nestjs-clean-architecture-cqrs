import { FindAllUserResponse } from './findAllUser.response';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindAllUserQuery } from './findAllUser.query';
import { FindAllUserService } from './findAllUser.service';
import { Uuid } from 'src/shared/domain/value-object/Uuid';

@QueryHandler(FindAllUserQuery)
export class FindAllHandler implements IQueryHandler<FindAllUserQuery> {
	constructor(private findAllUserService: FindAllUserService) { }

	async execute(_: FindAllUserQuery): Promise<FindAllUserResponse> {
		return await this.findAllUserService.run();
	}
}
