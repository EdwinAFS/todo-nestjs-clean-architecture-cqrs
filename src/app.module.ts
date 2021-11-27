import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TodoModule } from './components/todo/todo.module';

import { environments } from './environments/enviroments';
import config from './environments/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: environments[process.env.NODE_ENV] || environments.dev,
			isGlobal: true,
			load: [config],
		}),
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.DB_HOST,
			port: parseInt(process.env.DB_PORT),
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			entities: ['./dist/shared/infraestructure/persistence/*.entity{.ts,.js}']
		}),
		TodoModule,
	],
	controllers: [
		AppController,
	],
	providers: [AppService],
})
export class AppModule { }
