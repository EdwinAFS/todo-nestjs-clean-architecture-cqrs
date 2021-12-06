import { FindTodoByIdResponse } from './findTodoById.response';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindTodoByIdService } from './findTodoById.service';
import { FindTodoByIdQuery } from './findTodoById.query';
import { Uuid } from 'src/shared/domain/value-object/Uuid';

@QueryHandler(FindTodoByIdQuery)
export class FindTodoByIdHandler
	implements IQueryHandler<FindTodoByIdQuery>
{
	constructor(private findTodoByIdService: FindTodoByIdService) { }

	async execute(
		query: FindTodoByIdQuery,
	): Promise<FindTodoByIdResponse> {
		const todoId = new Uuid(query.todoId);
		return await this.findTodoByIdService.run(todoId);
	}
}
