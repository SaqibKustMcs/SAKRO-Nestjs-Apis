import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { OtpDTO } from './dto/otp.dto';
import { SignupDTO } from './dto/signup.dto';
import { ApiTags, ApiBearerAuth, ApiOAuth2 } from '@nestjs/swagger';
import { EmailDTO } from './dto/email.dto';
import { PasswordDTO } from './dto/password.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { User } from 'src/decorators/user.decorator';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('signup')
  signup(@Body() signupDto: SignupDTO) {
    return this.authService.signup(signupDto);
  }

  @Post('isEmailExists')
  isEmailExists(@Body() emailDto: EmailDTO) {
    return this.authService.isEmailExists(emailDto)
  }

  @Post('verifyEmail')
  verifyEmail(@Body() otpDto: OtpDTO) {
    return this.authService.verifyEmail(otpDto);
  }

  @Post('resendOtp')
  resendOtp(@Body() emailDto: EmailDTO) {
    return this.authService.resendOtp(emailDto)
  }

  @Post('login')
  login(@Body() loginDto: LoginDTO) {
    return this.authService.login(loginDto);
  }

  @Post('forgotPassword')
  forgotPassword(@Body() emailDto: EmailDTO) {
    return this.authService.forgotPassword(emailDto);
  }

  @Post('verifyOtpForForgotPassword')
  verifyOtpForForgotPassword(@Body() otpDto: OtpDTO) {
    return this.authService.verifyOtpForForgotPassword(otpDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('resetPassword')
  resetPassword(@Body() passwordDto: PasswordDTO, @User() user) {
    return this.authService.resetPassword(passwordDto, user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('getLoggedInUsers')
  getLoggedInUsers(@User() user) {
    return this.authService.getLoggedInUsers(user)
  }

}
