import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    const secretOrKey = process.env.JWT_SECRET || 'fallback-secret-key-change-in-production';
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secretOrKey,
    });
    console.log('🔑 [JWT STRATEGY] Initialized with secret:', secretOrKey ? 'Secret configured' : 'No secret');
  }

  async validate(payload: any) {
    console.log('✅ [JWT STRATEGY] Token validated, payload:', payload);
    return payload;
  }
}
