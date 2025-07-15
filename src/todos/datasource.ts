import * as dotenv from 'dotenv';
dotenv.config();

import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres', // or 'mysql', 'sqlite', etc.
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Champion,1',
  database: 'todo_db',
  synchronize: false, // Set to false for production
  entities: ['src/todos/todo.entity.ts'],
  migrations: ['src/migrations/**/*.ts'],
  
});
