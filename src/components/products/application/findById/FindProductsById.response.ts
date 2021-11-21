import { Product } from '../../domain/models/Product';

export class FindProductsByIdResponse {
	readonly product: any;

	constructor(product: Product) {
		this.product = product.toPrimitives();
	}
}
