import { FindUserByIdResponse } from './findUserById.response';
import { Inject, Injectable } from '@nestjs/common';
import { UserNotFoundException } from '../../domain/exceptions/user-not-found.exception';
import { Uuid } from 'src/shared/domain/value-object/Uuid';
import { UserRepository } from '../../domain/repositories/user.repository';

@Injectable()
export class FindUserByIdService {
	constructor(@Inject('UserRepository') private userRepository: UserRepository,
	) { }

	async run(userId: Uuid) {
		const user = await this.userRepository.findById(userId);

		if (!user) {
			throw new UserNotFoundException(userId.toString());
		}

		return new FindUserByIdResponse(user);
	}
}
