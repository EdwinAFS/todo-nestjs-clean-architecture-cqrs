import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsIn,
    IsOptional,
    IsString,
    IsUUID,
} from 'class-validator';

export const ROLES = [
    'ADMIN', 'CLIENT'
]

export class CreateUserDto {
    @ApiProperty({ description: 'User UUID' })
    @IsUUID()
    readonly id: string;

    @IsEmail()
    readonly email: string;

    @IsString()
    readonly username: string;

    @IsString()
    readonly password: string;

    @IsString()
    @IsIn(ROLES)
    readonly role: string;
}
