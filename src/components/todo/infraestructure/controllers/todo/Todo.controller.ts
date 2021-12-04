import { CreateTodoDto } from './dto/CreateTodo.dto';
import { FindTodoByIdQuery } from '../../../application/findById/FindTodoById.query';
import { UpdateTodoCommand } from '../../../application/update/updateTodo.command';
import { CreateTodoCommand } from '../../../application/create/createTodo.command';
import { ApiController } from '../../../../../shared/infraestructure/ApiController';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { FindAllTodoQuery } from '../../../application/findAll/FindAllTodo.query';
import { UpdateTodoDto } from './dto/UpdateTodo.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('todo')
@Controller('todo')
export class TodoController extends ApiController {
	@Get()
	@ApiOperation({ summary: 'Get all todo' })
	getAllByUserId() {
		return this.queryBus.execute(new FindAllTodoQuery());
	}

	@Get(':todoId')
	getOne(@Param('todoId') todoId: string) {
		return this.queryBus.execute(new FindTodoByIdQuery(todoId));
	}

	@Post()
	create(@Body() createTodoDto: CreateTodoDto) {
		return this.commandBus.execute(
			new CreateTodoCommand(
				createTodoDto.id,
				createTodoDto.title,
				createTodoDto.description,
				createTodoDto.userId
			),
		);
	}

	@Put(':todoId')
	update(
		@Param('todoId') todoId: string,
		@Body() payload: UpdateTodoDto,
	) {
		return this.commandBus.execute(
			new UpdateTodoCommand(
				todoId,
				payload.title,
				payload.description,
				payload.userId
			),
		);
	}
}
