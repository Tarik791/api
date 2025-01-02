import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'https://www.infoontheweb.com/home4/',
      'https://www.infoontheweb.com/home4',
      'https://www.infoontheweb.com',
      'https://www.infoontheweb.com/',
      'https://127.0.0.1:3000/',
      'https://localhost:3000/',
      'https://127.0.0.1:3000',
      'https://localhost:3000',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });  
  await app.listen(8000);  
}

bootstrap();
