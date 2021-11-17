import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
	@Get()
	getAll() {
		return {
			message: 'PRODUCT_ALL',
		};
	}

	@Get(':productId')
	getOne() {
		return {
			message: 'PRODUCT_ONE',
		};
	}

	@Post()
	create(@Body() payload: any) {
		return {
			message: 'PRODUCT_CREATED',
			payload: payload,
		};
	}

	@Put(':productId')
	update(@Param('productId') productId: number, @Body() payload: any) {
		return {
			productId: productId,
			message: 'PRODUCT_UPDATED',
			payload: payload,
		};
	}

	@Delete(':productId')
	delete(@Param('productId') productId: number) {
		return {
			productId: productId,
			message: 'PRODUCT_DELETED',
		};
	}
}
