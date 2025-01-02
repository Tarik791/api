import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: ['http://localhost:5173', 'https://infoontheweb.com'], // Dodane obe dozvoljene adrese
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Include cookies, if needed
  });

  const port = process.env.PORT || 3000;
  console.log(`Launching NestJS app on port ${port}, URL: http://0.0.0.0:${port}`);
  await app.listen(port);
}

bootstrap();
