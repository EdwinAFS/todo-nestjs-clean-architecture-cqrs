import { Inject, Injectable } from '@nestjs/common';
import { Uuid } from 'src/shared/domain/value-object/Uuid';
import { UserNotFoundException } from '../../domain/exceptions/user-not-found.exception';
import { User } from '../../domain/models/User';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class UpdateUserService {
	constructor(
		@Inject('UserRepository') private userRepository: UserRepository,
	) { }

	async run(
		userId: Uuid,
		email: string,
		password: string,
		role: string,
	): Promise<void> {

		const user = await this.userRepository.findById(userId);

		if (!user) {
			throw new UserNotFoundException(userId.toString());
		}

		await this.userRepository.update(user.id, new User(user.id, email, password, role));
	}
}
