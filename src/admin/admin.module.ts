import { Module } from '@nestjs/common';
import { AdminAuthController } from './admin-auth.controller';
import { AdminUsersController } from './admin-users.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule.forRoot()],
  controllers: [AdminAuthController, AdminUsersController],
})
export class AdminModule {}

