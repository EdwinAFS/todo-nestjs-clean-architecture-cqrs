import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	welcome(): string {
		return 'welcome to the Todo API';
	}
}
