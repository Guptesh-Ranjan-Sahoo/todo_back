import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todosRepository.find();
  }

  async findOne(id: number): Promise<Todo> { 
    const todo = await this.todosRepository.findOneBy({ id });
  if (!todo) {
    throw new NotFoundException(`Todo with id ${id} not found`);
  }
  return todo;

  }

  async create(todoData: Partial<Todo>): Promise<Todo> {
    const todo = this.todosRepository.create(todoData);
    return this.todosRepository.save(todo);
  }

  async update(id: number, updateData: Partial<Todo>): Promise<Todo> {
    await this.todosRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.todosRepository.delete(id);
  }
}
