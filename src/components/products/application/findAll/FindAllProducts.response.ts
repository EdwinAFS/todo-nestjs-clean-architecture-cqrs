import { Product } from '../../domain/models/Product';

export class FindAllProductsResponse {
	readonly products: Array<any>;

	constructor(products: Array<Product>) {
		this.products = products.map((product) => product.toPrimitives());
	}
}
