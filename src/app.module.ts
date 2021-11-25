import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TodoModule } from './components/todo/todo.module';

import { environments } from './environments/enviroments';
import config from './environments/config';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: environments[process.env.NODE_ENV] || environments.dev,
			isGlobal: true,
			load: [config],
		}),
		TodoModule,
	],
	controllers: [
		AppController,
	],
	providers: [AppService],
})
export class AppModule { }
