import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Todo } from 'src/components/todo/domain/models/Todo';
import config from 'src/environments/config';

@Injectable()
export class UpdateTodoService {
	constructor(
		@Inject(config.KEY) private configService: ConfigType<typeof config>,
	) {
		// repository and eventBus
	}

	async run(
		productId: string,
		name: string,
		description: string,
		price: number,
	): Promise<void> {
		const product = new Todo(productId, name, description, price);
		console.log('update-product.service => ', product);
		console.log(this.configService.database.DB_NAME);
	}
}
