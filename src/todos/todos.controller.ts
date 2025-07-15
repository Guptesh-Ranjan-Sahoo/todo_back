import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todo.entity';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Todo> {
    return this.todosService.findOne(id);
  }

  @Post()
  create(@Body() todoData: Partial<Todo>): Promise<Todo> {
    return this.todosService.create(todoData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateData: Partial<Todo>): Promise<Todo> {
    return this.todosService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.todosService.remove(id);
  }
}
