import { FindAllTodoResponse } from './FindAllTodo.response';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindAllTodoQuery } from './FindAllTodo.query';
import { FindAllTodoService } from './FindAllTodo.service';

@QueryHandler(FindAllTodoQuery)
export class FindAllHandler implements IQueryHandler<FindAllTodoQuery> {
	constructor(private findAllTodoService: FindAllTodoService) { }

	async execute(): Promise<FindAllTodoResponse> {
		return await this.findAllTodoService.run();
	}
}
