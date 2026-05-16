import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = parseInt(process.env.PORT || '3000', 10);
  const host = process.env.HOST || '0.0.0.0';
  // On Render, RENDER_EXTERNAL_URL is set automatically (e.g. https://your-service.onrender.com)
  const publicUrl =
    process.env.RENDER_EXTERNAL_URL?.trim() ||
    process.env.NETWORK_IP ||
    `http://localhost:${port}`;
  const mongoUri = (process.env.MONGODB_URI ?? '').trim();
  const hasMongoUri = mongoUri.length > 0;
  const mongoHostMatch = mongoUri.match(/@([^/?]+)/);
  const mongoHost = mongoHostMatch?.[1] ?? '(unknown)';

  // Startup diagnostics without exposing secrets
  console.log(`[BOOT] PORT=${port}`);
  console.log(`[BOOT] MONGODB_URI configured: ${hasMongoUri ? 'YES' : 'NO'}`);
  if (hasMongoUri) {
    console.log(`[BOOT] Mongo cluster host: ${mongoHost}`);
    if (mongoUri.includes('localhost') || mongoUri.includes('127.0.0.1')) {
      console.warn('[BOOT] WARNING: MONGODB_URI uses localhost — will fail on Render');
    }
  }

  const isProd = process.env.NODE_ENV === 'production';
  const app = await NestFactory.create(AppModule, {
    logger: isProd ? ['error', 'warn', 'log'] : undefined,
  });
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
    whitelist: true,
    forbidNonWhitelisted: false,
    skipMissingProperties: false, // Don't skip missing properties
  }));

  // Swagger — enabled always (use DISABLE_SWAGGER=true env var to turn off)
  if (process.env.DISABLE_SWAGGER !== 'true') {
    const config = new DocumentBuilder()
      .setTitle('Shop app')
      .setDescription('Shop App APIs')
      .setVersion('1.0')
      .addBearerAuth()
      .addTag('apis')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);
  }

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
  console.log(`📍 Local:      http://localhost:${port}`);
  console.log(`🌐 Public URL: ${publicUrl}`);
  console.log(`📚 Swagger:    ${publicUrl}/swagger`);
  console.log(`🔌 WebSocket:  ${publicUrl.replace(/^http/, 'ws')}`);
  console.log('=====================================\n');
}

bootstrap().catch((err) => {
  console.error('[BOOT] Fatal startup error:', err?.message ?? err);
  if (String(err?.message ?? '').includes('whitelist')) {
    console.error(
      '[BOOT] Fix: MongoDB Atlas → Network Access → Add IP → Allow access from anywhere (0.0.0.0/0) for Render.',
    );
  }
  process.exit(1);
});
