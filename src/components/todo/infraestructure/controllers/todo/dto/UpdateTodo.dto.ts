import { PartialType } from '@nestjs/swagger';
import { CreateTodoDto } from './CreateTodo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) { }
