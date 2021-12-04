import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/shared/infraestructure/persistence/user.entity';

export const CommandHandlers = [];

export const UserServices = [];

@Module({
	imports: [CqrsModule, TypeOrmModule.forFeature([
		UserEntity
	])],
	controllers: [],
	providers: [
		...UserServices,
		...CommandHandlers,
	],
})
export class UserModule { }
