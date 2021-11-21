import { FindAllProductsResponse } from './FindAllProducts.response';
import { Injectable } from '@nestjs/common';
import { Product } from 'src/components/products/domain/models/Product';

@Injectable()
export class FindAllProductsService {
	constructor() {
		// repository and eventBus
	}

	async run() {
		const products = [new Product('1', 'test', 'test', 123123)];
		return new FindAllProductsResponse(products);
	}
}
