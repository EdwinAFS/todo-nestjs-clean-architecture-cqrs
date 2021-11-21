import { FindProductsByIdResponse } from './FindProductsById.response';
import { Injectable } from '@nestjs/common';
import { Product } from 'src/components/products/domain/models/Product';
import { CoursesCounterNotExist } from '../../domain/exceptions/ProductNotExist';

@Injectable()
export class FindProductsByIdService {
	constructor() {
		// repository and eventBus
	}

	async run(productId: string) {
		const product = new Product(productId, 'test', 'test', 123123);

		if (!product) {
			throw new CoursesCounterNotExist();
		}

		return new FindProductsByIdResponse(product);
	}
}
