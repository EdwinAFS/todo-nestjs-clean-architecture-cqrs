import { ApiProperty } from '@nestjs/swagger';
import {
	IsDate,
	IsNotEmpty,
	IsOptional,
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

	@IsUUID()
	@IsNotEmpty()
	readonly userId: string;

	@IsDate()
	@IsOptional()
	readonly created_at: Date;

	@IsDate()
	@IsOptional()
	readonly updated_at: Date;
}
