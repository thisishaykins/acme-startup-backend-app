import { config } from 'dotenv';
config(); // Load environment variables from .env file

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('ACME Startup Service')
    .setDescription('The ACME Startup Service API Documentation')
    .setVersion('1.0')
    .addTag('invoices')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
