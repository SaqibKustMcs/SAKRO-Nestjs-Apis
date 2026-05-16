import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MediaUploadModule } from './file-management/media-upload/media-upload.module';
import { PostModule } from './post/post.module';
import { OrderModule } from './order/order.module';
import { CommentsModule } from './comments/comments.module';
import { VillageModule } from './village/village.module';
import { ShopModule } from './shop/shop.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { ChatModule } from './chat/chat.module';
import { AdminModule } from './admin/admin.module';
import { BannerModule } from './banner/banner.module';
import { NotificationModule } from './notification/notification.module';
import { PlatformSettingsModule } from './platform-settings/platform-settings.module';

function getMongoUri(): string {
  const uri = (process.env.MONGODB_URI ?? '').trim();
  if (!uri) {
    throw new Error(
      'MONGODB_URI is not set. Add it in Render Environment (Atlas connection string).',
    );
  }
  if (uri.includes('localhost') || uri.includes('127.0.0.1')) {
    throw new Error(
      'MONGODB_URI points to localhost — use your MongoDB Atlas SRV URL on Render.',
    );
  }
  return uri;
}

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(getMongoUri(), {
      serverSelectionTimeoutMS: 20000,
      retryWrites: true,
    }),
    AuthModule.forRoot(),
    ChatModule,
    MediaUploadModule,
    PostModule,
    OrderModule,
    CommentsModule,
    VillageModule,
    ShopModule,
    CategoryModule,
    ProductModule,
    AdminModule,
    BannerModule,
    NotificationModule,
    PlatformSettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
