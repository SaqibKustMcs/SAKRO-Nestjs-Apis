import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Shop app')
    .setDescription('Shop App APIs')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('apis')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  const port = process.env.PORT || 3101;

  // Listen on all network interfaces (0.0.0.0) to allow connections from same network
  await app.listen(port, '0.0.0.0');

  console.log(`API is running on http://0.0.0.0:${port}`);
  console.log(`Local: http://localhost:${port}`);
  console.log(`Network: http://172.29.90.95:${port}`);
}
bootstrap();
