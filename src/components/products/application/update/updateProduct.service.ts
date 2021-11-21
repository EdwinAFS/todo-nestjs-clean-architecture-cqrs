import { Injectable } from '@nestjs/common';
import { Product } from 'src/components/products/domain/models/Product';

@Injectable()
export class UpdateProductService {
	constructor() {
		// repository and eventBus
	}

	async run(
		productId: string,
		name: string,
		description: string,
		price: number,
	): Promise<void> {
		const product = new Product(productId, name, description, price);
		console.log('update-product.service => ', product);
	}
}
