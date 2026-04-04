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

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      // Fail faster when Mongo is unreachable (avoids long-hanging writes from the API client’s perspective)
      serverSelectionTimeoutMS: 15000,
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
