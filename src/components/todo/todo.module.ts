import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { FindAllTodoService } from './application/findAll/FindAllTodo.service';
import { FindTodoByIdService } from './application/findById/FindTodoById.service';
import { UpdateTodoService } from './application/update/updateTodo.service';
import { CreateTodoService } from './application/create/createTodo.service';

import { FindTodoByIdHandler } from './application/findById/FindTodoById.handler';
import { UpdateTodoHandler } from './application/update/updateTodo.handler';
import { CreateTodoHandler } from './application/create/createTodo.handler';
import { FindAllHandler } from './application/findAll/FindAllTodo.handler';

import { TodoController } from './infraestructure/controllers/todo/Todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from 'src/shared/infraestructure/persistence/todo.entity';

export const CommandHandlers = [
	CreateTodoHandler,
	UpdateTodoHandler,
	FindTodoByIdHandler,
	FindAllHandler,
];
export const TodoServices = [
	FindAllTodoService,
	FindTodoByIdService,
	UpdateTodoService,
	CreateTodoService,
];

@Module({
	imports: [CqrsModule, TypeOrmModule.forFeature([
		Todo
	])],
	controllers: [TodoController],

	providers: [
		...TodoServices,
		...CommandHandlers,
	],
})
export class TodoModule { }
