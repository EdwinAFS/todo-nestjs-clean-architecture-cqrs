import { CreateProductDto } from './CreateProduct.dto';
import { FindProductsByIdQuery } from '../../../application/findById/FindProductsById.query';
import { UpdateProductCommand } from '../../../application/update/updateProduct.command';
import { CreateProductCommand } from '../../../application/create/createProduct.command';
import { ApiController } from '../../../../../shared/infraestructure/ApiController';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { FindAllProductsQuery } from '../../../application/findAll/FindAllProducts.query';
import { UpdateProductDto } from './UpdateProduct.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController extends ApiController {
	@Get()
	@ApiOperation({ summary: 'Get all products' })
	getAll() {
		return this.queryBus.execute(new FindAllProductsQuery());
	}

	@Get(':productId')
	getOne(@Param('productId') productId: string) {
		return this.queryBus.execute(new FindProductsByIdQuery(productId));
	}

	@Post()
	create(@Body() createProductDto: CreateProductDto) {
		return this.commandBus.execute(
			new CreateProductCommand(
				createProductDto.productId,
				createProductDto.name,
				createProductDto.description,
				createProductDto.price,
			),
		);
	}

	@Put(':productId')
	update(
		@Param('productId') productId: string,
		@Body() payload: UpdateProductDto,
	) {
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
