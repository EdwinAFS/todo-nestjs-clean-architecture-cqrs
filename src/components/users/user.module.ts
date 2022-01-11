import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/shared/infraestructure/persistence/user.entity';
import { CreateUserService } from './application/create/createUser.service';
import { FindAllHandler } from './application/findAll/findAllUser.handler';
import { FindAllUserService } from './application/findAll/findAllUser.service';
import { FindUserByIdHandler } from './application/findById/findUserById.handler';
import { FindUserByIdService } from './application/findById/findUserById.service';
import { FindUserByUsernameService } from './application/findByUsername/findUserByUsername.service';
import { UpdateUserHandler } from './application/update/updateUser.handler';
import { UpdateUserService } from './application/update/updateUser.service';
import { UsersController } from './infraestructure/controllers/users.controller';
import { UserMysqlRepository } from './infraestructure/repositories/user.mysql.respository';

export const CommandHandlers = [
	UpdateUserHandler,
	FindUserByIdHandler,
	FindAllHandler,
];
export const Services = [
	FindAllUserService,
	FindUserByIdService,
	UpdateUserService,
	FindUserByUsernameService,
	CreateUserService
];

export const Repositories = [
	{
		provide: 'UserRepository',
		useClass: UserMysqlRepository,
	}
];

@Module({
	imports: [CqrsModule, TypeOrmModule.forFeature([
		UserEntity
	])],
	controllers: [UsersController],
	providers: [
		...Services,
		...CommandHandlers,
		...Repositories,
	],
	exports: [
		...Services
	]
})
export class UserModule { }
