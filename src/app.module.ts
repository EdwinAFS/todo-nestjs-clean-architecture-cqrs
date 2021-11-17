import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductsController } from './modules/products/infraestructure/products.controller';
import { CategoriesController } from './modules/categories/infraestructure/categories.controller';
import { BrandsController } from './modules/brands/infraestructure/brands.controller';
import { CostumersController } from './modules/costumers/infraestructure/costumers.controller';
import { UsersController } from './modules/users/infraestructure/users.controller';
import { OrdersController } from './modules/orders/infraestructure/orders.controller';

@Module({
	imports: [],
	controllers: [
		AppController,
		ProductsController,
		CategoriesController,
		BrandsController,
		CostumersController,
		UsersController,
		OrdersController,
	],
	providers: [AppService],
})
export class AppModule {}
