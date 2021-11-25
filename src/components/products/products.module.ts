import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { FindAllProductsService } from './application/findAll/FindAllProducts.service';
import { FindProductsByIdService } from './application/findById/FindProductsById.service';
import { UpdateProductService } from './application/update/updateProduct.service';
import { CreateProductService } from './application/create/createProduct.service';

import { FindProductsByIdHandler } from './application/findById/FindProductsById.handler';
import { UpdateProductHandler } from './application/update/updateProduct.handler';
import { CreateProductHandler } from './application/create/createProduct.handler';
import { FindAllHandler } from './application/findAll/FindAllProducts.handler';

import { ProductsController } from './infraestructure/controllers/products/Products.controller';

export const CommandHandlers = [
	CreateProductHandler,
	UpdateProductHandler,
	FindProductsByIdHandler,
	FindAllHandler,
];
export const ProductServices = [
	FindAllProductsService,
	FindProductsByIdService,
	UpdateProductService,
	CreateProductService,
];

@Module({
	imports: [CqrsModule],
	controllers: [ProductsController],
	providers: [
		...ProductServices,
		...CommandHandlers,
		/* ProductRepository, */
	],
})
export class ProductsModule {}
