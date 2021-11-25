import { ApiProperty } from '@nestjs/swagger';
import {
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsPositive,
	IsString,
	IsUUID,
} from 'class-validator';

export class CreateTodoDto {
	@ApiProperty({ description: 'todo uuid' })
	@IsUUID()
	@IsNotEmpty()
	readonly todoId: string;

	@IsString()
	@IsNotEmpty()
	readonly name: string;

	@IsString()
	@IsOptional()
	readonly description: string;

	@IsNumber()
	@IsPositive()
	@IsNotEmpty()
	readonly price: number;
}
