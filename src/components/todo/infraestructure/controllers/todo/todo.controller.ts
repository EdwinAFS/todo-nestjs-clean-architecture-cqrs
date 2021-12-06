import { CreateTodoDto } from './dto/create-todo.dto';
import { FindTodoByIdQuery } from '../../../application/findById/findTodoById.query';
import { UpdateTodoCommand } from '../../../application/update/updateTodo.command';
import { CreateTodoCommand } from '../../../application/create/createTodo.command';
import { ApiController } from '../../../../../shared/infraestructure/ApiController';
import { Body, Controller, Get, NotFoundException, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { FindAllTodoQuery } from '../../../application/findAll/findAllTodo.query';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { TodoNotFoundException } from 'src/components/todo/domain/exceptions/todo-not-found.exception';

@ApiTags('todo')
@Controller('todo')
export class TodoController extends ApiController {
	@Get(':userId/all')
	@ApiOperation({ summary: 'Get all todo by user' })
	async getAllByUserId(@Param('userId', ParseUUIDPipe) userId: string) {
		return await this.queryBus.execute(new FindAllTodoQuery(userId));
	}

	@Get(':todoId')
	async getById(@Param('todoId', ParseUUIDPipe) todoId: string) {
		try {
			return await this.queryBus.execute(new FindTodoByIdQuery(todoId));
		} catch (error) {
			if (error instanceof TodoNotFoundException) {
				throw new NotFoundException(error.message);
			}

			throw error;
		}
	}

	@Post()
	async create(@Body() createTodoDto: CreateTodoDto) {
		await this.commandBus.execute(
			new CreateTodoCommand(
				createTodoDto.id,
				createTodoDto.title,
				createTodoDto.description,
				createTodoDto.userId
			),
		);
	}

	@Put(':todoId')
	async update(
		@Param('todoId', ParseUUIDPipe) todoId: string,
		@Body() payload: UpdateTodoDto,
	) {
		try {
			await this.commandBus.execute(
				new UpdateTodoCommand(
					todoId,
					payload.title,
					payload.description,
					payload.userId
				),
			);
		} catch (error) {
			if (error instanceof TodoNotFoundException) {
				throw new NotFoundException(error.message);
			}

			throw error;
		}
	}
}