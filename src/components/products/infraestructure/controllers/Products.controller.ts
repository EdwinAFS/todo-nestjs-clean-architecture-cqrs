import { FindProductsByIdQuery } from '../../application/findById/FindProductsById.query';
import { UpdateProductCommand } from '../../application/update/updateProduct.command';
import { CreateProductCommand } from '../../application/create/createProduct.command';
import { ApiController } from '../../../../shared/infraestructure/ApiController';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { FindAllProductsQuery } from '../../application/findAll/FindAllProducts.query';

@Controller('products')
export class ProductsController extends ApiController {
	@Get()
	getAll() {
		return this.queryBus.execute(new FindAllProductsQuery());
	}

	@Get(':productId')
	getOne(@Param('productId') productId: string) {
		return this.queryBus.execute(new FindProductsByIdQuery(productId));
	}

	@Post()
	create(@Body() payload: any) {
		return this.commandBus.execute(
			new CreateProductCommand(
				payload.productId,
				payload.name,
				payload.description,
				payload.price,
			),
		);
	}

	@Put(':productId')
	update(@Param('productId') productId: string, @Body() payload: any) {
		return this.commandBus.execute(
			new UpdateProductCommand(
				productId,
				payload.name,
				payload.description,
				payload.price,
			),
		);
	}
}
