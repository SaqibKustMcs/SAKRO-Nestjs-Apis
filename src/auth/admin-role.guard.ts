import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

/** JWT payload from JwtStrategy.validate — admin login includes userRole. */
@Injectable()
export class AdminRoleGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<{ user?: Record<string, unknown> }>();
    const user = req.user;
    const role = user?.['userRole'] ?? user?.['role'];
    if (role === 'admin') return true;
    throw new ForbiddenException('Admin access only');
  }
}
