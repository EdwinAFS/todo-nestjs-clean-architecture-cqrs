import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Todo } from 'src/components/todo/domain/models/Todo';
import config from 'src/environments/config';
import { Uuid } from 'src/shared/domain/value-object/Uuid';

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
		userId: string
	): Promise<void> {
		const product = new Todo(new Uuid(id), title, description, userId);

	}
}
