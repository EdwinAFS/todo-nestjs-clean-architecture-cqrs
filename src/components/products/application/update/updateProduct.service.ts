import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Product } from 'src/components/products/domain/models/Product';
import config from 'src/environments/config';

@Injectable()
export class UpdateProductService {
	constructor(
		@Inject(config.KEY) private configService: ConfigType<typeof config>,
	) {
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
		console.log(this.configService.database.DB_NAME);
	}
}
