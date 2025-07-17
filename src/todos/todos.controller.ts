import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo, TodoStatus } from './todo.entity';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

   // 🔍 GET /todos/search?title=buy
   @Get('search')
   searchByTitle(@Query('title') title: string): Promise<Todo[]> {
     return this.todosService.searchByTitle(title);
   }
 
   // 📅 GET /todos/sort?by=createdAt&order=DESC
   // or    /todos/sort?by=updatedAt&order=ASC
   @Get('sort')
   sortBy(
     @Query('by') sortBy: 'createdAt' | 'updatedAt',
     @Query('order') order: 'ASC' | 'DESC' = 'ASC',
   ): Promise<Todo[]> {
     return this.todosService.sortByField(sortBy, order);
   }
 
   // ✅ GET /todos/filter?status=Todo or status=Done
   @Get('filter')
   filterByStatus(@Query('status') status: TodoStatus): Promise<Todo[]> {
     return this.todosService.filterByStatus(status);
   }  
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
