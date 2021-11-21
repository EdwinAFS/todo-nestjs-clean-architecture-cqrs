import { Nullable } from 'src/shared/domain/Nullable';

export class Product {
	readonly productId: string;
	readonly name: string;
	readonly description: string;
	readonly price: number;

	constructor(
		productId: string,
		name: string,
		description: string,
		price: number,
	) {
		this.productId = productId;
		this.name = name;
		this.description = description;
		this.price = price;
	}

	static toDomain(
		productId: string,
		name: string,
		description: string,
		price: number,
	): Nullable<Product> {
		return new Product(productId, name, description, price);
	}

	toPrimitives() {
		return {
			productId: this.productId,
			name: this.name,
			description: this.description,
			price: this.price,
		};
	}
}
