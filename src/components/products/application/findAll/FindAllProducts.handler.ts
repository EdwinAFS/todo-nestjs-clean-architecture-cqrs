import { FindAllProductsResponse } from './FindAllProducts.response';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindAllProductsQuery } from './FindAllProducts.query';
import { FindAllProductsService } from './FindAllProducts.service';

@QueryHandler(FindAllProductsQuery)
export class FindAllHandler implements IQueryHandler<FindAllProductsQuery> {
	constructor(private findAllProductsService: FindAllProductsService) {}

	async execute(): Promise<FindAllProductsResponse> {
		return await this.findAllProductsService.run();
	}
}
