import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateProductCommand } from './updateProduct.command';
import { UpdateProductService } from './updateProduct.service';

@CommandHandler(UpdateProductCommand)
export class UpdateProductHandler
	implements ICommandHandler<UpdateProductCommand>
{
	constructor(private updateProductsService: UpdateProductService) {}

	async execute(command: UpdateProductCommand) {
		const { productId, name, description, price } = command;

		await this.updateProductsService.run(
			productId,
			name,
			description,
			price,
		);
	}
}
