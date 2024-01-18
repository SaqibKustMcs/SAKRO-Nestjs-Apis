import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { Model } from 'mongoose';
import { User } from 'src/interface/user/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { SignupDTO } from './dto/signup.dto';
import { LoginDTO } from './dto/login.dto';
var bcrypt = require('bcryptjs');
//import * as otpGenerator from 'otp-generator';
import { OtpTypeEnum } from 'src/enum/otp.enum';
import { Otp } from 'src/interface/otp/otp.interface';
import { OtpDTO } from './dto/otp.dto';
import { EmailDTO } from './dto/email.dto';
import * as otpGenerator from 'otp-generator';
import { getEmail } from './email';
import { UtilsService } from '../utils/utils.service';
import { ChatService } from '@app/chat/chat.service';
const GO_CARDLESS_ACTIVE = false;

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel('User') private _userModel: Model<User>,
    @InjectModel('Otp') private _otpModel: Model<Otp>,
    private chatService: ChatService,
    private utilsService: UtilsService,
  ) {
  }

  private generateToken(payload) {
    return {
      access_token: `Bearer ${this.jwtService.sign(payload)}`,
    };
  }

  async signup(signupDto: SignupDTO) {
    try {

      signupDto.email = signupDto?.email?.toLowerCase();

      const existingUser = await this._userModel.findOne({
        email: signupDto.email,
        isEmailVerified: true,
        isDeleted: false,
      });
      if (existingUser) {
        throw new Error('User already exists with this email');
      }

      await this._userModel.deleteMany({
        email: signupDto?.email,
        isEmailVerified: false,
      })

      const userData = await new this._userModel(signupDto).save();



      const otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });

      //const otp = '123456';

      const expiryTime = new Date(Date.now()).getTime() + 2 * 60 * 1000;

      const otpObject = {
        otp: otp,
        userID: userData.id,
        expiryTime: expiryTime,
        type: OtpTypeEnum.SIGNUP,
      };

      const expiredOtp = await this._otpModel.find({
        type: OtpTypeEnum.SIGNUP,
        userID: userData.id,
        expiryTime: { $lt: new Date(Date.now()).getTime() },
      });

      const currentTime = new Date(Date.now()).getTime();

      if (expiredOtp[0]) {
        if (currentTime > expiredOtp[0].expiryTime) {
          await this._otpModel.findByIdAndUpdate(expiredOtp[0]._id, {
            isUsed: true,
          });
        }
      }

      const otpAlreadyPresent = await this._otpModel.find({
        isKYC: true,
        userID: userData.id,
        isUsed: false,
      });

      if (otpAlreadyPresent.length > 0) {
        await this._otpModel.findByIdAndUpdate(otpAlreadyPresent[0]._id, {
          isUsed: true,
        });
      }

      await this._otpModel.create(otpObject);

      const res = await this.utilsService.sendEmail({
        to: signupDto?.email,
        subject: "Confirm your email",
        html: getEmail(`${signupDto?.name}`, otp)
      })


      return { user: userData };
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message);
    }
  }


  async isEmailExists(emailDto: EmailDTO) {
    try {
      const user = await this._userModel.findOne({ email: emailDto?.email?.toLowerCase(), isEmailVerified: true, isDeleted: false, }, { email: 1, isEmailVerified: 1, loginType: 1 });

      if (user) {
        return {
          status: true,
          user: user
        }
      } else {
        return {
          status: false,
          user: user
        }
      }
    }
    catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message);
    }
  }

  async resendOtp(emailDto: EmailDTO) {
    try {
      emailDto.email = emailDto?.email?.toLowerCase();
      const userData = await this._userModel.findOne({ email: emailDto?.email, isDeleted: false })

      if (!userData) {
        throw new Error("Invalid email");
      }

      if (userData?.isEmailVerified) {
        //forgot password

        return await this.forgotPassword(emailDto)
      } else {
        //signup
        const otp = '123456';
        //  otpGenerator.generate(6, {
        //   upperCaseAlphabets: false,
        //   lowerCaseAlphabets: false,
        //   specialChars: false,
        // });

        const expiryTime = new Date(Date.now()).getTime() + 2 * 60 * 1000;

        const otpObject = {
          otp: otp,
          userID: userData.id,
          expiryTime: expiryTime,
          type: OtpTypeEnum.SIGNUP,
        };

        const expiredOtp = await this._otpModel.find({
          type: OtpTypeEnum.SIGNUP,
          userID: userData.id,
          expiryTime: { $lt: new Date(Date.now()).getTime() },
        });

        const currentTime = new Date(Date.now()).getTime();

        if (expiredOtp[0]) {
          if (currentTime > expiredOtp[0].expiryTime) {
            await this._otpModel.findByIdAndUpdate(expiredOtp[0]._id, {
              isUsed: true,
            });
          }
        }

        const otpAlreadyPresent = await this._otpModel.find({
          isKYC: true,
          userID: userData.id,
          isUsed: false,
        });

        if (otpAlreadyPresent.length > 0) {
          await this._otpModel.findByIdAndUpdate(otpAlreadyPresent[0]._id, {
            isUsed: true,
          });
        }

        await this._otpModel.create(otpObject);

        /*
          Send email logic here
        */
        // const res = await this.utilsService.sendEmail({
        //   from: `Buildings Up<no-reply@${process.env.MAILGUN_DOMAIN}>`,
        //   to: [userData?.email],
        //   subject: "Confirm your email",
        //   html: getEmail(`${userData?.firstname} ${userData?.lastname}`, otp)
        // })


        return { status: 'success', message: 'OTP resent' }

      }
    }
    catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message);
    }
  }

  async verifyEmail(otpDto: OtpDTO) {
    try {
      otpDto.email = otpDto?.email?.toLowerCase();

      const user = await this._userModel.findOne({ email: otpDto?.email, isDeleted: false, });

      if (!user) {
        throw new Error('Invalid email');
      }

      if (user?.isEmailVerified) {
        throw new Error('Email already verified');
      }

      const otp = await this._otpModel.findOne({
        userID: user.id,
        otp: otpDto?.otp,
        isUsed: false,
        type: OtpTypeEnum.SIGNUP,
      });

      if (!otp) {
        throw new Error('Wrong OTP typed');
      }

      const currentTime = new Date(Date.now()).getTime();
      const expiryTime = otp.expiryTime;

      if (currentTime > expiryTime) {
        await this._otpModel.findByIdAndUpdate(otp._id, { isUsed: true });
        throw new Error('Otp expired');
      }

      await this._userModel.updateOne(
        { _id: user.id },
        { isEmailVerified: true },
      );

      let userData = await this._userModel.findOne({ _id: user.id, isDeleted: false, });
      userData = JSON.parse(JSON.stringify(userData));

      delete userData.password;

      const token = await this.generateToken(userData);

      await this.chatService.addUser({
        userId: userData.id,
        name: userData.name,
        pic: userData.pic,
        color: userData.color,
      });

      return { status: 'success', token };
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message);
    }
  }

  async login(loginDto: LoginDTO) {
    try {
      let user = await this._userModel.findOne({
        email: loginDto.email,
        isEmailVerified: true,
        isDeleted: false,
      });
      if (!user) {
        throw new Error('Incorrect credentials');
      }

      if (await bcrypt.compare(loginDto.password, user.password)) {
        user = JSON.parse(JSON.stringify(user));
        delete user.password;

        const token = await this.generateToken(user);

        return { user, token };
      } else {
        throw new Error('Incorrect credentials');
      }
    } catch (err) {
      console.log(err);
      throw new UnauthorizedException(err?.message);
    }
  }

  async forgotPassword(emailDto: EmailDTO) {
    try {
      emailDto.email = emailDto?.email?.toLowerCase();

      const user = await this._userModel.findOne({ email: emailDto?.email, isDeleted: false, });

      if (!user) {
        throw new Error('Invalid Email');
      }

      // const otp = otpGenerator.generate(6, {
      //   upperCaseAlphabets: false,
      //   lowerCaseAlphabets: false,
      //   specialChars: false,
      // });

      const otp = '123456';

      const expiryTime = new Date(Date.now()).getTime() + 2 * 60 * 1000;

      // console.log(expiryTime);

      const otpObject = {
        otp: otp,
        userID: user.id,
        expiryTime: expiryTime,
        type: OtpTypeEnum.FORGOT_PASSWORD,
      };

      const expiredOtp = await this._otpModel.find({
        userID: user.id,
        expiryTime: { $lt: new Date(Date.now()).getTime() },
        type: OtpTypeEnum.FORGOT_PASSWORD,
      });

      const currentTime = new Date(Date.now()).getTime();

      if (expiredOtp[0]) {
        if (currentTime > expiredOtp[0].expiryTime) {
          await this._otpModel.findByIdAndUpdate(expiredOtp[0]._id, {
            isUsed: true,
          });
        }
      }

      const otpAlreadyPresent = await this._otpModel.find({
        isKYC: true,
        userID: user.id,
        isUsed: false,
        type: OtpTypeEnum.FORGOT_PASSWORD,
      });

      if (otpAlreadyPresent.length > 0) {
        await this._otpModel.findByIdAndUpdate(otpAlreadyPresent[0]._id, {
          isUsed: true,
        });
      }

      await this._otpModel.create(otpObject);

      /*
       send email
       */

      // const res = await this.utilsService.sendEmail({
      //   from: `Buildings Up<no-reply@${process.env.MAILGUN_DOMAIN}>`,
      //   to: [emailDto?.email],
      //   subject: "Confirm your email",
      //   html: getEmail(`${user?.firstname} ${user?.lastname}`, otp, false)
      // })

      return {
        status: 'success',
      };
    } catch (err) {
      throw new BadRequestException(err?.message);
    }
  }

  async verifyOtpForForgotPassword(otpDto: OtpDTO) {
    try {
      otpDto.email = otpDto?.email?.toLowerCase();
      let user: any = await this._userModel.findOne({ email: otpDto?.email, isDeleted: false, });
      if (!user) {
        throw new Error('Invalid Email');
      }

      const otp = await this._otpModel.findOne({
        userID: user.id,
        otp: otpDto?.otp,
        isUsed: false,
        type: OtpTypeEnum.FORGOT_PASSWORD,
      });

      if (!otp) {
        throw new Error('Wrong OTP typed');
      }

      const currentTime = new Date(Date.now()).getTime();
      const expiryTime = otp.expiryTime;

      if (currentTime > expiryTime) {
        await this._otpModel.findByIdAndUpdate(otp._id, { isUsed: true });
        throw new Error('Otp expired');
      }

      user = JSON.parse(JSON.stringify(user));

      delete user.password;

      user.isForgetPassword = true;

      const token = await this.generateToken(user);

      return { status: 'success', token };
    } catch (err) {
      throw new UnauthorizedException(err?.message);
    }
  }

  async resetPassword(resetPasswordDto, user) {
    try {
      if (!user.isForgetPassword) {
        throw new UnauthorizedException('Cannot reset password at this stage');
      }
      const userData = await this._userModel.findOne({ _id: user.id, isDeleted: false, });

      if (!userData) {
        throw new UnauthorizedException('No user found');
      }
      await this._userModel.updateOne(
        { _id: user.id },
        { password: resetPasswordDto.password },
      );

      return { status: 'success' };
    } catch (err) {
      throw new UnauthorizedException(err.message);
    }
  }

  async getLoggedInUsers(user) {
    try {
      const userData = await this._userModel.findOne({ _id: user.id })
      return userData;
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err?.message);
    }
  }

}
