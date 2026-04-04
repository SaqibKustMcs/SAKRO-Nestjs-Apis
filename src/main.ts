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

  // CORS: list frontend app origins (e.g. http://localhost:4200), not the API URL.
  // Use CORS_ORIGIN=reflect to mirror the request Origin (works for LAN IPs during dev).
  const corsTokens = (process.env.CORS_ORIGIN?.split(',') ?? [])
    .map((o) => o.trim())
    .filter(Boolean);
  const useReflect =
    corsTokens.length === 0 ||
    corsTokens[0] === '*' ||
    corsTokens[0].toLowerCase() === 'reflect';
  const origin: boolean | string[] = useReflect
    ? true
    : [...corsTokens, 'http://localhost:4200'].filter((v, i, a) => a.indexOf(v) === i);

  console.log(
    `[BOOT] CORS: ${useReflect ? 'reflect Origin (dev/LAN)' : `whitelist (${(origin as string[]).length} origins)`}`,
  );

  app.enableCors({
    origin,
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
