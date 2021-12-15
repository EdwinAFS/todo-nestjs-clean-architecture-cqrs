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

export class UpdateUserDto {
    @ApiProperty({ description: 'User UUID' })
    @IsUUID()
    @IsOptional()
    readonly id: string;

    @IsOptional()
    @IsEmail()
    readonly email: string;

    @IsString()
    @IsOptional()
    readonly password: string;

    @IsUUID()
    @IsOptional()
    @IsIn(ROLES)
    readonly role: string;
}
