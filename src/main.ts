import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
    whitelist: true,
    forbidNonWhitelisted: false,
    skipMissingProperties: false, // Don't skip missing properties
  }));

  const config = new DocumentBuilder()
    .setTitle('Shop app')
    .setDescription('Shop App APIs')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('apis')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  // Get configuration from environment variables
  const port = process.env.PORT || 3101;
  const host = process.env.HOST || '0.0.0.0';
  const networkIp = process.env.NETWORK_IP || 'localhost';

  // Enable CORS
  app.enableCors({
    origin: process.env.CORS_ORIGIN?.split(',') || '*',
    credentials: true,
  });

  // Listen on all network interfaces (0.0.0.0) to allow connections from same network
  await app.listen(port, host);

  console.log('\n🚀 ===================================');
  console.log('✅ API is running successfully!');
  console.log(`📍 Local:   http://localhost:${port}`);
  console.log(`📍 Network: http://${networkIp}:${port}`);
  console.log(`📚 Swagger: http://${networkIp}:${port}/swagger`);
  console.log(`🌐 WebSocket: ws://${networkIp}:${port}`);
  console.log('=====================================\n');
}
bootstrap();
