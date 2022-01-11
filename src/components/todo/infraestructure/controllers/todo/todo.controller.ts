import { CreateTodoDto } from './dto/create-todo.dto';
import { FindTodoByIdQuery } from '../../../application/findById/findTodoById.query';
import { UpdateTodoCommand } from '../../../application/update/updateTodo.command';
import { CreateTodoCommand } from '../../../application/create/createTodo.command';
import { ApiController } from '../../../../../shared/infraestructure/ApiController';
import { Body, Controller, Get, NotFoundException, Param, ParseUUIDPipe, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { FindAllTodoQuery } from '../../../application/findAll/findAllTodo.query';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { TodoNotFoundException } from 'src/components/todo/domain/exceptions/todo-not-found.exception';
import { JwtAuthGuard } from 'src/shared/infraestructure/guards/jwt-auth.guard';
import { CurrentUserParam } from 'src/shared/infraestructure/decorator/currentUser.decorator';
import { CurrentUser } from 'src/shared/domain/currentUser';
import { CompletedTodoCommand } from 'src/components/todo/application/completed/completedTodo.command';

@ApiTags('todo')
@Controller('api/v1/todo')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class TodoController extends ApiController {
	@Get('/all')
	@ApiOperation({ summary: 'Get all todo by user' })
	async getAllByUserId(@CurrentUserParam() user: CurrentUser) {
		return await this.queryBus.execute(new FindAllTodoQuery(user.id));
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
	async create(@CurrentUserParam() user: CurrentUser, @Body() createTodoDto: CreateTodoDto) {
		await this.commandBus.execute(
			new CreateTodoCommand(
				createTodoDto.id,
				createTodoDto.title,
				createTodoDto.description,
				user.id
			),
		);
	}

	@Put(':todoId')
	async update(
		@CurrentUserParam() user: CurrentUser,
		@Param('todoId', ParseUUIDPipe) todoId: string,
		@Body() payload: UpdateTodoDto,
	) {
		try {
			await this.commandBus.execute(
				new UpdateTodoCommand(
					todoId,
					payload.title,
					payload.description,
					user.id
				),
			);
		} catch (error) {
			if (error instanceof TodoNotFoundException) {
				throw new NotFoundException(error.message);
			}

			throw error;
		}
	}

	@Patch('completed/:todoId')
	async completed(
		@Param('todoId', ParseUUIDPipe) todoId: string
	) {
		try {
			await this.commandBus.execute(
				new CompletedTodoCommand(
					todoId
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