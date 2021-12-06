import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { FindAllTodoService } from './application/findAll/findAllTodo.service';
import { FindTodoByIdService } from './application/findById/findTodoById.service';
import { UpdateTodoService } from './application/update/updateTodo.service';
import { CreateTodoService } from './application/create/createTodo.service';

import { FindTodoByIdHandler } from './application/findById/findTodoById.handler';
import { UpdateTodoHandler } from './application/update/updateTodo.handler';
import { CreateTodoHandler } from './application/create/createTodo.handler';
import { FindAllHandler } from './application/findAll/findAllTodo.handler';

import { TodoController } from './infraestructure/controllers/todo/todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from 'src/shared/infraestructure/persistence/todo.entity';
import { TodoMysqlRepository } from './infraestructure/repositories/todo.mysql.respository';

export const CommandHandlers = [
	CreateTodoHandler,
	UpdateTodoHandler,
	FindTodoByIdHandler,
	FindAllHandler,
];
export const Services = [
	FindAllTodoService,
	FindTodoByIdService,
	UpdateTodoService,
	CreateTodoService,
];

export const Repositories = [
	{
		provide: 'TodoRepository',
		useClass: TodoMysqlRepository,
	}
];

@Module({
	imports: [CqrsModule, TypeOrmModule.forFeature([
		TodoEntity
	])],
	controllers: [TodoController],

	providers: [
		...Services,
		...CommandHandlers,
		...Repositories,
	],
})
export class TodoModule { }
