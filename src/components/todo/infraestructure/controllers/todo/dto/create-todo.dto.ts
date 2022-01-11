import { ApiProperty } from '@nestjs/swagger';
import {
	IsNotEmpty,
	IsString,
	IsUUID,
} from 'class-validator';

export class CreateTodoDto {
	@ApiProperty({ description: 'todo uuid' })
	@IsUUID()
	@IsNotEmpty()
	readonly id: string;

	@IsString()
	@IsNotEmpty()
	readonly title: string;

	@IsString()
	@IsNotEmpty()
	readonly description: string;
}
