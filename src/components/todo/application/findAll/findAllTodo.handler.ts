import { FindAllTodoResponse } from './findAllTodo.response';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindAllTodoQuery } from './findAllTodo.query';
import { FindAllTodoService } from './findAllTodo.service';
import { Uuid } from 'src/shared/domain/value-object/Uuid';

@QueryHandler(FindAllTodoQuery)
export class FindAllHandler implements IQueryHandler<FindAllTodoQuery> {
	constructor(private findAllTodoService: FindAllTodoService) { }

	async execute(query: FindAllTodoQuery): Promise<FindAllTodoResponse> {
		const { userId } = query;
		return await this.findAllTodoService.run(new Uuid(userId));
	}
}
