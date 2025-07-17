import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { Todo } from './todo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // or your preferred DB type
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Goodera@123',
      database: 'todo',
      entities: [Todo],
      synchronize: true, // false in production!
      // ...other settings
    }),
    TypeOrmModule.forFeature([Todo]),
  ],
  controllers: [TodosController],
  providers: [TodosService],
  exports: [TodosService], // Optional: Export service if needed elsewhere
})
export class TodosModule {}
