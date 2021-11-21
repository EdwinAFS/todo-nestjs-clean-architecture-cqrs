import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateProductCommand } from './createProduct.command';
import { CreateProductService } from './createProduct.service';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler
	implements ICommandHandler<CreateProductCommand>
{
	constructor(private createProductService: CreateProductService) {}

	async execute(command: CreateProductCommand) {
		const { productId, name, description, price } = command;

		await this.createProductService.run(
			productId,
			name,
			description,
			price,
		);
	}
}
