import { FindProductsByIdResponse } from './FindProductsById.response';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindProductsByIdService } from './FindProductsById.service';
import { FindProductsByIdQuery } from './FindProductsById.query';

@QueryHandler(FindProductsByIdQuery)
export class FindProductsByIdHandler
	implements IQueryHandler<FindProductsByIdQuery>
{
	constructor(private findProductsByIdService: FindProductsByIdService) {}

	async execute(
		query: FindProductsByIdQuery,
	): Promise<FindProductsByIdResponse> {
		const { productId } = query;

		return await this.findProductsByIdService.run(productId);
	}
}
