import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TodoModule } from './components/todo/todo.module';

import { environments } from './environments/enviroments';
import config from './environments/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './components/users/user.module';
import { AuthModule } from './components/auth/auth.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: environments[process.env.NODE_ENV] || environments.dev,
			isGlobal: true,
			load: [config],
		}),
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.TYPEORM_HOST,
			port: parseInt(process.env.TYPEORM_PORT),
			username: process.env.TYPEORM_USERNAME,
			password: process.env.TYPEORM_PASSWORD,
			database: process.env.TYPEORM_DATABASE,
			synchronize: false,
			entities: [process.env.TYPEORM_ENTITIES],
			autoLoadEntities: true
		}),
		TodoModule,
		UserModule,
		AuthModule
	],
	controllers: [
		AppController,
	],
	providers: [AppService],
})
export class AppModule { }
