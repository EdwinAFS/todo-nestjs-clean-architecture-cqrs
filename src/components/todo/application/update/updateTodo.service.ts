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
		id: string,
		title: string,
		description: string,
		created_at: Date,
		updated_at: Date,
	): Promise<void> {
		const product = new Todo(id, title, description, created_at, updated_at);

	}
}
