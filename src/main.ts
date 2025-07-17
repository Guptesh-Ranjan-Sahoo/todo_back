import { NestFactory } from '@nestjs/core';
import { TodosModule } from './todos/todos.module';

async function bootstrap() {
  const app = await NestFactory.create(TodosModule);
  app.enableCors({
    origin: 'http://localhost:5173', // Only allow requests from this origin
    credentials: true,               // Allow cookies/auth headers if needed
  });
  await app.listen(process.env.PORT ?? 3000);
  console.log(`🚀 Server is running at http://localhost:${process.env.PORT ?? 3000}`);
}
bootstrap();
