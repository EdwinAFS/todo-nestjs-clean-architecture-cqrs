export class CreateProductCommand {
	constructor(
		public readonly productId: string,
		public readonly name: string,
		public readonly description: string,
		public readonly price: number,
	) {}
}
