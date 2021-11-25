import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CategoriesController } from './components/categories/infraestructure/categories.controller';
import { BrandsController } from './components/brands/infraestructure/brands.controller';
import { CostumersController } from './components/costumers/infraestructure/costumers.controller';
import { UsersController } from './components/users/infraestructure/users.controller';
import { OrdersController } from './components/orders/infraestructure/orders.controller';
import { ProductsModule } from './components/products/products.module';
import { ConfigModule } from '@nestjs/config';
import config from './environments/config';
import { environments } from './environments/enviroments';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: environments[process.env.NODE_ENV] || environments.dev,
			isGlobal: true,
			load: [config],
		}),
		ProductsModule,
	],
	controllers: [
		AppController,
		CategoriesController,
		BrandsController,
		CostumersController,
		UsersController,
		OrdersController,
	],
	providers: [AppService],
})
export class AppModule {}
