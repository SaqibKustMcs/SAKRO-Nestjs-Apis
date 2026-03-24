import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = parseInt(process.env.PORT || '3000', 10);
  const host = process.env.HOST || '0.0.0.0';
  const networkIp = process.env.NETWORK_IP || 'localhost';
  const hasMongoUri = Boolean(process.env.MONGODB_URI);

  // Startup diagnostics without exposing secrets
  console.log(`[BOOT] PORT=${port}`);
  console.log(`[BOOT] MONGODB_URI configured: ${hasMongoUri ? 'YES' : 'NO'}`);

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

  // Enable CORS
  const corsOrigins = process.env.CORS_ORIGIN?.split(',') || ['*'];
  // Always add localhost:4200 for Angular dev server
  if (!corsOrigins.includes('http://localhost:4200') && corsOrigins[0] !== '*') {
    corsOrigins.push('http://localhost:4200');
  }
  
  app.enableCors({
    origin: corsOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
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
