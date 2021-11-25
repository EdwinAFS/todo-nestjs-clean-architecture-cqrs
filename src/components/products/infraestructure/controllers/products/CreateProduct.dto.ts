import { ApiProperty } from '@nestjs/swagger';
import {
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsPositive,
	IsString,
	IsUUID,
} from 'class-validator';

export class CreateProductDto {
	@ApiProperty({ description: 'product uuid' })
	@IsUUID()
	@IsNotEmpty()
	readonly productId: string;

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
