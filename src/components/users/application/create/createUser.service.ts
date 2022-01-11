import { Inject, Injectable } from '@nestjs/common';
import { Uuid } from 'src/shared/domain/value-object/Uuid';
import { UserExistsException } from '../../../../shared/domain/exceptions/user-exists.exception';
import { User } from '../../domain/models/User';
import { UserRepository } from '../../domain/repositories/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserService {
	constructor(
		@Inject('UserRepository') private userRepository: UserRepository,
	) { }

	async run(
		userId: Uuid,
		email: string,
		username: string,
		password: string,
		role: string,
	): Promise<void> {

		const user = await this.userRepository.findByUsername(username);

		if (user) {
			throw new UserExistsException(user.username);
		}

		const hash = await this.hashPassword(password);

		await this.userRepository.create(new User(userId, email, username, hash, role));
	}

	private async hashPassword(password: string): Promise<string> {
		const salt = await bcrypt.genSalt(10);
		return await bcrypt.hash(password, salt);
	}
}
