import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { ValidateCredentialsService } from './application/validateCredentials/validateCredentials.service';
import { SignInService } from './application/signIn/signIn.service';
import { SignUpService } from './application/signUp/signUp.service';

import { AuthController } from './infraestructure/controllers/auth.controller';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './infraestructure/strategies/local.strategy';
import { JwtStrategy } from './infraestructure/strategies/jwt.strategy';

import { UserModule } from '../users/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ValidateCredentialsHandler } from './application/validateCredentials/validateCredentials.handler';
import { SignUpHandler } from './application/signUp/signUp.handler';
import { SignInHandler } from './application/signIn/signIn.handler';

export const CommandHandlers = [
	ValidateCredentialsHandler,
	SignUpHandler,
	SignInHandler
];
export const Repositories = [];

export const Services = [
	ValidateCredentialsService,
	SignInService,
	SignUpService
];

@Module({
	imports: [
		CqrsModule,
		UserModule,
		PassportModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) => {
				return {
					secret: configService.get<string>('JWT_SECRET'),
					signOptions: {
						expiresIn: configService.get<string>('EXPIRES_IN'),
						audience: configService.get<string>('APP_URL')
					},
				};
			},
			inject: [ConfigService]
		})
	],
	controllers: [AuthController],

	providers: [
		...Services,
		...CommandHandlers,
		...Repositories,
		LocalStrategy,
		JwtStrategy
	],
	exports: [
		...Services
	]
})
export class AuthModule { }
