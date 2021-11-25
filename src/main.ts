import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const logger = new Logger();

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
		}),
	);

	const config = new DocumentBuilder()
		.setTitle('To-do')
		.setDescription('To-do')
		.setVersion('1.0')
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('docs', app, document);

	await app.listen(process.env.PORT || 3000);

	logger.log(`Server is running in ${await app.getUrl()}`);
}
bootstrap();
