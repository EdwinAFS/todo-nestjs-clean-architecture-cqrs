import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TimeOutInterceptor } from './shared/infraestructure/interceptors/timeout.interceptor';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const logger = new Logger();

	app.useGlobalInterceptors(
		new TimeOutInterceptor()
	);

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			transformOptions: {
				enableImplicitConversion: true
			}
		}),
	);

	const config = new DocumentBuilder()
		.setTitle('To-do')
		.setDescription('To-do')
		.setVersion('1.0')
		.addBearerAuth()
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('docs', app, document, {
		swaggerOptions: {
			filter: true
		}
	});

	await app.listen(process.env.PORT || 3000);

	logger.log(`Server is running in ${await app.getUrl()}`);
}
bootstrap();
