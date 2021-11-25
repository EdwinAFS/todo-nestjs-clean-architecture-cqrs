import { FindTodoByIdResponse } from './FindTodoById.response';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindTodoByIdService } from './FindTodoById.service';
import { FindTodoByIdQuery } from './FindTodoById.query';

@QueryHandler(FindTodoByIdQuery)
export class FindTodoByIdHandler
	implements IQueryHandler<FindTodoByIdQuery>
{
	constructor(private findTodoByIdService: FindTodoByIdService) { }

	async execute(
		query: FindTodoByIdQuery,
	): Promise<FindTodoByIdResponse> {
		const { productId } = query;

		return await this.findTodoByIdService.run(productId);
	}
}
