import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
	@Get()
	getAll() {
		return {
			message: 'CATEGORY_ALL',
		};
	}

	@Get(':categoryId')
	getOne() {
		return {
			message: 'CATEGORY_ONE',
		};
	}

	@Post()
	create(@Body() payload: any) {
		return {
			message: 'CATEGORY_CREATED',
			payload: payload,
		};
	}

	@Put(':categoryId')
	update(@Param('categoryId') categoryId: number, @Body() payload: any) {
		return {
			categoryId: categoryId,
			message: 'CATEGORY_UPDATED',
			payload: payload,
		};
	}

	@Delete(':categoryId')
	delete(@Param('categoryId') categoryId: number) {
		return {
			categoryId: categoryId,
			message: 'CATEGORY_DELETED',
		};
	}
}
