/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(1);
const config_1 = __webpack_require__(5);
const app_controller_1 = __webpack_require__(6);
const app_service_1 = __webpack_require__(7);
const auth_module_1 = __webpack_require__(8);
const mongoose_1 = __webpack_require__(15);
const media_upload_module_1 = __webpack_require__(54);
const post_module_1 = __webpack_require__(62);
const order_module_1 = __webpack_require__(72);
const comments_module_1 = __webpack_require__(81);
const village_module_1 = __webpack_require__(85);
const shop_module_1 = __webpack_require__(89);
const category_module_1 = __webpack_require__(97);
const product_module_1 = __webpack_require__(105);
const chat_module_1 = __webpack_require__(113);
const admin_module_1 = __webpack_require__(124);
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI),
            auth_module_1.AuthModule.forRoot(),
            chat_module_1.ChatModule,
            media_upload_module_1.MediaUploadModule,
            post_module_1.PostModule,
            order_module_1.OrderModule,
            comments_module_1.CommentsModule,
            village_module_1.VillageModule,
            shop_module_1.ShopModule,
            category_module_1.CategoryModule,
            product_module_1.ProductModule,
            admin_module_1.AdminModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(1);
let AppController = exports.AppController = class AppController {
    constructor() { }
    getHello() {
        return "hello";
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [])
], AppController);


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(1);
let AppService = exports.AppService = class AppService {
    constructor() {
    }
};
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AppService);


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AuthModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(1);
const jwt_1 = __webpack_require__(9);
const auth_controller_1 = __webpack_require__(10);
const auth_service_1 = __webpack_require__(12);
const jwt_strategy_1 = __webpack_require__(44);
const _2fa_controller_1 = __webpack_require__(46);
const _2fa_service_1 = __webpack_require__(24);
const mongoose_1 = __webpack_require__(15);
const user_schema_1 = __webpack_require__(48);
const otp_schema_1 = __webpack_require__(51);
const device_schema_1 = __webpack_require__(52);
const login_history_schema_1 = __webpack_require__(53);
const utils_service_1 = __webpack_require__(20);
const device_service_1 = __webpack_require__(27);
const login_history_service_1 = __webpack_require__(28);
let AuthModule = exports.AuthModule = AuthModule_1 = class AuthModule {
    static forRoot() {
        return {
            imports: [
                jwt_1.JwtModule.register({
                    secret: process.env.JWT_SECRET || 'fallback-secret-key-change-in-production',
                    signOptions: { expiresIn: '9999999999s' },
                    global: true,
                }),
                mongoose_1.MongooseModule.forFeature([
                    { name: 'User', schema: user_schema_1.UserSchema },
                    { name: 'Otp', schema: otp_schema_1.OtpSchema },
                    { name: 'Device', schema: device_schema_1.DeviceSchema },
                    { name: 'LoginHistory', schema: login_history_schema_1.LoginHistorySchema },
                ]),
            ],
            controllers: [auth_controller_1.AuthController, _2fa_controller_1.TwoFactorController, _2fa_controller_1.Auth2FAController],
            providers: [auth_service_1.AuthService, _2fa_service_1.TwoFactorService, device_service_1.DeviceService, login_history_service_1.LoginHistoryService, jwt_strategy_1.JwtStrategy, utils_service_1.UtilsService],
            exports: [auth_service_1.AuthService],
            module: AuthModule_1,
        };
    }
};
exports.AuthModule = AuthModule = AuthModule_1 = __decorate([
    (0, common_1.Module)({})
], AuthModule);


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(1);
const express_1 = __webpack_require__(11);
const auth_service_1 = __webpack_require__(12);
const login_dto_1 = __webpack_require__(29);
const otp_dto_1 = __webpack_require__(31);
const signup_dto_1 = __webpack_require__(32);
const update_profile_dto_1 = __webpack_require__(33);
const swagger_1 = __webpack_require__(3);
const email_dto_1 = __webpack_require__(34);
const password_dto_1 = __webpack_require__(35);
const jwt_auth_guard_1 = __webpack_require__(36);
const user_decorator_1 = __webpack_require__(38);
const biometric_dto_1 = __webpack_require__(39);
const change_password_dto_1 = __webpack_require__(40);
const device_dto_1 = __webpack_require__(41);
const dev_otp_response_dto_1 = __webpack_require__(42);
const login_history_dto_1 = __webpack_require__(43);
const login_history_service_1 = __webpack_require__(28);
let AuthController = exports.AuthController = class AuthController {
    constructor(authService, loginHistoryService) {
        this.authService = authService;
        this.loginHistoryService = loginHistoryService;
    }
    signup(signupDto) {
        return this.authService.signup(signupDto);
    }
    isEmailExists(emailDto) {
        return this.authService.isEmailExists(emailDto);
    }
    verifyEmail(otpDto) {
        return this.authService.verifyEmail(otpDto);
    }
    resendOtp(emailDto) {
        return this.authService.resendOtp(emailDto);
    }
    login(loginDto, req) {
        console.log('🔵 [AUTH CONTROLLER] Login request received');
        console.log('📦 [AUTH CONTROLLER] Raw body:', JSON.stringify(req.body, null, 2));
        console.log('📦 [AUTH CONTROLLER] LoginDto:', JSON.stringify(loginDto, null, 2));
        console.log('📦 [AUTH CONTROLLER] Email in DTO:', loginDto?.email);
        console.log('📦 [AUTH CONTROLLER] Password in DTO:', loginDto?.password ? '***' : 'MISSING');
        let deviceInfo;
        if (loginDto.deviceId && loginDto.deviceName) {
            deviceInfo = {
                deviceId: loginDto.deviceId,
                deviceName: loginDto.deviceName,
                deviceType: loginDto.deviceType || 'other',
                platform: loginDto.platform || 'Unknown',
                browser: loginDto.browser,
                location: loginDto.location,
            };
            console.log('📱 [AUTH CONTROLLER] Device info extracted:', JSON.stringify(deviceInfo, null, 2));
        }
        else {
            console.log('⚠️ [AUTH CONTROLLER] No device info in request');
            console.log('   deviceId present:', !!loginDto.deviceId);
            console.log('   deviceName present:', !!loginDto.deviceName);
        }
        const ipAddress = req.ip || req.connection.remoteAddress || 'Unknown';
        console.log('🌐 [AUTH CONTROLLER] IP Address:', ipAddress);
        return this.authService.login(loginDto, deviceInfo, ipAddress);
    }
    forgotPassword(emailDto) {
        return this.authService.forgotPassword(emailDto);
    }
    verifyOtpForForgotPassword(otpDto) {
        return this.authService.verifyOtpForForgotPassword(otpDto);
    }
    resetPassword(passwordDto, user) {
        return this.authService.resetPassword(passwordDto, user);
    }
    getLoggedInUsers(user) {
        return this.authService.getLoggedInUsers(user);
    }
    updateProfile(updateProfileDto, user) {
        return this.authService.updateProfile(updateProfileDto, user);
    }
    updateBiometricStatus(updateBiometricDto, user) {
        return this.authService.updateBiometricStatus(user.id, updateBiometricDto);
    }
    changePassword(changePasswordDto, user) {
        return this.authService.changePassword(user.id, changePasswordDto);
    }
    getUserDevices(user, currentDeviceId) {
        return this.authService.getUserDevices(user.id, currentDeviceId);
    }
    logoutDevice(logoutDeviceDto, user) {
        return this.authService.logoutDevice(user.id, logoutDeviceDto.deviceId);
    }
    logoutAllDevices(user, currentDeviceId) {
        return this.authService.logoutAllDevices(user.id, currentDeviceId);
    }
    getRecentOTPs(email) {
        return this.authService.getRecentOTPs(email);
    }
    async getLoginHistory(user, query) {
        const options = {
            limit: query.limit || 50,
            status: query.status,
            startDate: query.startDate ? new Date(query.startDate) : undefined,
            endDate: query.endDate ? new Date(query.endDate) : undefined,
        };
        const history = await this.loginHistoryService.getUserLoginHistory(user.id, options);
        return {
            success: true,
            data: history,
            count: history.length,
        };
    }
    async getLoginStatistics(user) {
        const statistics = await this.loginHistoryService.getLoginStatistics(user.id);
        return {
            success: true,
            data: statistics,
        };
    }
};
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof signup_dto_1.SignupDTO !== "undefined" && signup_dto_1.SignupDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('isEmailExists'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof email_dto_1.EmailDTO !== "undefined" && email_dto_1.EmailDTO) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "isEmailExists", null);
__decorate([
    (0, common_1.Post)('verifyEmail'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof otp_dto_1.OtpDTO !== "undefined" && otp_dto_1.OtpDTO) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "verifyEmail", null);
__decorate([
    (0, common_1.Post)('resendOtp'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof email_dto_1.EmailDTO !== "undefined" && email_dto_1.EmailDTO) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "resendOtp", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof login_dto_1.LoginDTO !== "undefined" && login_dto_1.LoginDTO) === "function" ? _g : Object, typeof (_h = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _h : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('forgotPassword'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof email_dto_1.EmailDTO !== "undefined" && email_dto_1.EmailDTO) === "function" ? _j : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('verifyOtpForForgotPassword'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof otp_dto_1.OtpDTO !== "undefined" && otp_dto_1.OtpDTO) === "function" ? _k : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "verifyOtpForForgotPassword", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('resetPassword'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_l = typeof password_dto_1.PasswordDTO !== "undefined" && password_dto_1.PasswordDTO) === "function" ? _l : Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('getLoggedInUsers'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getLoggedInUsers", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('update-profile'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_m = typeof update_profile_dto_1.UpdateProfileDTO !== "undefined" && update_profile_dto_1.UpdateProfileDTO) === "function" ? _m : Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "updateProfile", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update biometric authentication status' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Biometric status updated successfully',
        type: biometric_dto_1.BiometricResponseDTO
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - Invalid input' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized - Invalid token' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('biometric-status'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_o = typeof biometric_dto_1.UpdateBiometricStatusDTO !== "undefined" && biometric_dto_1.UpdateBiometricStatusDTO) === "function" ? _o : Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "updateBiometricStatus", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Change user password' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Password changed successfully',
        type: change_password_dto_1.ChangePasswordResponseDTO
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - Invalid input or incorrect current password' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized - Invalid token' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)('change-password'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof change_password_dto_1.ChangePasswordDTO !== "undefined" && change_password_dto_1.ChangePasswordDTO) === "function" ? _p : Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "changePassword", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all user devices' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of user devices',
        type: device_dto_1.DevicesListResponseDTO
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized - Invalid token' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('devices'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)('currentDeviceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getUserDevices", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Logout from a specific device' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Device logged out successfully'
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - Device not found' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized - Invalid token' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('logout-device'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_q = typeof device_dto_1.LogoutDeviceDTO !== "undefined" && device_dto_1.LogoutDeviceDTO) === "function" ? _q : Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logoutDevice", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Logout from all devices except current' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Logged out from all devices successfully'
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized - Invalid token' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('logout-all-devices'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)('currentDeviceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logoutAllDevices", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get recent OTPs (Development Only)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of recent OTPs for testing',
        type: dev_otp_response_dto_1.DevOtpListResponseDTO
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Only available in development mode' }),
    (0, common_1.Get)('dev/otps'),
    __param(0, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getRecentOTPs", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get user login history' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User login history retrieved successfully',
        type: [login_history_dto_1.LoginHistoryResponseDTO]
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized - Invalid token' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('login-history'),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_r = typeof login_history_dto_1.GetLoginHistoryDTO !== "undefined" && login_history_dto_1.GetLoginHistoryDTO) === "function" ? _r : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getLoginHistory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get login statistics' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Login statistics retrieved successfully',
        type: login_history_dto_1.LoginStatisticsDTO
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized - Invalid token' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('login-statistics'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getLoginStatistics", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof login_history_service_1.LoginHistoryService !== "undefined" && login_history_service_1.LoginHistoryService) === "function" ? _b : Object])
], AuthController);


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(1);
const dist_1 = __webpack_require__(13);
const mongoose_1 = __webpack_require__(14);
const mongoose_2 = __webpack_require__(15);
var bcrypt = __webpack_require__(16);
const otp_enum_1 = __webpack_require__(17);
const otpGenerator = __webpack_require__(18);
const email_1 = __webpack_require__(19);
const utils_service_1 = __webpack_require__(20);
const _2fa_service_1 = __webpack_require__(24);
const device_service_1 = __webpack_require__(27);
const login_history_service_1 = __webpack_require__(28);
const GO_CARDLESS_ACTIVE = false;
let AuthService = exports.AuthService = class AuthService {
    constructor(jwtService, _userModel, _otpModel, utilsService, twoFactorService, deviceService, loginHistoryService) {
        this.jwtService = jwtService;
        this._userModel = _userModel;
        this._otpModel = _otpModel;
        this.utilsService = utilsService;
        this.twoFactorService = twoFactorService;
        this.deviceService = deviceService;
        this.loginHistoryService = loginHistoryService;
    }
    generateToken(payload) {
        return {
            access_token: `Bearer ${this.jwtService.sign(payload)}`,
        };
    }
    async signup(signupDto) {
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
            });
            const userData = await new this._userModel(signupDto).save();
            const otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
            });
            const expiryTime = new Date(Date.now()).getTime() + 2 * 60 * 1000;
            const otpObject = {
                otp: otp,
                userID: userData.id,
                expiryTime: expiryTime,
                type: otp_enum_1.OtpTypeEnum.SIGNUP,
            };
            const expiredOtp = await this._otpModel.find({
                type: otp_enum_1.OtpTypeEnum.SIGNUP,
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
                html: (0, email_1.getEmail)(`${signupDto?.email}`, otp)
            });
            const userResponse = JSON.parse(JSON.stringify(userData));
            delete userResponse.password;
            return { user: userResponse };
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message);
        }
    }
    async isEmailExists(emailDto) {
        try {
            const user = await this._userModel.findOne({ email: emailDto?.email?.toLowerCase(), isEmailVerified: true, isDeleted: false, }, { email: 1, isEmailVerified: 1, loginType: 1 });
            if (user) {
                return {
                    status: true,
                    user: user
                };
            }
            else {
                return {
                    status: false,
                    user: user
                };
            }
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message);
        }
    }
    async resendOtp(emailDto) {
        try {
            emailDto.email = emailDto?.email?.toLowerCase();
            const userData = await this._userModel.findOne({ email: emailDto?.email, isDeleted: false });
            if (!userData) {
                throw new Error("Invalid email");
            }
            if (userData?.isEmailVerified) {
                return await this.forgotPassword(emailDto);
            }
            else {
                const otp = '123456';
                const expiryTime = new Date(Date.now()).getTime() + 2 * 60 * 1000;
                const otpObject = {
                    otp: otp,
                    userID: userData.id,
                    expiryTime: expiryTime,
                    type: otp_enum_1.OtpTypeEnum.SIGNUP,
                };
                const expiredOtp = await this._otpModel.find({
                    type: otp_enum_1.OtpTypeEnum.SIGNUP,
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
                return { status: 'success', message: 'OTP resent' };
            }
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message);
        }
    }
    async verifyEmail(otpDto) {
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
                type: otp_enum_1.OtpTypeEnum.SIGNUP,
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
            await this._userModel.updateOne({ _id: user.id }, { isEmailVerified: true });
            let userData = await this._userModel.findOne({ _id: user.id, isDeleted: false, });
            userData = JSON.parse(JSON.stringify(userData));
            delete userData.password;
            const token = await this.generateToken(userData);
            return { status: 'success', token };
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message);
        }
    }
    async login(loginDto, deviceInfo, ipAddress) {
        console.log('🟢 [AUTH SERVICE] Login method called');
        console.log('📦 [AUTH SERVICE] Full loginDto:', JSON.stringify(loginDto, null, 2));
        console.log('📧 [AUTH SERVICE] Email:', loginDto?.email);
        console.log('🔑 [AUTH SERVICE] Password present:', !!loginDto?.password);
        console.log('📱 [AUTH SERVICE] Device info received:', deviceInfo ? 'YES' : 'NO');
        if (deviceInfo) {
            console.log('📱 [AUTH SERVICE] Device info details:', JSON.stringify(deviceInfo, null, 2));
        }
        console.log('🌐 [AUTH SERVICE] IP Address:', ipAddress);
        if (!loginDto?.email) {
            console.error('❌ [AUTH SERVICE] Email is missing from request');
            throw new Error('Email is required');
        }
        try {
            const normalizedEmail = loginDto.email.toLowerCase().trim();
            if (!normalizedEmail) {
                throw new Error('Email is required');
            }
            let user = await this._userModel.findOne({
                email: normalizedEmail,
                isEmailVerified: true,
                isDeleted: false,
            });
            console.log('👤 [AUTH SERVICE] User found:', user ? 'YES' : 'NO');
            if (user) {
                console.log('👤 [AUTH SERVICE] User ID:', user._id?.toString());
                console.log('👤 [AUTH SERVICE] User email:', user.email);
            }
            if (!user) {
                console.log('❌ [AUTH SERVICE] User not found');
                console.log('   Searched for email:', normalizedEmail);
                console.log('   Conditions: isEmailVerified=true, isDeleted=false');
                const userExists = await this._userModel.findOne({ email: normalizedEmail });
                if (userExists) {
                    console.log('   ⚠️ User exists but:');
                    console.log('      - isEmailVerified:', userExists.isEmailVerified);
                    console.log('      - isDeleted:', userExists.isDeleted);
                }
                if (normalizedEmail) {
                    try {
                        await this.loginHistoryService.recordLogin({
                            userId: null,
                            email: normalizedEmail,
                            deviceInfo,
                            ipAddress: ipAddress || 'Unknown',
                            loginMethod: 'password',
                            status: 'failed',
                            failureReason: userExists
                                ? `User exists but email not verified or account deleted (verified: ${userExists.isEmailVerified}, deleted: ${userExists.isDeleted})`
                                : 'User not found',
                        });
                        console.log('✅ [AUTH SERVICE] Failed login history recorded');
                    }
                    catch (historyError) {
                        console.error('❌ [AUTH SERVICE] Failed to record login history:', historyError);
                        if (historyError instanceof Error) {
                            console.error('❌ [AUTH SERVICE] History error message:', historyError.message);
                        }
                    }
                }
                throw new Error('Incorrect credentials');
            }
            console.log('🔐 [AUTH SERVICE] Comparing password...');
            if (await bcrypt.compare(loginDto.password, user.password)) {
                console.log('✅ [AUTH SERVICE] Password is valid');
                console.log('🔒 [AUTH SERVICE] Checking 2FA status:', user.isTwoFactorEnabled ? 'ENABLED' : 'DISABLED');
                if (user.isTwoFactorEnabled) {
                    return {
                        success: false,
                        requires2FA: true,
                        message: '2FA verification required',
                        data: {
                            email: user.email,
                            isTwoFactorEnabled: true,
                        },
                    };
                }
                const userId = user._id.toString();
                const userEmail = user.email;
                user = JSON.parse(JSON.stringify(user));
                delete user.password;
                const token = await this.generateToken(user);
                console.log('🔑 [AUTH SERVICE] JWT token generated');
                if (deviceInfo) {
                    console.log('📱 [AUTH SERVICE] Device info provided in simple login, registering...');
                    console.log('📱 [AUTH SERVICE] Calling deviceService.registerDevice with:');
                    console.log('   userId:', userId);
                    console.log('   deviceInfo:', JSON.stringify(deviceInfo, null, 2));
                    console.log('   token:', token.access_token.substring(0, 20) + '...');
                    console.log('   ipAddress:', ipAddress);
                    try {
                        const registeredDevice = await this.deviceService.registerDevice(userId, deviceInfo, token.access_token, ipAddress);
                        console.log('✅ [AUTH SERVICE] Device registered successfully:', registeredDevice);
                    }
                    catch (err) {
                        console.error('❌ [AUTH SERVICE] Error registering device in simple login:', err);
                        console.error('❌ [AUTH SERVICE] Error stack:', err.stack);
                    }
                }
                else {
                    console.log('⚠️ [AUTH SERVICE] No device info provided in simple login');
                }
                console.log('📜 [AUTH SERVICE] Recording login history...');
                await this.loginHistoryService.recordLogin({
                    userId: userId,
                    email: userEmail,
                    deviceInfo,
                    ipAddress: ipAddress || 'Unknown',
                    loginMethod: 'password',
                    status: 'success',
                });
                console.log('✅ [AUTH SERVICE] Login history recorded');
                return {
                    success: true,
                    requires2FA: false,
                    user,
                    token
                };
            }
            else {
                const failedUserId = user._id.toString();
                await this.loginHistoryService.recordLogin({
                    userId: failedUserId,
                    email: user.email,
                    deviceInfo,
                    ipAddress: ipAddress || 'Unknown',
                    loginMethod: 'password',
                    status: 'failed',
                    failureReason: 'Invalid password',
                });
                throw new Error('Incorrect credentials');
            }
        }
        catch (err) {
            console.log(err);
            throw new common_1.UnauthorizedException(err?.message);
        }
    }
    async adminLogin(loginDto, ipAddress) {
        console.log('🟢 [AUTH SERVICE] Admin login method called');
        console.log('📧 [AUTH SERVICE] Email:', loginDto?.email);
        console.log('🌐 [AUTH SERVICE] IP Address:', ipAddress);
        try {
            const normalizedEmail = loginDto.email.toLowerCase().trim();
            if (!normalizedEmail) {
                throw new Error('Email is required');
            }
            const user = await this._userModel.findOne({
                email: normalizedEmail,
                isEmailVerified: true,
                isDeleted: false,
                userRole: 'admin',
            });
            if (!user) {
                console.log('❌ [AUTH SERVICE] Admin user not found or not an admin');
                throw new common_1.UnauthorizedException('Invalid credentials or insufficient permissions');
            }
            const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
            if (isPasswordValid) {
                const payload = {
                    id: user._id,
                    email: user.email,
                    userRole: user.userRole,
                };
                const token = this.generateToken(payload);
                const userData = {
                    id: user._id.toString(),
                    email: user.email,
                    fullName: user.fullName || user.name,
                    userRole: user.userRole,
                    userStatus: user.userStatus,
                    profilePic: user.profilePic || user.pic,
                };
                return {
                    accessToken: token.access_token,
                    user: userData,
                    expiresIn: 9999999999,
                };
            }
            else {
                throw new common_1.UnauthorizedException('Invalid credentials');
            }
        }
        catch (err) {
            console.log('❌ [AUTH SERVICE] Admin login error:', err);
            if (err instanceof common_1.UnauthorizedException) {
                throw err;
            }
            throw new common_1.UnauthorizedException(err?.message || 'Login failed');
        }
    }
    async getAllUsersForAdmin(query) {
        try {
            const limit = query.limit || 100;
            const offset = query.offset || 0;
            const filter = {
                isDeleted: false,
            };
            if (query.userRole) {
                filter.userRole = query.userRole;
            }
            if (query.userStatus) {
                filter.userStatus = query.userStatus;
            }
            if (query.userLevel) {
                filter.userLevel = query.userLevel;
            }
            if (query.search) {
                const searchRegex = { $regex: query.search, $options: 'i' };
                filter.$or = [
                    { email: searchRegex },
                    { name: searchRegex },
                    { fullName: searchRegex },
                ];
            }
            const users = await this._userModel
                .find(filter)
                .select('-password -twoFactorSecret')
                .sort({ createdAt: -1 })
                .skip(offset)
                .limit(limit)
                .lean();
            const total = await this._userModel.countDocuments(filter);
            const transformedUsers = users.map((user) => {
                const userId = user.id || user._id?.toString() || '';
                return {
                    id: userId,
                    email: user.email || '',
                    name: user.name || '',
                    fullName: user.fullName || user.name || '',
                    phoneNumber: user.phoneNumber || '',
                    userRole: user.userRole || 'normal',
                    userStatus: user.userStatus || 'active',
                    userLevel: user.userLevel || 'beginner',
                    profilePic: user.profilePic || user.pic || '',
                    pic: user.pic || '',
                    color: user.color || '#3B82F6',
                    village: user.village || '',
                    country: user.country || '',
                    homeAddress: user.homeAddress || '',
                    zipcode: user.zipcode || '',
                    isEmailVerified: user.isEmailVerified || false,
                    isTwoFactorEnabled: user.isTwoFactorEnabled || false,
                    isBiometric: user.isBiometric || false,
                    sellOrders: user.sellOrders || 0,
                    buyOrders: user.buyOrders || 0,
                    createdAt: user.createdAt ? new Date(user.createdAt) : new Date(),
                    updatedAt: user.updatedAt ? new Date(user.updatedAt) : new Date(),
                };
            });
            return {
                users: transformedUsers,
                total: total,
            };
        }
        catch (error) {
            console.error('Error getting all users for admin:', error);
            throw new Error('Failed to retrieve users');
        }
    }
    async forgotPassword(emailDto) {
        try {
            emailDto.email = emailDto?.email?.toLowerCase();
            const user = await this._userModel.findOne({ email: emailDto?.email, isDeleted: false, });
            if (!user) {
                throw new Error('Invalid Email');
            }
            const otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
            });
            const expiryTime = new Date(Date.now()).getTime() + 2 * 60 * 1000;
            const otpObject = {
                otp: otp,
                userID: user.id,
                expiryTime: expiryTime,
                type: otp_enum_1.OtpTypeEnum.FORGOT_PASSWORD,
            };
            const expiredOtp = await this._otpModel.find({
                userID: user.id,
                expiryTime: { $lt: new Date(Date.now()).getTime() },
                type: otp_enum_1.OtpTypeEnum.FORGOT_PASSWORD,
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
                userID: user.id,
                isUsed: false,
                type: otp_enum_1.OtpTypeEnum.FORGOT_PASSWORD,
            });
            if (otpAlreadyPresent.length > 0) {
                await this._otpModel.findByIdAndUpdate(otpAlreadyPresent[0]._id, {
                    isUsed: true,
                });
            }
            await this._otpModel.create(otpObject);
            const userName = user?.fullName || user?.name || emailDto?.email;
            await this.utilsService.sendEmail({
                to: emailDto?.email,
                subject: "Password Reset - Verification Code",
                html: (0, email_1.getEmail)(userName, otp, false),
                text: `Your password reset verification code is: ${otp}`
            });
            console.log(`🔐 Forgot Password OTP sent to ${emailDto?.email}: ${otp}`);
            return {
                status: 'success',
            };
        }
        catch (err) {
            throw new common_1.BadRequestException(err?.message);
        }
    }
    async verifyOtpForForgotPassword(otpDto) {
        try {
            otpDto.email = otpDto?.email?.toLowerCase();
            let user = await this._userModel.findOne({ email: otpDto?.email, isDeleted: false, });
            if (!user) {
                throw new Error('Invalid Email');
            }
            const otp = await this._otpModel.findOne({
                userID: user.id,
                otp: otpDto?.otp,
                isUsed: false,
                type: otp_enum_1.OtpTypeEnum.FORGOT_PASSWORD,
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
        }
        catch (err) {
            throw new common_1.UnauthorizedException(err?.message);
        }
    }
    async resetPassword(resetPasswordDto, user) {
        try {
            if (!user.isForgetPassword) {
                throw new common_1.UnauthorizedException('Cannot reset password at this stage');
            }
            const userData = await this._userModel.findOne({ _id: user.id, isDeleted: false, });
            if (!userData) {
                throw new common_1.UnauthorizedException('No user found');
            }
            await this._userModel.updateOne({ _id: user.id }, { password: resetPasswordDto.password });
            return { status: 'success' };
        }
        catch (err) {
            throw new common_1.UnauthorizedException(err.message);
        }
    }
    async getLoggedInUsers(user) {
        try {
            const userData = await this._userModel.findOne({ _id: user.id });
            return userData;
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message);
        }
    }
    async updateProfile(updateProfileDto, user) {
        try {
            const userData = await this._userModel.findOne({ _id: user.id, isDeleted: false });
            if (!userData) {
                throw new Error('User not found');
            }
            const updatedUser = await this._userModel.findByIdAndUpdate(user.id, {
                fullName: updateProfileDto.fullName,
                phoneNumber: updateProfileDto.phoneNumber,
                village: updateProfileDto.village,
                country: updateProfileDto.country,
                homeAddress: updateProfileDto.homeAddress,
                profilePic: updateProfileDto.profilePic || userData.profilePic,
                zipcode: updateProfileDto.zipcode,
            }, { new: true });
            const userResponse = JSON.parse(JSON.stringify(updatedUser));
            delete userResponse.password;
            return { user: userResponse };
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message);
        }
    }
    async loginWith2FA(login2FADto, deviceInfo, ipAddress) {
        try {
            const { email, password, token } = login2FADto;
            const user = await this._userModel.findOne({
                email: email.toLowerCase(),
                isEmailVerified: true,
                isDeleted: false,
            });
            if (!user) {
                if (email) {
                    try {
                        await this.loginHistoryService.recordLogin({
                            userId: null,
                            email: email.toLowerCase().trim(),
                            deviceInfo,
                            ipAddress: ipAddress || 'Unknown',
                            loginMethod: '2fa',
                            status: 'failed',
                            failureReason: 'User not found',
                        });
                    }
                    catch (historyError) {
                        console.error('❌ [AUTH SERVICE] Failed to record login history:', historyError);
                    }
                }
                throw new common_1.UnauthorizedException('Invalid credentials');
            }
            const userId = user._id.toString();
            const userEmail = user.email;
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                await this.loginHistoryService.recordLogin({
                    userId: userId,
                    email: userEmail,
                    deviceInfo,
                    ipAddress: ipAddress || 'Unknown',
                    loginMethod: '2fa',
                    status: 'failed',
                    failureReason: 'Invalid password',
                });
                throw new common_1.UnauthorizedException('Invalid credentials');
            }
            if (user.isTwoFactorEnabled) {
                if (!token) {
                    return {
                        success: false,
                        requires2FA: true,
                        message: '2FA verification required',
                        data: {
                            email: user.email,
                            isTwoFactorEnabled: true,
                        },
                    };
                }
                const isTokenValid = await this.twoFactorService.verify2FAToken(user.id, token);
                if (!isTokenValid) {
                    await this.loginHistoryService.recordLogin({
                        userId: userId,
                        email: userEmail,
                        deviceInfo,
                        ipAddress: ipAddress || 'Unknown',
                        loginMethod: '2fa',
                        status: 'failed',
                        failureReason: 'Invalid 2FA token',
                    });
                    throw new common_1.UnauthorizedException('Invalid 2FA token');
                }
            }
            const payload = {
                id: user.id,
                email: user.email,
                userRole: user.userRole,
            };
            const tokenResponse = this.generateToken(payload);
            if (deviceInfo) {
                console.log('📱 Device info provided in 2FA login, registering...');
                try {
                    await this.deviceService.registerDevice(userId, deviceInfo, tokenResponse.access_token, ipAddress);
                    console.log('✅ Device registered successfully in 2FA login');
                }
                catch (err) {
                    console.error('❌ Error registering device in 2FA login:', err);
                }
            }
            else {
                console.log('⚠️ No device info provided in 2FA login');
            }
            await this.loginHistoryService.recordLogin({
                userId: userId,
                email: userEmail,
                deviceInfo,
                ipAddress: ipAddress || 'Unknown',
                loginMethod: '2fa',
                status: 'success',
            });
            const userResponse = {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
                userRole: user.userRole,
                userStatus: user.userStatus,
                isTwoFactorEnabled: user.isTwoFactorEnabled,
                isBiometric: user.isBiometric,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            };
            return {
                success: true,
                requires2FA: false,
                message: 'Login successful',
                data: {
                    ...tokenResponse,
                    user: userResponse,
                },
            };
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Login failed');
        }
    }
    async updateBiometricStatus(userId, updateBiometricDto) {
        try {
            const user = await this._userModel.findById(userId);
            if (!user) {
                throw new common_1.BadRequestException('User not found');
            }
            user.isBiometric = updateBiometricDto.isBiometric;
            await user.save();
            return {
                success: true,
                message: `Biometric authentication ${updateBiometricDto.isBiometric ? 'enabled' : 'disabled'} successfully`,
                data: {
                    isBiometric: user.isBiometric,
                },
            };
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Failed to update biometric status');
        }
    }
    async changePassword(userId, changePasswordDto) {
        try {
            const user = await this._userModel.findById(userId);
            if (!user) {
                throw new common_1.BadRequestException('User not found');
            }
            const isPasswordValid = await bcrypt.compare(changePasswordDto.currentPassword, user.password);
            if (!isPasswordValid) {
                throw new common_1.BadRequestException('Current password is incorrect');
            }
            const isSamePassword = await bcrypt.compare(changePasswordDto.newPassword, user.password);
            if (isSamePassword) {
                throw new common_1.BadRequestException('New password must be different from current password');
            }
            const hashedPassword = await bcrypt.hash(changePasswordDto.newPassword, 10);
            user.password = hashedPassword;
            await user.save();
            return {
                success: true,
                message: 'Password changed successfully',
            };
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Failed to change password');
        }
    }
    async getUserDevices(userId, currentDeviceId) {
        try {
            const devices = await this.deviceService.getUserDevices(userId, currentDeviceId);
            return {
                success: true,
                devices: devices.map((device) => ({
                    id: device._id,
                    deviceId: device.deviceId,
                    deviceName: device.deviceName,
                    deviceType: device.deviceType,
                    platform: device.platform,
                    browser: device.browser,
                    ipAddress: device.ipAddress,
                    location: device.location,
                    lastActive: device.lastActive,
                    isCurrentDevice: device.isCurrentDevice,
                    createdAt: device.createdAt,
                })),
                count: devices.length,
            };
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Failed to get devices');
        }
    }
    async logoutDevice(userId, deviceId) {
        try {
            const success = await this.deviceService.logoutDevice(userId, deviceId);
            if (!success) {
                throw new common_1.BadRequestException('Device not found');
            }
            return {
                success: true,
                message: 'Device logged out successfully',
            };
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Failed to logout device');
        }
    }
    async logoutAllDevices(userId, currentDeviceId) {
        try {
            const count = await this.deviceService.logoutAllDevices(userId, currentDeviceId);
            return {
                success: true,
                message: `Logged out from ${count} device(s)`,
                count,
            };
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Failed to logout all devices');
        }
    }
    async getRecentOTPs(email) {
        try {
            const isMailjetConfigured = process.env.MAILJET_API_KEY &&
                process.env.MAILJET_API_KEY !== '0' &&
                process.env.MAILJET_API_KEY !== 'dummy-key-not-configured';
            if (isMailjetConfigured) {
                throw new common_1.BadRequestException('This endpoint is only available in development mode');
            }
            const query = {};
            if (email) {
                const user = await this._userModel.findOne({ email: email.toLowerCase() });
                if (user) {
                    query.userID = user.id;
                }
            }
            const otps = await this._otpModel
                .find(query)
                .sort({ createdAt: -1 })
                .limit(10)
                .lean();
            const currentTime = new Date().getTime();
            const otpList = await Promise.all(otps.map(async (otp) => {
                const user = await this._userModel.findById(otp.userID);
                return {
                    email: user?.email || 'Unknown',
                    otp: otp.otp,
                    type: otp.type,
                    expiryTime: otp.expiryTime,
                    isExpired: currentTime > otp.expiryTime,
                    createdAt: otp.createdAt,
                };
            }));
            return {
                isDevelopmentMode: true,
                otps: otpList,
                count: otpList.length,
            };
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Failed to get OTPs');
        }
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_2.InjectModel)('User')),
    __param(2, (0, mongoose_2.InjectModel)('Otp')),
    __metadata("design:paramtypes", [typeof (_a = typeof dist_1.JwtService !== "undefined" && dist_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _c : Object, typeof (_d = typeof utils_service_1.UtilsService !== "undefined" && utils_service_1.UtilsService) === "function" ? _d : Object, typeof (_e = typeof _2fa_service_1.TwoFactorService !== "undefined" && _2fa_service_1.TwoFactorService) === "function" ? _e : Object, typeof (_f = typeof device_service_1.DeviceService !== "undefined" && device_service_1.DeviceService) === "function" ? _f : Object, typeof (_g = typeof login_history_service_1.LoginHistoryService !== "undefined" && login_history_service_1.LoginHistoryService) === "function" ? _g : Object])
], AuthService);


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt/dist");

/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OtpTypeEnum = void 0;
var OtpTypeEnum;
(function (OtpTypeEnum) {
    OtpTypeEnum["SIGNUP"] = "SIGNUP";
    OtpTypeEnum["FORGOT_PASSWORD"] = "FORGOT_PASSWORD";
})(OtpTypeEnum || (exports.OtpTypeEnum = OtpTypeEnum = {}));


/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = require("otp-generator");

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getEmail = void 0;
const getEmail = (fullname, otp, isSignup = true) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title></title>
       <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
       
       <style type="text/css">
           /* FONTS */
           @media screen {
               @font-face {
                   font-family: 'Lato';
                   font-style: normal;
                   font-weight: 400;
                   src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');
               }
    
               @font-face {
                   font-family: 'Lato';
                   font-style: normal;
                   font-weight: 700;
                   src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format('woff');
               }
    
               @font-face {
                   font-family: 'Lato';
                   font-style: italic;
                   font-weight: 400;
                   src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format('woff');
               }
    
               @font-face {
                   font-family: 'Lato';
                   font-style: italic;
                   font-weight: 700;
                   src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');
               }
           }
    
           /* CLIENT-SPECIFIC STYLES */
           body,
           table,
           td,
           a {
               -webkit-text-size-adjust: 100%;
               -ms-text-size-adjust: 100%;
           }
    
           table,
           td {
               mso-table-lspace: 0pt;
               mso-table-rspace: 0pt;
           }
    
           img {
               -ms-interpolation-mode: bicubic;
           }
    
           /* RESET STYLES */
           img {
               border: 0;
               height: auto;
               line-height: 100%;
               outline: none;
               text-decoration: none;
           }
    
           table {
               border-collapse: collapse !important;
           }
    
           body {
               height: 100% !important;
               margin: 0 !important;
               padding: 0 !important;
               width: 100% !important;
           }
    
           /* iOS BLUE LINKS */
           a[x-apple-data-detectors] {
               color: inherit !important;
               text-decoration: none !important;
               font-size: inherit !important;
               font-family: inherit !important;
               font-weight: inherit !important;
               line-height: inherit !important;
           }
    
           /* ANDROID CENTER FIX */
           div[style*="margin: 16px 0;"] {
               margin: 0 !important;
           }
       </style>
    </head>
    <body style="margin: 0 !important; padding: 0 !important;">
       <table border="0" cellpadding="0" cellspacing="0" width="100%">
           <!-- LOGO -->
           <tr>
               <td  align="center">
                   <table border="0" cellpadding="0" cellspacing="0">
                       <tr>
                           <td align="center" valign="top" style="padding: 40px 10px 40px 10px;">
                               <div
                                   style="padding: 40px 0 0; border-radius: 4px 4px 0px 0px; color: #FFFFFF; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400;">
                                   <img class="logo-image" style="width: 100px"
                                       src="https://api.buildingsup.co.uk/media-upload/mediaFiles/logo/26aad41073ec42e5f820ab563fb8d8bf2.png"
                                       alt="Buildings Up">
                                   <h3 style="margin:0px; color: #111111; font-size: 18px"> Buildings Up</h3>
                               </div>
                           </td>
                       </tr>
                   </table>
               </td>
           </tr>
           <!-- HERO -->
           <tr>
               <td style="padding: 0px 10px 0px 10px;">
                   <table border="0" cellpadding="0" cellspacing="0">
                       <tr>
                           <td valign="top"
                               style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400;">
                               <p style="margin: 0 0 15px;">Your verification code: </p>
                               <strong style="color: #54BAB9">${otp} </strong>
                               <p style="margin: 15px 0 0;"> The verification code will be valid for 2 minutes. Do not share this code with anyone. Don't recognize this activity? Contact <strong>customer support</strong> immediately.</p>
                               <p style="margin: 10px 0;"><i>This is automated message, do not reply.</i></p>
                               <hr style="margin: 60px 0 15px" />
                               <p style="margin: 0; text-align: center; font-size: 14px;" > © 2023 Buildingsup.co.uk, All Rights Reserved.</p>
                           </td>
                       </tr>
                   </table>
               </td>
           </tr>
           <!-- COPY BLOCK -->
         
           <!-- COPY CALLOUT -->
           <tr>
               <td bgcolor="#F4F4F4" align="center" style="padding: 0px 10px 0px 10px;">
                   <table border="0" cellpadding="0" cellspacing="0">
                   </table>
               </td>
           </tr>
       </table>
    </body>
    </html>`;
};
exports.getEmail = getEmail;


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UtilsService = void 0;
const common_1 = __webpack_require__(1);
const Mailgun = __webpack_require__(21);
const formData = __webpack_require__(22);
const Mailjet = __webpack_require__(23);
let UtilsService = exports.UtilsService = class UtilsService {
    constructor() {
        this.mailjet = new Mailjet({
            apiKey: process.env.MAILJET_API_KEY,
            apiSecret: process.env.MAILJET_API_SECRET,
        });
    }
    async sendEmail(emailDto) {
        try {
            const isMailjetConfigured = process.env.MAILJET_API_KEY &&
                process.env.MAILJET_API_KEY !== '0' &&
                process.env.MAILJET_API_KEY !== 'dummy-key-not-configured';
            if (!isMailjetConfigured) {
                let otp = 'Not found';
                let otpMatch = emailDto.html.match(/<strong[^>]*>\s*(\d{6})\s*<\/strong>/i);
                if (otpMatch) {
                    otp = otpMatch[1];
                }
                if (otp === 'Not found') {
                    otpMatch = emailDto.html.match(/verification code:.*?(\d{6})/is);
                    if (otpMatch) {
                        otp = otpMatch[1];
                    }
                }
                if (otp === 'Not found') {
                    otpMatch = emailDto.html.match(/(\d{6})/);
                    if (otpMatch) {
                        otp = otpMatch[1];
                    }
                }
                console.log('\n' + '='.repeat(60));
                console.log('📧 EMAIL NOT SENT (Development Mode)');
                console.log('='.repeat(60));
                console.log(`📬 To: ${emailDto.to}`);
                console.log(`📋 Subject: ${emailDto.subject}`);
                console.log('─'.repeat(60));
                console.log(`🔑 VERIFICATION CODE: ${otp}`);
                console.log('─'.repeat(60));
                console.log('⏰ Valid for: 2 minutes');
                console.log('');
                console.log('⚠️  IMPORTANT: Emails are NOT sent in development mode!');
                console.log('   You will NOT receive this email in your inbox.');
                console.log('   Use the code above from this console output.');
                console.log('');
                console.log('💡 Tip: Configure Mailjet to send real emails');
                console.log('📖 See: EMAIL_CONFIGURATION_GUIDE.md');
                console.log('🔗 API: GET http://localhost:3000/auth/dev/otps');
                console.log('='.repeat(60) + '\n');
                return {
                    Messages: [{
                            Status: 'success',
                            To: [{ Email: emailDto.to }]
                        }]
                };
            }
            const request = await this.mailjet.post('send', { version: 'v3.1' }).request({
                Messages: [
                    {
                        From: {
                            Email: process.env.MAILJET_EMAIL,
                            Name: process.env.MAILJET_NAME,
                        },
                        To: [
                            {
                                Email: emailDto.to,
                                Name: "Blockyfy",
                            },
                        ],
                        Subject: emailDto.subject,
                        TextPart: emailDto.text,
                        HTMLPart: emailDto.html,
                    }
                ]
            });
            return request.body;
        }
        catch (err) {
            console.log('Email sending error:', err);
            throw new Error(err?.message);
        }
    }
};
exports.UtilsService = UtilsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UtilsService);


/***/ }),
/* 21 */
/***/ ((module) => {

module.exports = require("mailgun.js");

/***/ }),
/* 22 */
/***/ ((module) => {

module.exports = require("form-data");

/***/ }),
/* 23 */
/***/ ((module) => {

module.exports = require("node-mailjet");

/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TwoFactorService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(15);
const mongoose_2 = __webpack_require__(14);
const speakeasy = __webpack_require__(25);
const QRCode = __webpack_require__(26);
let TwoFactorService = exports.TwoFactorService = class TwoFactorService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async enable2FA(userId) {
        try {
            const user = await this.userModel.findById(userId);
            if (!user) {
                throw new common_1.BadRequestException('User not found');
            }
            if (user.isTwoFactorEnabled) {
                throw new common_1.BadRequestException('2FA is already enabled for this user');
            }
            const secret = speakeasy.generateSecret({
                name: `SAKRO (${user.email})`,
                issuer: 'SAKRO Shopping App',
                length: 32,
            });
            await this.userModel.findByIdAndUpdate(userId, {
                twoFactorSecret: secret.base32,
            });
            const qrCode = await QRCode.toDataURL(secret.otpauth_url);
            return {
                qrCode,
                manualEntryKey: secret.base32,
                otpauthUrl: secret.otpauth_url,
            };
        }
        catch (error) {
            console.error('Error enabling 2FA:', error);
            throw new common_1.BadRequestException('Failed to enable 2FA');
        }
    }
    async verify2FA(userId, verifyDto) {
        try {
            const user = await this.userModel.findById(userId);
            if (!user) {
                throw new common_1.BadRequestException('User not found');
            }
            if (!user.twoFactorSecret) {
                throw new common_1.BadRequestException('2FA secret not found. Please enable 2FA first.');
            }
            const verified = speakeasy.totp.verify({
                secret: user.twoFactorSecret,
                encoding: 'base32',
                token: verifyDto.token,
                window: 2,
            });
            if (verified) {
                await this.userModel.findByIdAndUpdate(userId, {
                    isTwoFactorEnabled: true,
                });
                return {
                    verified: true,
                    enabled: true,
                };
            }
            else {
                return {
                    verified: false,
                    enabled: false,
                };
            }
        }
        catch (error) {
            console.error('Error verifying 2FA:', error);
            throw new common_1.BadRequestException('Failed to verify 2FA token');
        }
    }
    async verify2FAToken(userId, token) {
        try {
            const user = await this.userModel.findById(userId);
            if (!user || !user.twoFactorSecret || !user.isTwoFactorEnabled) {
                return false;
            }
            const verified = speakeasy.totp.verify({
                secret: user.twoFactorSecret,
                encoding: 'base32',
                token: token,
                window: 2,
            });
            return verified;
        }
        catch (error) {
            console.error('Error verifying 2FA token:', error);
            return false;
        }
    }
    async disable2FA(userId) {
        try {
            const user = await this.userModel.findById(userId);
            if (!user) {
                throw new common_1.BadRequestException('User not found');
            }
            if (!user.isTwoFactorEnabled) {
                throw new common_1.BadRequestException('2FA is not enabled for this user');
            }
            await this.userModel.findByIdAndUpdate(userId, {
                isTwoFactorEnabled: false,
                twoFactorSecret: null,
            });
            return {
                success: true,
                message: '2FA has been disabled successfully',
            };
        }
        catch (error) {
            console.error('Error disabling 2FA:', error);
            throw new common_1.BadRequestException('Failed to disable 2FA');
        }
    }
    async generateBackupCodes(userId) {
        try {
            const user = await this.userModel.findById(userId);
            if (!user) {
                throw new common_1.BadRequestException('User not found');
            }
            if (!user.isTwoFactorEnabled) {
                throw new common_1.BadRequestException('2FA is not enabled for this user');
            }
            const backupCodes = Array.from({ length: 10 }, () => Math.random().toString(36).substring(2, 8).toUpperCase());
            return {
                backupCodes,
            };
        }
        catch (error) {
            console.error('Error generating backup codes:', error);
            throw new common_1.BadRequestException('Failed to generate backup codes');
        }
    }
    async validateBackupCode(userId, backupCode) {
        try {
            const user = await this.userModel.findById(userId);
            if (!user || !user.isTwoFactorEnabled) {
                return false;
            }
            return backupCode.length === 6 && /^[A-Z0-9]+$/.test(backupCode);
        }
        catch (error) {
            console.error('Error validating backup code:', error);
            return false;
        }
    }
};
exports.TwoFactorService = TwoFactorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], TwoFactorService);


/***/ }),
/* 25 */
/***/ ((module) => {

module.exports = require("speakeasy");

/***/ }),
/* 26 */
/***/ ((module) => {

module.exports = require("qrcode");

/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(15);
const mongoose_2 = __webpack_require__(14);
let DeviceService = exports.DeviceService = class DeviceService {
    constructor(_deviceModel) {
        this._deviceModel = _deviceModel;
    }
    async registerDevice(userId, deviceInfo, loginToken, ipAddress) {
        try {
            console.log('═══════════════════════════════════════════════════');
            console.log('🔵 [DEVICE SERVICE] registerDevice called');
            console.log('📊 [DEVICE SERVICE] Parameters:');
            console.log('   userId:', userId);
            console.log('   deviceId:', deviceInfo.deviceId);
            console.log('   deviceName:', deviceInfo.deviceName);
            console.log('   deviceType:', deviceInfo.deviceType);
            console.log('   platform:', deviceInfo.platform);
            console.log('   browser:', deviceInfo.browser);
            console.log('   ipAddress:', ipAddress);
            console.log('   location:', deviceInfo.location);
            console.log('   loginToken:', loginToken ? loginToken.substring(0, 20) + '...' : 'MISSING');
            console.log('═══════════════════════════════════════════════════');
            console.log('🔍 [DEVICE SERVICE] Checking if device exists...');
            const existingDevice = await this._deviceModel.findOne({
                userId,
                deviceId: deviceInfo.deviceId,
            });
            console.log('🔍 [DEVICE SERVICE] Existing device:', existingDevice ? 'FOUND' : 'NOT FOUND');
            if (existingDevice) {
                console.log('✅ Device exists, updating...');
                existingDevice.deviceName = deviceInfo.deviceName;
                existingDevice.deviceType = deviceInfo.deviceType;
                existingDevice.platform = deviceInfo.platform;
                existingDevice.browser = deviceInfo.browser || 'Unknown';
                existingDevice.ipAddress = ipAddress || deviceInfo.ipAddress || 'Unknown';
                existingDevice.location = deviceInfo.location || null;
                existingDevice.lastActive = new Date();
                existingDevice.loginToken = loginToken;
                await existingDevice.save();
                console.log('✅ Device updated successfully');
                return existingDevice;
            }
            console.log('✅ Device does not exist, creating new...');
            const newDevice = await this._deviceModel.create({
                userId,
                deviceId: deviceInfo.deviceId,
                deviceName: deviceInfo.deviceName,
                deviceType: deviceInfo.deviceType,
                platform: deviceInfo.platform,
                browser: deviceInfo.browser || 'Unknown',
                ipAddress: ipAddress || deviceInfo.ipAddress || 'Unknown',
                location: deviceInfo.location || null,
                lastActive: new Date(),
                loginToken,
            });
            console.log('✅ Device created successfully:', newDevice._id);
            return newDevice;
        }
        catch (err) {
            console.error('Error registering device:', err);
            throw new common_1.BadRequestException('Failed to register device');
        }
    }
    async getUserDevices(userId, currentDeviceId) {
        try {
            const devices = await this._deviceModel
                .find({ userId })
                .sort({ lastActive: -1 })
                .lean();
            if (currentDeviceId) {
                devices.forEach((device) => {
                    device.isCurrentDevice = device.deviceId === currentDeviceId;
                });
            }
            return devices;
        }
        catch (err) {
            console.error('Error getting user devices:', err);
            throw new common_1.BadRequestException('Failed to get user devices');
        }
    }
    async updateDeviceActivity(deviceId, userId) {
        try {
            await this._deviceModel.updateOne({ deviceId, userId }, { lastActive: new Date() });
        }
        catch (err) {
            console.error('Error updating device activity:', err);
        }
    }
    async logoutDevice(userId, deviceId) {
        try {
            const result = await this._deviceModel.deleteOne({
                userId,
                _id: deviceId,
            });
            return result.deletedCount > 0;
        }
        catch (err) {
            console.error('Error logging out device:', err);
            throw new common_1.BadRequestException('Failed to logout device');
        }
    }
    async logoutAllDevices(userId, currentDeviceId) {
        try {
            const query = { userId };
            if (currentDeviceId) {
                query._id = { $ne: currentDeviceId };
            }
            const result = await this._deviceModel.deleteMany(query);
            return result.deletedCount;
        }
        catch (err) {
            console.error('Error logging out all devices:', err);
            throw new common_1.BadRequestException('Failed to logout all devices');
        }
    }
    async removeDeviceByToken(loginToken) {
        try {
            await this._deviceModel.deleteOne({ loginToken });
        }
        catch (err) {
            console.error('Error removing device by token:', err);
        }
    }
    async cleanupOldDevices() {
        try {
            const ninetyDaysAgo = new Date();
            ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
            const result = await this._deviceModel.deleteMany({
                lastActive: { $lt: ninetyDaysAgo },
            });
            return result.deletedCount;
        }
        catch (err) {
            console.error('Error cleaning up old devices:', err);
            return 0;
        }
    }
};
exports.DeviceService = DeviceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Device')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], DeviceService);


/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginHistoryService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(15);
const mongoose_2 = __webpack_require__(14);
let LoginHistoryService = exports.LoginHistoryService = class LoginHistoryService {
    constructor(_loginHistoryModel) {
        this._loginHistoryModel = _loginHistoryModel;
    }
    async recordLogin(data) {
        try {
            console.log('═══════════════════════════════════════════════════');
            console.log('📜 [LOGIN HISTORY] Recording login attempt');
            console.log('📊 [LOGIN HISTORY] Data:');
            console.log('   userId:', data.userId);
            console.log('   email:', data.email);
            console.log('   deviceInfo present:', data.deviceInfo ? 'YES' : 'NO');
            if (data.deviceInfo) {
                console.log('   deviceId:', data.deviceInfo.deviceId);
                console.log('   deviceName:', data.deviceInfo.deviceName);
            }
            console.log('   ipAddress:', data.ipAddress);
            console.log('   loginMethod:', data.loginMethod);
            console.log('   status:', data.status);
            console.log('   failureReason:', data.failureReason);
            const email = data.email?.toLowerCase().trim();
            if (!email) {
                console.error('❌ [LOGIN HISTORY] Email is required but not provided');
                return;
            }
            const record = await this._loginHistoryModel.create({
                userId: data.userId || undefined,
                email: email,
                deviceId: data.deviceInfo?.deviceId || null,
                deviceName: data.deviceInfo?.deviceName || 'Unknown Device',
                deviceType: data.deviceInfo?.deviceType || 'other',
                platform: data.deviceInfo?.platform || 'Unknown',
                browser: data.deviceInfo?.browser || 'Unknown',
                ipAddress: data.ipAddress,
                location: data.deviceInfo?.location || null,
                loginMethod: data.loginMethod,
                status: data.status,
                failureReason: data.failureReason || null,
                loginAt: new Date(),
            });
            console.log(`✅ [LOGIN HISTORY] Login history recorded successfully`);
            console.log('   Record ID:', record._id);
            console.log('═══════════════════════════════════════════════════');
        }
        catch (err) {
            console.error('❌ [LOGIN HISTORY] Error recording login history:', err);
            console.error('❌ [LOGIN HISTORY] Error stack:', err.stack);
        }
    }
    async getUserLoginHistory(userId, options) {
        try {
            const query = { userId };
            if (options?.status) {
                query.status = options.status;
            }
            if (options?.startDate || options?.endDate) {
                query.loginAt = {};
                if (options.startDate) {
                    query.loginAt.$gte = options.startDate;
                }
                if (options.endDate) {
                    query.loginAt.$lte = options.endDate;
                }
            }
            const limit = options?.limit || 50;
            const history = await this._loginHistoryModel
                .find(query)
                .sort({ loginAt: -1 })
                .limit(limit)
                .lean();
            return history;
        }
        catch (err) {
            console.error('Error getting login history:', err);
            throw new common_1.BadRequestException('Failed to get login history');
        }
    }
    async getRecentFailedAttempts(userId, minutesAgo = 15) {
        try {
            const timeAgo = new Date(Date.now() - minutesAgo * 60 * 1000);
            const count = await this._loginHistoryModel.countDocuments({
                userId,
                status: 'failed',
                loginAt: { $gte: timeAgo },
            });
            return count;
        }
        catch (err) {
            console.error('Error getting failed attempts:', err);
            return 0;
        }
    }
    async getLoginStatistics(userId) {
        try {
            const history = await this._loginHistoryModel.find({ userId }).lean();
            const stats = {
                totalLogins: history.length,
                successfulLogins: history.filter(h => h.status === 'success').length,
                failedLogins: history.filter(h => h.status === 'failed').length,
                lastLogin: history.length > 0 ? history[0].loginAt : null,
                uniqueDevices: new Set(history.map(h => h.deviceId).filter(Boolean)).size,
                uniqueLocations: new Set(history.map(h => h.location).filter(Boolean)).size,
            };
            return stats;
        }
        catch (err) {
            console.error('Error getting login statistics:', err);
            throw new common_1.BadRequestException('Failed to get login statistics');
        }
    }
    async cleanupOldHistory(daysOld = 90) {
        try {
            const dateThreshold = new Date();
            dateThreshold.setDate(dateThreshold.getDate() - daysOld);
            const result = await this._loginHistoryModel.deleteMany({
                createdAt: { $lt: dateThreshold },
            });
            console.log(`✅ Cleaned up ${result.deletedCount} old login history records`);
            return result.deletedCount;
        }
        catch (err) {
            console.error('Error cleaning up login history:', err);
            return 0;
        }
    }
};
exports.LoginHistoryService = LoginHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('LoginHistory')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], LoginHistoryService);


/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginDTO = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(30);
class LoginDTO {
}
exports.LoginDTO = LoginDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User email address', example: 'user@example.com' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Please provide a valid email address' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User password' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginDTO.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], LoginDTO.prototype, "deviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], LoginDTO.prototype, "deviceName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], LoginDTO.prototype, "deviceType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], LoginDTO.prototype, "platform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], LoginDTO.prototype, "browser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], LoginDTO.prototype, "location", void 0);


/***/ }),
/* 30 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 31 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OtpDTO = void 0;
const swagger_1 = __webpack_require__(3);
class OtpDTO {
}
exports.OtpDTO = OtpDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OtpDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OtpDTO.prototype, "otp", void 0);


/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignupDTO = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(30);
const NUMBER = /\d/;
const CAPITAL_LETTER = /[A-Z]/;
const SMALL_LETTER = /[a-z]/;
const SPECIAL_CHARACTER = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const MIN_LENGTH = 8;
class SignupDTO {
}
exports.SignupDTO = SignupDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email address of the user' }),
    (0, class_validator_1.IsEmail)({}, { message: 'Please provide a valid email address' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignupDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Password for the user account' }),
    (0, class_validator_1.MinLength)(MIN_LENGTH, { message: 'Minimum 8 characters required' }),
    (0, class_validator_1.Matches)(NUMBER, { message: 'Minimum 1 digit required' }),
    (0, class_validator_1.Matches)(CAPITAL_LETTER, { message: 'Minimum 1 uppercase character required' }),
    (0, class_validator_1.Matches)(SMALL_LETTER, { message: 'Minimum 1 lowercase character required' }),
    (0, class_validator_1.Matches)(SPECIAL_CHARACTER, { message: 'Minimum 1 special character required' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignupDTO.prototype, "password", void 0);


/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProfileDTO = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(30);
class UpdateProfileDTO {
}
exports.UpdateProfileDTO = UpdateProfileDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Full name of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateProfileDTO.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Phone number of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateProfileDTO.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Village selected from dropdown' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateProfileDTO.prototype, "village", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateProfileDTO.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Home address of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateProfileDTO.prototype, "homeAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Profile picture URL', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProfileDTO.prototype, "profilePic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Zipcode of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateProfileDTO.prototype, "zipcode", void 0);


/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailDTO = void 0;
const swagger_1 = __webpack_require__(3);
class EmailDTO {
}
exports.EmailDTO = EmailDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], EmailDTO.prototype, "email", void 0);


/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PasswordDTO = void 0;
const swagger_1 = __webpack_require__(3);
class PasswordDTO {
}
exports.PasswordDTO = PasswordDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PasswordDTO.prototype, "password", void 0);


/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(1);
const passport_1 = __webpack_require__(37);
let JwtAuthGuard = exports.JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);


/***/ }),
/* 37 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const common_1 = __webpack_require__(1);
exports.User = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});


/***/ }),
/* 39 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BiometricResponseDTO = exports.UpdateBiometricStatusDTO = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(30);
class UpdateBiometricStatusDTO {
}
exports.UpdateBiometricStatusDTO = UpdateBiometricStatusDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Enable or disable biometric authentication',
        example: true,
        type: Boolean
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Biometric status is required' }),
    (0, class_validator_1.IsBoolean)({ message: 'Biometric status must be a boolean value' }),
    __metadata("design:type", Boolean)
], UpdateBiometricStatusDTO.prototype, "isBiometric", void 0);
class BiometricResponseDTO {
}
exports.BiometricResponseDTO = BiometricResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success status' }),
    __metadata("design:type", Boolean)
], BiometricResponseDTO.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response message' }),
    __metadata("design:type", String)
], BiometricResponseDTO.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated biometric status' }),
    __metadata("design:type", Object)
], BiometricResponseDTO.prototype, "data", void 0);


/***/ }),
/* 40 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChangePasswordResponseDTO = exports.ChangePasswordDTO = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(30);
class ChangePasswordDTO {
}
exports.ChangePasswordDTO = ChangePasswordDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Current password',
        example: 'OldPassword123!'
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Current password is required' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ChangePasswordDTO.prototype, "currentPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'New password (min 8 characters)',
        example: 'NewPassword123!'
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'New password is required' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8, { message: 'New password must be at least 8 characters long' }),
    __metadata("design:type", String)
], ChangePasswordDTO.prototype, "newPassword", void 0);
class ChangePasswordResponseDTO {
}
exports.ChangePasswordResponseDTO = ChangePasswordResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success status' }),
    __metadata("design:type", Boolean)
], ChangePasswordResponseDTO.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response message' }),
    __metadata("design:type", String)
], ChangePasswordResponseDTO.prototype, "message", void 0);


/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DevicesListResponseDTO = exports.DeviceResponseDTO = exports.LogoutDeviceDTO = exports.DeviceInfoDTO = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(30);
class DeviceInfoDTO {
}
exports.DeviceInfoDTO = DeviceInfoDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique device identifier',
        example: 'abc123xyz456'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeviceInfoDTO.prototype, "deviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Device name',
        example: 'iPhone 13 Pro'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeviceInfoDTO.prototype, "deviceName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Device type',
        example: 'mobile',
        enum: ['mobile', 'tablet', 'desktop', 'other']
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeviceInfoDTO.prototype, "deviceType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Platform/OS',
        example: 'iOS 16.0'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeviceInfoDTO.prototype, "platform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Browser name',
        example: 'Safari',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeviceInfoDTO.prototype, "browser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'IP Address',
        example: '192.168.1.1',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeviceInfoDTO.prototype, "ipAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Location',
        example: 'New York, USA',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], DeviceInfoDTO.prototype, "location", void 0);
class LogoutDeviceDTO {
}
exports.LogoutDeviceDTO = LogoutDeviceDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Device ID to logout',
        example: '507f1f77bcf86cd799439011'
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LogoutDeviceDTO.prototype, "deviceId", void 0);
class DeviceResponseDTO {
}
exports.DeviceResponseDTO = DeviceResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Device ID' }),
    __metadata("design:type", String)
], DeviceResponseDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Device identifier' }),
    __metadata("design:type", String)
], DeviceResponseDTO.prototype, "deviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Device name' }),
    __metadata("design:type", String)
], DeviceResponseDTO.prototype, "deviceName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Device type' }),
    __metadata("design:type", String)
], DeviceResponseDTO.prototype, "deviceType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Platform/OS' }),
    __metadata("design:type", String)
], DeviceResponseDTO.prototype, "platform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Browser name' }),
    __metadata("design:type", String)
], DeviceResponseDTO.prototype, "browser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'IP Address' }),
    __metadata("design:type", String)
], DeviceResponseDTO.prototype, "ipAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Location' }),
    __metadata("design:type", String)
], DeviceResponseDTO.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last active timestamp' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], DeviceResponseDTO.prototype, "lastActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is this the current device' }),
    __metadata("design:type", Boolean)
], DeviceResponseDTO.prototype, "isCurrentDevice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Login timestamp' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], DeviceResponseDTO.prototype, "createdAt", void 0);
class DevicesListResponseDTO {
}
exports.DevicesListResponseDTO = DevicesListResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success status' }),
    __metadata("design:type", Boolean)
], DevicesListResponseDTO.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of devices', type: [DeviceResponseDTO] }),
    __metadata("design:type", Array)
], DevicesListResponseDTO.prototype, "devices", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count' }),
    __metadata("design:type", Number)
], DevicesListResponseDTO.prototype, "count", void 0);


/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DevOtpListResponseDTO = exports.DevOtpResponseDTO = void 0;
const swagger_1 = __webpack_require__(3);
class DevOtpResponseDTO {
}
exports.DevOtpResponseDTO = DevOtpResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User email' }),
    __metadata("design:type", String)
], DevOtpResponseDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'OTP code' }),
    __metadata("design:type", String)
], DevOtpResponseDTO.prototype, "otp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'OTP type' }),
    __metadata("design:type", String)
], DevOtpResponseDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Expiry time' }),
    __metadata("design:type", Number)
], DevOtpResponseDTO.prototype, "expiryTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is expired' }),
    __metadata("design:type", Boolean)
], DevOtpResponseDTO.prototype, "isExpired", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Created at' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], DevOtpResponseDTO.prototype, "createdAt", void 0);
class DevOtpListResponseDTO {
}
exports.DevOtpListResponseDTO = DevOtpListResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Development mode status' }),
    __metadata("design:type", Boolean)
], DevOtpListResponseDTO.prototype, "isDevelopmentMode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of recent OTPs', type: [DevOtpResponseDTO] }),
    __metadata("design:type", Array)
], DevOtpListResponseDTO.prototype, "otps", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count' }),
    __metadata("design:type", Number)
], DevOtpListResponseDTO.prototype, "count", void 0);


/***/ }),
/* 43 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginStatisticsDTO = exports.LoginHistoryResponseDTO = exports.GetLoginHistoryDTO = void 0;
const class_validator_1 = __webpack_require__(30);
class GetLoginHistoryDTO {
}
exports.GetLoginHistoryDTO = GetLoginHistoryDTO;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], GetLoginHistoryDTO.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['success', 'failed', 'blocked']),
    __metadata("design:type", String)
], GetLoginHistoryDTO.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], GetLoginHistoryDTO.prototype, "startDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], GetLoginHistoryDTO.prototype, "endDate", void 0);
class LoginHistoryResponseDTO {
}
exports.LoginHistoryResponseDTO = LoginHistoryResponseDTO;
class LoginStatisticsDTO {
}
exports.LoginStatisticsDTO = LoginStatisticsDTO;


/***/ }),
/* 44 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const passport_jwt_1 = __webpack_require__(45);
const passport_1 = __webpack_require__(37);
const common_1 = __webpack_require__(1);
let JwtStrategy = exports.JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        const secretOrKey = process.env.JWT_SECRET || 'fallback-secret-key-change-in-production';
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: secretOrKey,
        });
        console.log('🔑 [JWT STRATEGY] Initialized with secret:', secretOrKey ? 'Secret configured' : 'No secret');
    }
    async validate(payload) {
        console.log('✅ [JWT STRATEGY] Token validated, payload:', payload);
        return payload;
    }
};
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], JwtStrategy);


/***/ }),
/* 45 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 46 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Auth2FAController = exports.TwoFactorController = void 0;
const common_1 = __webpack_require__(1);
const express_1 = __webpack_require__(11);
const swagger_1 = __webpack_require__(3);
const _2fa_service_1 = __webpack_require__(24);
const auth_service_1 = __webpack_require__(12);
const _2fa_dto_1 = __webpack_require__(47);
const jwt_auth_guard_1 = __webpack_require__(36);
const user_decorator_1 = __webpack_require__(38);
let TwoFactorController = exports.TwoFactorController = class TwoFactorController {
    constructor(twoFactorService, authService) {
        this.twoFactorService = twoFactorService;
        this.authService = authService;
    }
    async enable2FA(user) {
        const result = await this.twoFactorService.enable2FA(user.id);
        return {
            success: true,
            message: '2FA setup initiated. Please scan the QR code with Google Authenticator and verify with a token.',
            data: result
        };
    }
    async verify2FA(verifyDto, user) {
        const result = await this.twoFactorService.verify2FA(user.id, verifyDto);
        if (result.verified) {
            return {
                success: true,
                message: '2FA has been enabled successfully',
                data: result
            };
        }
        else {
            return {
                success: false,
                message: 'Invalid 2FA token. Please try again.',
                data: result
            };
        }
    }
    async disable2FA(user) {
        const result = await this.twoFactorService.disable2FA(user.id);
        return {
            success: true,
            message: result.message,
            data: result
        };
    }
    async generateBackupCodes(user) {
        const result = await this.twoFactorService.generateBackupCodes(user.id);
        return {
            success: true,
            message: 'Backup codes generated successfully. Store them in a safe place.',
            data: result
        };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Enable 2FA for authenticated user' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: '2FA setup initiated successfully',
        type: _2fa_dto_1.Enable2FAResponseDTO
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - 2FA already enabled' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('enable'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TwoFactorController.prototype, "enable2FA", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Verify 2FA token to complete setup' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '2FA verified and enabled successfully',
        type: _2fa_dto_1.Verify2FAResponseDTO
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - invalid token' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('verify'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof _2fa_dto_1.Verify2FADTO !== "undefined" && _2fa_dto_1.Verify2FADTO) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", Promise)
], TwoFactorController.prototype, "verify2FA", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Disable 2FA for authenticated user' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '2FA disabled successfully'
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - 2FA not enabled' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('disable'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TwoFactorController.prototype, "disable2FA", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Generate backup codes for 2FA' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Backup codes generated successfully'
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - 2FA not enabled' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('backup-codes'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TwoFactorController.prototype, "generateBackupCodes", null);
exports.TwoFactorController = TwoFactorController = __decorate([
    (0, swagger_1.ApiTags)('Two-Factor Authentication'),
    (0, common_1.Controller)('auth/2fa'),
    __metadata("design:paramtypes", [typeof (_a = typeof _2fa_service_1.TwoFactorService !== "undefined" && _2fa_service_1.TwoFactorService) === "function" ? _a : Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _b : Object])
], TwoFactorController);
let Auth2FAController = exports.Auth2FAController = class Auth2FAController {
    constructor(authService) {
        this.authService = authService;
    }
    async loginWith2FA(login2FADto, req) {
        let deviceInfo;
        if (login2FADto.deviceId && login2FADto.deviceName) {
            deviceInfo = {
                deviceId: login2FADto.deviceId,
                deviceName: login2FADto.deviceName,
                deviceType: login2FADto.deviceType || 'other',
                platform: login2FADto.platform || 'Unknown',
                browser: login2FADto.browser,
                location: login2FADto.location,
            };
        }
        const ipAddress = req.ip || req.connection.remoteAddress || 'Unknown';
        return await this.authService.loginWith2FA(login2FADto, deviceInfo, ipAddress);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Login with 2FA support' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Login successful',
        type: _2fa_dto_1.Login2FAResponseDTO
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - missing 2FA token' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized - invalid credentials or 2FA token' }),
    (0, common_1.Post)('login-2fa'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof _2fa_dto_1.Login2FADTO !== "undefined" && _2fa_dto_1.Login2FADTO) === "function" ? _e : Object, typeof (_f = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], Auth2FAController.prototype, "loginWith2FA", null);
exports.Auth2FAController = Auth2FAController = __decorate([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_d = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _d : Object])
], Auth2FAController);


/***/ }),
/* 47 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Login2FAResponseDTO = exports.Verify2FAResponseDTO = exports.Enable2FAResponseDTO = exports.Login2FADTO = exports.Verify2FADTO = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(30);
class Verify2FADTO {
}
exports.Verify2FADTO = Verify2FADTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '6-digit TOTP token from Google Authenticator',
        example: '123456',
        minLength: 6,
        maxLength: 6
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(6, 6, { message: 'Token must be exactly 6 digits' }),
    __metadata("design:type", String)
], Verify2FADTO.prototype, "token", void 0);
class Login2FADTO {
}
exports.Login2FADTO = Login2FADTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User email address',
        example: 'user@example.com'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Login2FADTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User password',
        example: 'password123'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Login2FADTO.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '6-digit TOTP token from Google Authenticator (required if 2FA is enabled)',
        example: '123456',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(6, 6, { message: 'Token must be exactly 6 digits' }),
    __metadata("design:type", String)
], Login2FADTO.prototype, "token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Login2FADTO.prototype, "deviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Login2FADTO.prototype, "deviceName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Login2FADTO.prototype, "deviceType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Login2FADTO.prototype, "platform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Login2FADTO.prototype, "browser", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Login2FADTO.prototype, "location", void 0);
class Enable2FAResponseDTO {
}
exports.Enable2FAResponseDTO = Enable2FAResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'QR code as base64 string for Google Authenticator' }),
    __metadata("design:type", String)
], Enable2FAResponseDTO.prototype, "qrCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Manual entry key for Google Authenticator' }),
    __metadata("design:type", String)
], Enable2FAResponseDTO.prototype, "manualEntryKey", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'OTPAUTH URL for Google Authenticator' }),
    __metadata("design:type", String)
], Enable2FAResponseDTO.prototype, "otpauthUrl", void 0);
class Verify2FAResponseDTO {
}
exports.Verify2FAResponseDTO = Verify2FAResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether 2FA verification was successful' }),
    __metadata("design:type", Boolean)
], Verify2FAResponseDTO.prototype, "verified", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether 2FA is now enabled for the user' }),
    __metadata("design:type", Boolean)
], Verify2FAResponseDTO.prototype, "enabled", void 0);
class Login2FAResponseDTO {
}
exports.Login2FAResponseDTO = Login2FAResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'JWT access token' }),
    __metadata("design:type", String)
], Login2FAResponseDTO.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User information' }),
    __metadata("design:type", Object)
], Login2FAResponseDTO.prototype, "user", void 0);


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = exports.UserModel = exports.UserSchema = void 0;
const mongoose_1 = __webpack_require__(14);
const utils_1 = __webpack_require__(49);
var bcrypt = __webpack_require__(16);
const user_interface_1 = __webpack_require__(50);
Object.defineProperty(exports, "User", ({ enumerable: true, get: function () { return user_interface_1.User; } }));
exports.UserSchema = new mongoose_1.Schema({
    _id: { type: String, default: utils_1.generateStringId },
    email: { type: String, default: '' },
    password: { type: String, default: '' },
    name: { type: String, default: '' },
    pic: { type: String, default: '' },
    color: { type: String, default: '' },
    isEmailVerified: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    fullName: { type: String, default: '' },
    phoneNumber: { type: String, default: '' },
    village: { type: String, default: '' },
    country: { type: String, default: '' },
    homeAddress: { type: String, default: '' },
    profilePic: { type: String, default: '' },
    zipcode: { type: String, default: '' },
    userLevel: { type: String, default: 'beginner', enum: ['beginner', 'intermediate', 'advanced', 'expert'] },
    userStatus: { type: String, default: 'active', enum: ['active', 'inactive', 'suspended'] },
    userRole: { type: String, default: 'normal', enum: ['normal', 'seller', 'admin'] },
    sellOrders: { type: Number, default: 0 },
    buyOrders: { type: Number, default: 0 },
    wishlist: { type: [String], default: [] },
    cart: { type: [String], default: [] },
    savedPosts: { type: [String], default: [] },
    twoFactorSecret: { type: String, default: null },
    isTwoFactorEnabled: { type: Boolean, default: false },
    isBiometric: { type: Boolean, default: false },
}, {
    collection: 'users',
    timestamps: true,
});
exports.UserModel = (0, mongoose_1.model)('users', exports.UserSchema);
exports.UserSchema.set('timestamps', true);
exports.UserSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
exports.UserSchema.index({ email: 1 });
exports.UserSchema.index({ fullname: 1 });
exports.UserSchema.index({ email: 1, publicKey: 1 });
exports.UserSchema.index({ publicKey: 1 });
exports.UserSchema.pre('save', async function (next) {
    try {
        if (this.password && this.isModified('password')) {
            const saltRounds = 10;
            this.password = await bcrypt.hash(this.password, saltRounds);
        }
        next();
    }
    catch (err) {
        next();
    }
});
exports.UserSchema.pre('updateOne', async function (next) {
    try {
        if (this._update.password) {
            const saltRounds = 10;
            this._update.password = await bcrypt.hash(this._update.password, saltRounds);
        }
        next();
    }
    catch (err) {
        next();
    }
});


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateStringId = void 0;
const mongoose_1 = __webpack_require__(14);
const generateStringId = () => {
    return new mongoose_1.Types.ObjectId().toHexString();
};
exports.generateStringId = generateStringId;


/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OtpSchema = void 0;
const mongoose_1 = __webpack_require__(14);
const utils_1 = __webpack_require__(49);
exports.OtpSchema = new mongoose_1.Schema({
    _id: { type: String, default: utils_1.generateStringId },
    otp: { type: String, default: '' },
    type: { type: String, default: '' },
    userID: { type: String, default: '' },
    expiryTime: { type: Number, default: 0 },
    isUsed: { type: Boolean, default: false },
}, {
    collection: 'otp',
});
(0, mongoose_1.model)('otp', exports.OtpSchema);
exports.OtpSchema.set('timestamps', true);
exports.OtpSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});


/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeviceSchema = void 0;
const mongoose = __webpack_require__(14);
exports.DeviceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    },
    deviceId: {
        type: String,
        required: true,
        index: true,
    },
    deviceName: {
        type: String,
        required: true,
    },
    deviceType: {
        type: String,
        enum: ['mobile', 'tablet', 'desktop', 'other'],
        default: 'other',
    },
    platform: {
        type: String,
        required: true,
    },
    browser: {
        type: String,
        default: 'Unknown',
    },
    ipAddress: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        default: null,
    },
    lastActive: {
        type: Date,
        default: Date.now,
    },
    isCurrentDevice: {
        type: Boolean,
        default: false,
    },
    loginToken: {
        type: String,
        required: true,
        index: true,
    },
}, {
    timestamps: true,
});
exports.DeviceSchema.index({ userId: 1, lastActive: -1 });
exports.DeviceSchema.index({ userId: 1, deviceId: 1 });


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginHistorySchema = void 0;
const mongoose = __webpack_require__(14);
exports.LoginHistorySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        index: true,
    },
    email: {
        type: String,
        required: true,
        index: true,
    },
    deviceId: {
        type: String,
        default: null,
    },
    deviceName: {
        type: String,
        default: 'Unknown Device',
    },
    deviceType: {
        type: String,
        enum: ['mobile', 'tablet', 'desktop', 'other'],
        default: 'other',
    },
    platform: {
        type: String,
        default: 'Unknown',
    },
    browser: {
        type: String,
        default: 'Unknown',
    },
    ipAddress: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        default: null,
    },
    loginMethod: {
        type: String,
        enum: ['password', '2fa', 'biometric'],
        default: 'password',
    },
    status: {
        type: String,
        enum: ['success', 'failed', 'blocked'],
        required: true,
    },
    failureReason: {
        type: String,
        default: null,
    },
    loginAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});
exports.LoginHistorySchema.index({ userId: 1, loginAt: -1 });
exports.LoginHistorySchema.index({ userId: 1, status: 1, loginAt: -1 });
exports.LoginHistorySchema.index({ loginAt: -1 });
exports.LoginHistorySchema.index({ createdAt: 1 }, { expireAfterSeconds: 7776000 });


/***/ }),
/* 54 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MediaUploadModule = void 0;
const common_1 = __webpack_require__(1);
const media_upload_controller_1 = __webpack_require__(55);
const media_upload_service_1 = __webpack_require__(61);
let MediaUploadModule = exports.MediaUploadModule = class MediaUploadModule {
};
exports.MediaUploadModule = MediaUploadModule = __decorate([
    (0, common_1.Module)({
        controllers: [media_upload_controller_1.MediaUploadController],
        providers: [media_upload_service_1.MediaUploadService],
    })
], MediaUploadModule);


/***/ }),
/* 55 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MediaUploadController = void 0;
const common_1 = __webpack_require__(1);
const path_1 = __webpack_require__(56);
const multer_1 = __webpack_require__(57);
const path = __webpack_require__(56);
const platform_express_1 = __webpack_require__(58);
const swagger_1 = __webpack_require__(3);
const fs = __webpack_require__(59);
const jimp = __webpack_require__(60);
const media_upload_service_1 = __webpack_require__(61);
const jwt_auth_guard_1 = __webpack_require__(36);
const fileFilter = (req, file, callback) => {
    let ext = path.extname(file.originalname);
    if (!process.env.whiteListedExtensions.includes(ext.toLowerCase())) {
        req.fileValidationError = 'Invalid file type';
        return callback(new common_1.HttpException('Invalid file type', common_1.HttpStatus.BAD_REQUEST), false);
    }
    return callback(null, true);
};
let MediaUploadController = exports.MediaUploadController = class MediaUploadController {
    constructor(_mediaUploadService) {
        this._mediaUploadService = _mediaUploadService;
    }
    async uploadAvatar(file, folderName, req) {
        req.setTimeout(10 * 60 * 1000);
        file['url'] =
            process.env.URL +
                'media-upload/mediaFiles/' +
                folderName.toLowerCase() +
                '/' +
                file.filename;
        let type = '';
        const nameSplit = file['filename'].split('.');
        if (nameSplit.length > 1) {
            type = nameSplit[1];
        }
        const allowTypes = ['.jpg', '.jpeg', '.png'];
        if (type && allowTypes.includes(`.${type}`)) {
            const img = await jimp.read(file['path']);
            const height = img.bitmap.height;
            const width = img.bitmap.width;
            this._mediaUploadService.compressImageTo300(file);
            if ((height < 500 && width < 275) || file.size <= 500 * 1000) {
                return file;
            }
            const heightRatio = height / width;
            const widthRatio = width / height;
            file['path'] = file['path'].replace(file['filename'], `compressed/${file['filename']}`);
            img.resize(500 * widthRatio, jimp.AUTO).write(file['path']);
        }
        return file;
    }
    async mediaFiles(folderName, fileName, res, req, size = 'original') {
        req.setTimeout(10 * 60 * 1000);
        const sizeArray = ['original', 'compressed'];
        size = sizeArray.includes(size) ? size : 'original';
        folderName = folderName.toLowerCase();
        if (size == 'original') {
            res.sendFile(fileName, {
                root: 'mediaFiles/metasuite/' + folderName,
            });
        }
        else {
            const dir = 'mediaFiles/metasuite/' + folderName + '/' + size + '/' + fileName;
            const exists = fs.existsSync(dir);
            if (!exists) {
                res.sendFile(fileName, {
                    root: 'mediaFiles/metasuite/' + folderName,
                });
                return;
            }
            res.sendFile(fileName, {
                root: 'mediaFiles/metasuite/' + folderName + '/' + size,
            });
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('mediaFiles/:folderName'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        fileFilter: fileFilter,
        storage: (0, multer_1.diskStorage)({
            destination: function (req, file, cb) {
                const dir = 'mediaFiles/metasuite/' + req.params.folderName.toLowerCase();
                fs.exists(dir, (exist) => {
                    if (!exist) {
                        return fs.mkdir(dir, { recursive: true }, (error) => cb(error, dir));
                    }
                    return cb(null, dir);
                });
            },
            filename: (req, file, cb) => {
                const randomName = Array(32)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                return cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)('folderName')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], MediaUploadController.prototype, "uploadAvatar", null);
__decorate([
    (0, common_1.Get)('mediaFiles/:folderName/:fileName'),
    __param(0, (0, common_1.Param)('folderName')),
    __param(1, (0, common_1.Param)('fileName')),
    __param(2, (0, common_1.Res)()),
    __param(3, (0, common_1.Req)()),
    __param(4, (0, common_1.Query)('size')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object, String]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], MediaUploadController.prototype, "mediaFiles", null);
exports.MediaUploadController = MediaUploadController = __decorate([
    (0, swagger_1.ApiTags)('media-upload'),
    (0, common_1.Controller)('media-upload'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [typeof (_a = typeof media_upload_service_1.MediaUploadService !== "undefined" && media_upload_service_1.MediaUploadService) === "function" ? _a : Object])
], MediaUploadController);


/***/ }),
/* 56 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 57 */
/***/ ((module) => {

module.exports = require("multer");

/***/ }),
/* 58 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),
/* 59 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 60 */
/***/ ((module) => {

module.exports = require("jimp");

/***/ }),
/* 61 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MediaUploadService = void 0;
const common_1 = __webpack_require__(1);
const jimp = __webpack_require__(60);
const fs = __webpack_require__(59);
let MediaUploadService = exports.MediaUploadService = class MediaUploadService {
    async compressImageTo300(file) {
        const img = await jimp.read(file['path']);
        const height = img.bitmap.height;
        const width = img.bitmap.width;
        if ((height < 200 && width < 300) || file.size <= 300 * 1000) {
            return '';
        }
        const heightRatio = height / width;
        const widthRatio = width / height;
        file['path'] = file['path'].replace('compressed', `300`);
        img.resize(300 * widthRatio, jimp.AUTO).write(file['path']);
    }
    async compressFolder(folderName) {
        try {
            const basePath = 'mediaFiles/metasuite/' + folderName;
            const files = fs.readdirSync(basePath);
            for await (let fileItem of files) {
                const allowTypes = ['.jpg', '.jpeg', '.png'];
                let type = '';
                const nameSplit = fileItem.split('.');
                if (nameSplit.length > 1) {
                    type = nameSplit[1];
                }
                let filePath = basePath + '/' + fileItem;
                if (type && allowTypes.includes(`.${type}`)) {
                    const img = await jimp.read(filePath);
                    const height = img.bitmap.height;
                    const width = img.bitmap.width;
                    const heightRatio = height / width;
                    const widthRatio = width / height;
                    filePath = filePath.replace(fileItem, `compressed/${fileItem}`);
                    await img.resize(500 * widthRatio, jimp.AUTO).write(filePath);
                }
            }
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message);
        }
    }
};
exports.MediaUploadService = MediaUploadService = __decorate([
    (0, common_1.Injectable)()
], MediaUploadService);


/***/ }),
/* 62 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostModule = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(15);
const post_schema_1 = __webpack_require__(63);
const post_controller_1 = __webpack_require__(64);
const post_service_1 = __webpack_require__(65);
const user_schema_1 = __webpack_require__(48);
const village_schema_1 = __webpack_require__(71);
const comments_schema_1 = __webpack_require__(66);
const post_report_schema_1 = __webpack_require__(67);
let PostModule = exports.PostModule = class PostModule {
};
exports.PostModule = PostModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: post_schema_1.Post.name, schema: post_schema_1.PostSchema },
                { name: 'User', schema: user_schema_1.UserSchema },
                { name: 'Village', schema: village_schema_1.VillageSchema },
                { name: comments_schema_1.Comments.name, schema: comments_schema_1.CommentsSchema },
                { name: post_report_schema_1.PostReport.name, schema: post_report_schema_1.PostReportSchema }
            ])
        ],
        controllers: [post_controller_1.PostController],
        providers: [post_service_1.PostService],
        exports: [post_service_1.PostService]
    })
], PostModule);


/***/ }),
/* 63 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostSchema = exports.Post = exports.PostOptionSchema = exports.PostOption = void 0;
const mongoose_1 = __webpack_require__(15);
const utils_1 = __webpack_require__(49);
let PostOption = exports.PostOption = class PostOption {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: utils_1.generateStringId }),
    __metadata("design:type", String)
], PostOption.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], PostOption.prototype, "text", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], PostOption.prototype, "votes", void 0);
exports.PostOption = PostOption = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], PostOption);
exports.PostOptionSchema = mongoose_1.SchemaFactory.createForClass(PostOption);
let Post = exports.Post = class Post {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: utils_1.generateStringId }),
    __metadata("design:type", String)
], Post.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, ref: 'User' }),
    __metadata("design:type", String)
], Post.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, ref: 'Village' }),
    __metadata("design:type", String)
], Post.prototype, "villageId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        enum: ['text', 'image', 'video', 'question']
    }),
    __metadata("design:type", String)
], Post.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Post.prototype, "text", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Post.prototype, "mediaUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ['image', 'video'],
        default: undefined,
        required: false
    }),
    __metadata("design:type", String)
], Post.prototype, "mediaType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Post.prototype, "question", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.PostOptionSchema], default: [] }),
    __metadata("design:type", Array)
], Post.prototype, "options", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Post.prototype, "totalVotes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Post.prototype, "likedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Post.prototype, "likesCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Post.prototype, "commentsCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Post.prototype, "sharesCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Post.prototype, "isDeleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: Date.now }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Post.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: Date.now }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Post.prototype, "updatedAt", void 0);
exports.Post = Post = __decorate([
    (0, mongoose_1.Schema)()
], Post);
exports.PostSchema = mongoose_1.SchemaFactory.createForClass(Post);
exports.PostSchema.set('timestamps', true);
exports.PostSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
exports.PostSchema.index({ userId: 1 });
exports.PostSchema.index({ villageId: 1 });
exports.PostSchema.index({ type: 1 });
exports.PostSchema.index({ createdAt: -1 });
exports.PostSchema.index({ isDeleted: 1 });


/***/ }),
/* 64 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostController = void 0;
const common_1 = __webpack_require__(1);
const post_service_1 = __webpack_require__(65);
const post_dto_1 = __webpack_require__(68);
const report_post_dto_1 = __webpack_require__(70);
const swagger_1 = __webpack_require__(3);
const user_decorator_1 = __webpack_require__(38);
const jwt_auth_guard_1 = __webpack_require__(36);
let PostController = exports.PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    createPost(createPostDTO, user) {
        return this.postService.createPost(createPostDTO, user.id);
    }
    getAllPosts(query, user) {
        return this.postService.getAllPosts(query, user?.id);
    }
    getSavedPosts(query, user) {
        return this.postService.getSavedPosts(user.id, query);
    }
    getPostById(postId, user) {
        return this.postService.getPostById(postId, user?.id);
    }
    updatePost(postId, updatePostDTO, user) {
        return this.postService.updatePost(postId, updatePostDTO, user.id);
    }
    deletePost(postId, user) {
        return this.postService.deletePost(postId, user.id);
    }
    voteOnPost(postId, votePostDTO, user) {
        return this.postService.voteOnPost(postId, votePostDTO, user.id);
    }
    toggleLike(postId, user) {
        return this.postService.toggleLike(postId, user.id);
    }
    sharePost(postId, user) {
        return this.postService.sharePost(postId, user.id);
    }
    toggleSavePost(postId, user) {
        return this.postService.toggleSavePost(postId, user.id);
    }
    reportPost(postId, reportPostDTO, user) {
        return this.postService.reportPost(postId, user.id, reportPostDTO.reason, reportPostDTO.description);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new community post' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Post created successfully',
        type: post_dto_1.PostResponseDTO
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - Invalid input' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized - Invalid token' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof post_dto_1.CreatePostDTO !== "undefined" && post_dto_1.CreatePostDTO) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "createPost", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all community posts with filters and pagination' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Posts retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
                    type: 'object',
                    properties: {
                        posts: { type: 'array', items: { $ref: '#/components/schemas/PostResponseDTO' } },
                        total: { type: 'number' },
                        offset: { type: 'number' },
                        limit: { type: 'number' }
                    }
                }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - Invalid query parameters' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof post_dto_1.PostQueryDTO !== "undefined" && post_dto_1.PostQueryDTO) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "getAllPosts", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get saved posts for the current user' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Saved posts retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
                    type: 'object',
                    properties: {
                        posts: { type: 'array', items: { $ref: '#/components/schemas/PostResponseDTO' } },
                        total: { type: 'number' },
                        offset: { type: 'number' },
                        limit: { type: 'number' }
                    }
                }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('saved'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof post_dto_1.PostQueryDTO !== "undefined" && post_dto_1.PostQueryDTO) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "getSavedPosts", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific post by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Post retrieved successfully',
        type: post_dto_1.PostResponseDTO
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Post not found' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Post ID' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "getPostById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update a post (only owner or admin)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Post updated successfully',
        type: post_dto_1.PostResponseDTO
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden - Not the post owner' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Post not found' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Post ID' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_e = typeof post_dto_1.UpdatePostDTO !== "undefined" && post_dto_1.UpdatePostDTO) === "function" ? _e : Object, Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "updatePost", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a post (only owner or admin)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Post deleted successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden - Not the post owner' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Post not found' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Post ID' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "deletePost", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Vote on a question post (one vote per user)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Vote recorded successfully',
        type: post_dto_1.VoteResponseDTO
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - Already voted or invalid option' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Post not found' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Post ID' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':id/vote'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_f = typeof post_dto_1.VotePostDTO !== "undefined" && post_dto_1.VotePostDTO) === "function" ? _f : Object, Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "voteOnPost", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Like or unlike a post' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Like status updated successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: { $ref: '#/components/schemas/PostResponseDTO' }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Post not found' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Post ID' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':id/like'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "toggleLike", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Share a post (increment share count)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Post shared successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: { $ref: '#/components/schemas/PostResponseDTO' }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Post not found' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Post ID' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':id/share'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "sharePost", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Save or unsave a post' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Post save status updated successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: { $ref: '#/components/schemas/PostResponseDTO' }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Post not found' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Post ID' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Save or unsave a post' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Post save status updated successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: { $ref: '#/components/schemas/PostResponseDTO' }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Post not found' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Post ID' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':id/save'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "toggleSavePost", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Report a post' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Post reported successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: { $ref: '#/components/schemas/ReportPostResponseDTO' }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - Already reported or invalid input' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Post not found' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Post ID' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':id/report'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_g = typeof report_post_dto_1.ReportPostDTO !== "undefined" && report_post_dto_1.ReportPostDTO) === "function" ? _g : Object, Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "reportPost", null);
exports.PostController = PostController = __decorate([
    (0, swagger_1.ApiTags)('Community Posts'),
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [typeof (_a = typeof post_service_1.PostService !== "undefined" && post_service_1.PostService) === "function" ? _a : Object])
], PostController);


/***/ }),
/* 65 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(15);
const mongoose_2 = __webpack_require__(14);
const post_schema_1 = __webpack_require__(63);
const comments_schema_1 = __webpack_require__(66);
const post_report_schema_1 = __webpack_require__(67);
const utils_1 = __webpack_require__(49);
let PostService = exports.PostService = class PostService {
    constructor(postModel, userModel, villageModel, commentsModel, postReportModel) {
        this.postModel = postModel;
        this.userModel = userModel;
        this.villageModel = villageModel;
        this.commentsModel = commentsModel;
        this.postReportModel = postReportModel;
    }
    validatePostData(createPostDTO) {
        const { type, text, mediaUrl, mediaType, question, options } = createPostDTO;
        switch (type) {
            case 'text':
                if (!text || text.trim().length === 0) {
                    throw new common_1.BadRequestException('Text content is required for text posts');
                }
                break;
            case 'image':
            case 'video':
                if (!mediaUrl || mediaUrl.trim().length === 0) {
                    throw new common_1.BadRequestException('Media URL is required for image/video posts');
                }
                if (!mediaType) {
                    throw new common_1.BadRequestException('Media type is required for image/video posts');
                }
                break;
            case 'question':
                if (!question || question.trim().length === 0) {
                    throw new common_1.BadRequestException('Question text is required for question posts');
                }
                if (!options || options.length < 2) {
                    throw new common_1.BadRequestException('At least 2 options are required for question posts');
                }
                break;
        }
    }
    async populatePostData(post, currentUserId) {
        const populatedPost = await this.postModel
            .findById(post._id)
            .populate('userId', 'id fullName email profilePic')
            .populate('villageId', 'id name')
            .lean();
        if (!populatedPost) {
            throw new common_1.NotFoundException('Post not found');
        }
        let optionsWithPercentages = [];
        let hasVoted = false;
        let votedOptionId;
        if (populatedPost.type === 'question' && populatedPost.options) {
            const totalVotes = populatedPost.totalVotes || 0;
            optionsWithPercentages = populatedPost.options.map(option => {
                const isVotedByCurrentUser = currentUserId ? option.votes.includes(currentUserId) : false;
                if (isVotedByCurrentUser) {
                    hasVoted = true;
                    votedOptionId = option.id;
                }
                return {
                    id: option.id,
                    text: option.text,
                    voteCount: option.votes.length,
                    percentage: totalVotes > 0 ? Math.round((option.votes.length / totalVotes) * 100) : 0,
                    isVotedByCurrentUser
                };
            });
        }
        let villageIdResponse = populatedPost.villageId;
        if (villageIdResponse && typeof villageIdResponse === 'object') {
            villageIdResponse = villageIdResponse.id || populatedPost.villageId;
        }
        const commentsCount = await this.calculateCommentsCount(populatedPost.id);
        const isSaved = currentUserId ? await this.isPostSaved(populatedPost.id, currentUserId) : false;
        return {
            id: populatedPost.id,
            userId: populatedPost.userId,
            villageId: villageIdResponse,
            type: populatedPost.type,
            text: populatedPost.text,
            mediaUrl: populatedPost.mediaUrl,
            mediaType: populatedPost.mediaType,
            question: populatedPost.question,
            options: optionsWithPercentages,
            totalVotes: populatedPost.totalVotes,
            likedBy: populatedPost.likedBy || [],
            likesCount: populatedPost.likesCount || 0,
            commentsCount: commentsCount,
            sharesCount: populatedPost.sharesCount || 0,
            isLiked: currentUserId ? (populatedPost.likedBy || []).includes(currentUserId) : false,
            hasVoted: populatedPost.type === 'question' ? hasVoted : undefined,
            votedOptionId: populatedPost.type === 'question' ? votedOptionId : undefined,
            isSaved: isSaved,
            isDeleted: populatedPost.isDeleted,
            createdAt: populatedPost.createdAt,
            updatedAt: populatedPost.updatedAt
        };
    }
    async isPostSaved(postId, userId) {
        try {
            const user = await this.userModel.findOne({ _id: userId, isDeleted: false });
            if (!user || !user.savedPosts) {
                return false;
            }
            return user.savedPosts.includes(postId);
        }
        catch (error) {
            console.log('❌ Error checking if post is saved:', error);
            return false;
        }
    }
    async calculateCommentsCount(postId) {
        try {
            const allComments = await this.commentsModel.find({
                postId: postId,
                isDeleted: false
            }).exec();
            const count = allComments.length;
            console.log(`📊 Post ${postId} - Total comments count: ${count}`);
            return count;
        }
        catch (error) {
            console.log('❌ Error calculating comments count:', error);
            return 0;
        }
    }
    async createPost(createPostDTO, userId) {
        try {
            if (!createPostDTO.villageId || createPostDTO.villageId.trim().length === 0) {
                throw new common_1.BadRequestException('Village ID is required for creating posts');
            }
            this.validatePostData(createPostDTO);
            const postData = {
                villageId: createPostDTO.villageId.trim(),
                type: createPostDTO.type,
                userId,
                options: createPostDTO.options?.map(option => ({
                    id: (0, utils_1.generateStringId)(),
                    text: option.text,
                    votes: []
                })) || []
            };
            if (createPostDTO.text !== undefined && createPostDTO.text !== null) {
                postData.text = createPostDTO.text;
            }
            if ((createPostDTO.type === 'image' || createPostDTO.type === 'video') &&
                createPostDTO.mediaType &&
                createPostDTO.mediaType !== null &&
                createPostDTO.mediaType !== undefined) {
                postData.mediaType = createPostDTO.mediaType;
            }
            if (createPostDTO.mediaUrl !== undefined && createPostDTO.mediaUrl !== null) {
                postData.mediaUrl = createPostDTO.mediaUrl;
            }
            if (createPostDTO.question !== undefined && createPostDTO.question !== null) {
                postData.question = createPostDTO.question;
            }
            console.log('📝 Creating post with data:', JSON.stringify(postData, null, 2));
            const postDocument = await new this.postModel(postData).save();
            const populatedPost = await this.populatePostData(postDocument, userId);
            console.log('✅ Post created successfully:', postDocument.id);
            return {
                success: true,
                message: 'Post created successfully',
                data: populatedPost
            };
        }
        catch (error) {
            console.log('❌ Error creating post:', error);
            throw new common_1.BadRequestException(error?.message || 'Failed to create post');
        }
    }
    async getAllPosts(query, currentUserId) {
        try {
            const { type, villageId, userId, search, offset = 0, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = query;
            const filter = { isDeleted: false };
            if (type)
                filter.type = type;
            if (villageId)
                filter.villageId = villageId;
            if (userId)
                filter.userId = userId;
            if (search) {
                filter.$or = [
                    { text: { $regex: search, $options: 'i' } },
                    { question: { $regex: search, $options: 'i' } }
                ];
            }
            const sort = {};
            sort[sortBy] = sortOrder === 'desc' ? -1 : 1;
            const total = await this.postModel.countDocuments(filter);
            const posts = await this.postModel
                .find(filter)
                .populate('userId', 'id fullName email profilePic')
                .populate('villageId', 'id name')
                .sort(sort)
                .skip(offset)
                .limit(limit)
                .lean();
            console.log(`📊 Processing ${posts.length} posts with comments count calculation...`);
            const processedPosts = await Promise.all(posts.map(async (post) => {
                let optionsWithPercentages = [];
                let hasVoted = false;
                let votedOptionId;
                if (post.type === 'question' && post.options) {
                    const totalVotes = post.totalVotes || 0;
                    optionsWithPercentages = post.options.map(option => {
                        const isVotedByCurrentUser = currentUserId ? option.votes.includes(currentUserId) : false;
                        if (isVotedByCurrentUser) {
                            hasVoted = true;
                            votedOptionId = option.id;
                        }
                        return {
                            id: option.id,
                            text: option.text,
                            voteCount: option.votes.length,
                            percentage: totalVotes > 0 ? Math.round((option.votes.length / totalVotes) * 100) : 0,
                            isVotedByCurrentUser
                        };
                    });
                    if (hasVoted) {
                        console.log(`🗳️ User ${currentUserId} has voted on poll post ${post.id} - option: ${votedOptionId}`);
                    }
                }
                let villageIdResponse = null;
                if (post.villageId && typeof post.villageId === 'object') {
                    villageIdResponse = post.villageId.id || post.villageId._id;
                }
                else if (post.villageId && typeof post.villageId === 'string') {
                    villageIdResponse = post.villageId;
                }
                else {
                    try {
                        const rawPost = await this.postModel.findById(post._id).select('villageId').lean();
                        villageIdResponse = rawPost?.villageId || null;
                    }
                    catch (error) {
                        console.log('Error getting raw villageId:', error);
                        villageIdResponse = null;
                    }
                }
                const commentsCount = await this.calculateCommentsCount(post.id);
                return {
                    id: post.id,
                    userId: post.userId,
                    villageId: villageIdResponse,
                    type: post.type,
                    text: post.text || '',
                    mediaUrl: post.mediaUrl || '',
                    mediaType: post.mediaType || null,
                    question: post.question || '',
                    options: optionsWithPercentages,
                    totalVotes: post.totalVotes || 0,
                    likedBy: post.likedBy || [],
                    likesCount: post.likesCount || 0,
                    commentsCount: commentsCount,
                    sharesCount: post.sharesCount || 0,
                    isLiked: currentUserId ? (post.likedBy || []).includes(currentUserId) : false,
                    hasVoted: post.type === 'question' ? hasVoted : undefined,
                    votedOptionId: post.type === 'question' ? votedOptionId : undefined,
                    isDeleted: post.isDeleted || false,
                    createdAt: post.createdAt,
                    updatedAt: post.updatedAt
                };
            }));
            return {
                success: true,
                message: 'Posts retrieved successfully',
                data: {
                    posts: processedPosts,
                    total,
                    offset,
                    limit
                }
            };
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message || 'Failed to retrieve posts');
        }
    }
    async getPostById(postId, currentUserId) {
        try {
            const post = await this.postModel
                .findOne({ id: postId, isDeleted: false })
                .populate('userId', 'id fullName email profilePic')
                .populate('villageId', 'id name')
                .lean();
            if (!post) {
                throw new common_1.NotFoundException('Post not found');
            }
            const populatedPost = await this.populatePostData(post, currentUserId);
            return {
                success: true,
                message: 'Post retrieved successfully',
                data: populatedPost
            };
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message || 'Failed to retrieve post');
        }
    }
    async updatePost(postId, updatePostDTO, userId) {
        try {
            const post = await this.postModel.findOne({ id: postId, isDeleted: false });
            if (!post) {
                throw new common_1.NotFoundException('Post not found');
            }
            if (post.userId !== userId) {
                throw new common_1.ForbiddenException('You can only update your own posts');
            }
            if (updatePostDTO.options) {
                updatePostDTO.options = updatePostDTO.options.map(option => ({
                    id: (0, utils_1.generateStringId)(),
                    text: option.text,
                    votes: []
                }));
            }
            const { id, ...updateFields } = updatePostDTO;
            const updatedPost = await this.postModel
                .findOneAndUpdate({ id: postId }, { $set: updateFields }, { new: true })
                .populate('userId', 'id fullName email profilePic')
                .populate('villageId', 'id name')
                .lean();
            const populatedPost = await this.populatePostData(updatedPost, userId);
            return {
                success: true,
                message: 'Post updated successfully',
                data: populatedPost
            };
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message || 'Failed to update post');
        }
    }
    async deletePost(postId, userId) {
        try {
            const post = await this.postModel.findOne({ id: postId, isDeleted: false });
            if (!post) {
                throw new common_1.NotFoundException('Post not found');
            }
            if (post.userId !== userId) {
                throw new common_1.ForbiddenException('You can only delete your own posts');
            }
            await this.postModel.findOneAndUpdate({ id: postId }, { $set: { isDeleted: true } });
            return {
                success: true,
                message: 'Post deleted successfully'
            };
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message || 'Failed to delete post');
        }
    }
    async voteOnPost(postId, votePostDTO, userId) {
        try {
            const post = await this.postModel.findOne({ id: postId, isDeleted: false });
            if (!post) {
                throw new common_1.NotFoundException('Post not found');
            }
            if (post.type !== 'question') {
                throw new common_1.BadRequestException('Voting is only allowed on question posts');
            }
            const hasVoted = post.options.some(option => option.votes.includes(userId));
            if (hasVoted) {
                throw new common_1.BadRequestException('You have already voted on this post');
            }
            const optionIndex = post.options.findIndex(option => option.id === votePostDTO.optionId);
            if (optionIndex === -1) {
                throw new common_1.BadRequestException('Invalid option ID');
            }
            post.options[optionIndex].votes.push(userId);
            post.totalVotes = (post.totalVotes || 0) + 1;
            await post.save();
            const populatedPost = await this.populatePostData(post, userId);
            return {
                success: true,
                message: 'Vote recorded successfully',
                data: populatedPost
            };
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message || 'Failed to record vote');
        }
    }
    async toggleLike(postId, userId) {
        try {
            const post = await this.postModel.findOne({ id: postId, isDeleted: false });
            if (!post) {
                throw new common_1.NotFoundException('Post not found');
            }
            const isLiked = post.likedBy.includes(userId);
            if (isLiked) {
                post.likedBy = post.likedBy.filter(id => id !== userId);
                post.likesCount = Math.max(0, post.likesCount - 1);
            }
            else {
                post.likedBy.push(userId);
                post.likesCount = post.likesCount + 1;
            }
            await post.save();
            const populatedPost = await this.populatePostData(post, userId);
            return {
                success: true,
                message: isLiked ? 'Post unliked successfully' : 'Post liked successfully',
                data: populatedPost
            };
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message || 'Failed to toggle like');
        }
    }
    async sharePost(postId, userId) {
        try {
            console.log(`🔗 User ${userId} sharing post ${postId}`);
            const post = await this.postModel.findOne({ id: postId, isDeleted: false });
            if (!post) {
                throw new common_1.NotFoundException('Post not found');
            }
            post.sharesCount = (post.sharesCount || 0) + 1;
            await post.save();
            console.log(`✅ Post ${postId} share count: ${post.sharesCount}`);
            const populatedPost = await this.populatePostData(post, userId);
            return {
                success: true,
                message: 'Post shared successfully',
                data: populatedPost
            };
        }
        catch (error) {
            console.log('❌ Error sharing post:', error);
            throw new common_1.BadRequestException(error?.message || 'Failed to share post');
        }
    }
    async toggleSavePost(postId, userId) {
        try {
            console.log(`💾 User ${userId} toggling save for post ${postId}`);
            const post = await this.postModel.findOne({ id: postId, isDeleted: false });
            if (!post) {
                throw new common_1.NotFoundException('Post not found');
            }
            const user = await this.userModel.findOne({ _id: userId, isDeleted: false });
            if (!user) {
                throw new common_1.NotFoundException('User not found');
            }
            const isSaved = user.savedPosts && user.savedPosts.includes(postId);
            if (isSaved) {
                user.savedPosts = user.savedPosts.filter((id) => id !== postId);
                await user.save();
                console.log(`✅ Post ${postId} unsaved by user ${userId}`);
            }
            else {
                if (!user.savedPosts) {
                    user.savedPosts = [];
                }
                user.savedPosts.push(postId);
                await user.save();
                console.log(`✅ Post ${postId} saved by user ${userId}`);
            }
            const populatedPost = await this.populatePostData(post, userId);
            return {
                success: true,
                message: isSaved ? 'Post unsaved successfully' : 'Post saved successfully',
                data: populatedPost
            };
        }
        catch (error) {
            console.log('❌ Error toggling save post:', error);
            throw new common_1.BadRequestException(error?.message || 'Failed to save/unsave post');
        }
    }
    async getSavedPosts(userId, query) {
        try {
            console.log(`📚 Fetching saved posts for user ${userId}`);
            console.log(`📋 Query params:`, JSON.stringify(query));
            if (!userId) {
                throw new common_1.BadRequestException('User ID is required');
            }
            const user = await this.userModel.findOne({ _id: userId, isDeleted: false });
            if (!user) {
                throw new common_1.NotFoundException('User not found');
            }
            const savedPostIds = user.savedPosts || [];
            console.log(`💾 User has ${savedPostIds.length} saved posts`);
            if (savedPostIds.length === 0) {
                return {
                    success: true,
                    message: 'No saved posts found',
                    data: {
                        posts: [],
                        total: 0,
                        offset: query.offset || 0,
                        limit: query.limit || 10
                    }
                };
            }
            const offset = query.offset !== undefined && query.offset !== null ? Number(query.offset) : 0;
            const limit = query.limit !== undefined && query.limit !== null ? Number(query.limit) : 10;
            const sortBy = query.sortBy || 'createdAt';
            const sortOrder = query.sortOrder || 'desc';
            if (isNaN(offset) || offset < 0) {
                throw new common_1.BadRequestException('Invalid offset value');
            }
            if (isNaN(limit) || limit < 1 || limit > 100) {
                throw new common_1.BadRequestException('Invalid limit value. Must be between 1 and 100');
            }
            console.log(`📊 Pagination: offset=${offset}, limit=${limit}, sortBy=${sortBy}, sortOrder=${sortOrder}`);
            const filter = {
                id: { $in: savedPostIds },
                isDeleted: false
            };
            const sort = {};
            sort[sortBy] = sortOrder === 'desc' ? -1 : 1;
            const total = await this.postModel.countDocuments(filter);
            const posts = await this.postModel
                .find(filter)
                .populate('userId', 'id fullName email profilePic')
                .populate('villageId', 'id name')
                .sort(sort)
                .skip(offset)
                .limit(limit)
                .lean();
            console.log(`📊 Processing ${posts.length} saved posts...`);
            const processedPosts = await Promise.all(posts.map(async (post) => {
                let optionsWithPercentages = [];
                let hasVoted = false;
                let votedOptionId;
                if (post.type === 'question' && post.options) {
                    const totalVotes = post.totalVotes || 0;
                    optionsWithPercentages = post.options.map(option => {
                        const isVotedByCurrentUser = option.votes.includes(userId);
                        if (isVotedByCurrentUser) {
                            hasVoted = true;
                            votedOptionId = option.id;
                        }
                        return {
                            id: option.id,
                            text: option.text,
                            voteCount: option.votes.length,
                            percentage: totalVotes > 0 ? Math.round((option.votes.length / totalVotes) * 100) : 0,
                            isVotedByCurrentUser
                        };
                    });
                }
                let villageIdResponse = null;
                if (post.villageId && typeof post.villageId === 'object') {
                    villageIdResponse = post.villageId.id || post.villageId._id;
                }
                else if (post.villageId && typeof post.villageId === 'string') {
                    villageIdResponse = post.villageId;
                }
                const commentsCount = await this.calculateCommentsCount(post.id);
                return {
                    id: post.id,
                    userId: post.userId,
                    villageId: villageIdResponse,
                    type: post.type,
                    text: post.text || '',
                    mediaUrl: post.mediaUrl || '',
                    mediaType: post.mediaType || null,
                    question: post.question || '',
                    options: optionsWithPercentages,
                    totalVotes: post.totalVotes || 0,
                    likedBy: post.likedBy || [],
                    likesCount: post.likesCount || 0,
                    commentsCount: commentsCount,
                    sharesCount: post.sharesCount || 0,
                    isLiked: (post.likedBy || []).includes(userId),
                    hasVoted: post.type === 'question' ? hasVoted : undefined,
                    votedOptionId: post.type === 'question' ? votedOptionId : undefined,
                    isSaved: true,
                    isDeleted: post.isDeleted || false,
                    createdAt: post.createdAt,
                    updatedAt: post.updatedAt
                };
            }));
            return {
                success: true,
                message: 'Saved posts retrieved successfully',
                data: {
                    posts: processedPosts,
                    total,
                    offset,
                    limit
                }
            };
        }
        catch (error) {
            console.log('❌ Error fetching saved posts:', error);
            console.log('❌ Error stack:', error?.stack);
            if (error instanceof common_1.NotFoundException || error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.BadRequestException(error?.message || 'Failed to retrieve saved posts');
        }
    }
    async reportPost(postId, userId, reason, description) {
        try {
            console.log(`🚨 User ${userId} reporting post ${postId} for reason: ${reason}`);
            const post = await this.postModel.findOne({ id: postId, isDeleted: false });
            if (!post) {
                throw new common_1.NotFoundException('Post not found');
            }
            const existingReport = await this.postReportModel.findOne({
                postId: postId,
                reportedBy: userId,
                isDeleted: false
            });
            if (existingReport) {
                throw new common_1.BadRequestException('You have already reported this post');
            }
            if (post.userId === userId) {
                throw new common_1.BadRequestException('You cannot report your own post');
            }
            const report = new this.postReportModel({
                postId: postId,
                reportedBy: userId,
                reason: reason,
                description: description || '',
                isResolved: false,
                isDeleted: false
            });
            await report.save();
            console.log(`✅ Post ${postId} reported successfully by user ${userId}`);
            return {
                success: true,
                message: 'Post reported successfully. Our team will review it shortly.',
                data: {
                    id: report.id,
                    postId: report.postId,
                    reportedBy: report.reportedBy,
                    reason: report.reason,
                    description: report.description,
                    isResolved: report.isResolved,
                    createdAt: report.createdAt
                }
            };
        }
        catch (error) {
            console.log('❌ Error reporting post:', error);
            if (error instanceof common_1.NotFoundException || error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.BadRequestException(error?.message || 'Failed to report post');
        }
    }
};
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(post_schema_1.Post.name)),
    __param(1, (0, mongoose_1.InjectModel)('User')),
    __param(2, (0, mongoose_1.InjectModel)('Village')),
    __param(3, (0, mongoose_1.InjectModel)(comments_schema_1.Comments.name)),
    __param(4, (0, mongoose_1.InjectModel)(post_report_schema_1.PostReport.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object, typeof (_d = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _d : Object, typeof (_e = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _e : Object])
], PostService);


/***/ }),
/* 66 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentsSchema = exports.Comments = void 0;
const mongoose_1 = __webpack_require__(15);
const utils_1 = __webpack_require__(49);
let Comments = exports.Comments = class Comments {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: utils_1.generateStringId }),
    __metadata("design:type", String)
], Comments.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Comments.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Comments.prototype, "postId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Comments.prototype, "text", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: null, required: false }),
    __metadata("design:type", String)
], Comments.prototype, "parentCommentId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Comments.prototype, "likedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Comments.prototype, "likesCount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Comments.prototype, "isDeleted", void 0);
exports.Comments = Comments = __decorate([
    (0, mongoose_1.Schema)()
], Comments);
exports.CommentsSchema = mongoose_1.SchemaFactory.createForClass(Comments);
exports.CommentsSchema.set('timestamps', true);
exports.CommentsSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});


/***/ }),
/* 67 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostReportSchema = exports.PostReport = void 0;
const mongoose_1 = __webpack_require__(15);
const utils_1 = __webpack_require__(49);
let PostReport = exports.PostReport = class PostReport {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: utils_1.generateStringId }),
    __metadata("design:type", String)
], PostReport.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, ref: 'Post' }),
    __metadata("design:type", String)
], PostReport.prototype, "postId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, ref: 'User' }),
    __metadata("design:type", String)
], PostReport.prototype, "reportedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        enum: ['spam', 'inappropriate', 'harassment', 'false_information', 'violence', 'other']
    }),
    __metadata("design:type", String)
], PostReport.prototype, "reason", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], PostReport.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], PostReport.prototype, "isResolved", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], PostReport.prototype, "resolvedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: null }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], PostReport.prototype, "resolvedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], PostReport.prototype, "isDeleted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: Date.now }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], PostReport.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: Date.now }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], PostReport.prototype, "updatedAt", void 0);
exports.PostReport = PostReport = __decorate([
    (0, mongoose_1.Schema)()
], PostReport);
exports.PostReportSchema = mongoose_1.SchemaFactory.createForClass(PostReport);
exports.PostReportSchema.set('timestamps', true);
exports.PostReportSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
exports.PostReportSchema.index({ postId: 1 });
exports.PostReportSchema.index({ reportedBy: 1 });
exports.PostReportSchema.index({ isResolved: 1 });
exports.PostReportSchema.index({ createdAt: -1 });


/***/ }),
/* 68 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VoteResponseDTO = exports.PostResponseDTO = exports.PostOptionResponseDTO = exports.PostQueryDTO = exports.VotePostDTO = exports.UpdatePostDTO = exports.CreatePostDTO = exports.PostOptionDTO = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(30);
const class_transformer_1 = __webpack_require__(69);
class PostOptionDTO {
}
exports.PostOptionDTO = PostOptionDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Option text', example: 'Option 1' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PostOptionDTO.prototype, "text", void 0);
class CreatePostDTO {
}
exports.CreatePostDTO = CreatePostDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Village ID where the post is created',
        example: 'village123'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePostDTO.prototype, "villageId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Post type',
        enum: ['text', 'image', 'video', 'question'],
        example: 'text'
    }),
    (0, class_validator_1.IsEnum)(['text', 'image', 'video', 'question']),
    __metadata("design:type", String)
], CreatePostDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Post text content',
        example: 'This is a great post!',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePostDTO.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Media URL for image/video posts',
        example: 'https://example.com/image.jpg',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePostDTO.prototype, "mediaUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Media type for image/video posts',
        enum: ['image', 'video'],
        example: 'image',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['image', 'video']),
    __metadata("design:type", String)
], CreatePostDTO.prototype, "mediaType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Question text for question posts',
        example: 'What is your favorite color?',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePostDTO.prototype, "question", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Options for question posts',
        type: [PostOptionDTO],
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => PostOptionDTO),
    __metadata("design:type", Array)
], CreatePostDTO.prototype, "options", void 0);
class UpdatePostDTO {
}
exports.UpdatePostDTO = UpdatePostDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Post ID to update (optional, ID is also in URL path)',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePostDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Updated post text',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePostDTO.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Updated media URL',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePostDTO.prototype, "mediaUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Updated media type',
        enum: ['image', 'video'],
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['image', 'video']),
    __metadata("design:type", String)
], UpdatePostDTO.prototype, "mediaType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Updated question text',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePostDTO.prototype, "question", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Updated options',
        type: [PostOptionDTO],
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => PostOptionDTO),
    __metadata("design:type", Array)
], UpdatePostDTO.prototype, "options", void 0);
class VotePostDTO {
}
exports.VotePostDTO = VotePostDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Option ID to vote for',
        example: 'option123'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VotePostDTO.prototype, "optionId", void 0);
class PostQueryDTO {
    constructor() {
        this.sortBy = 'createdAt';
        this.sortOrder = 'desc';
    }
}
exports.PostQueryDTO = PostQueryDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by post type',
        enum: ['text', 'image', 'video', 'question'],
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['text', 'image', 'video', 'question']),
    __metadata("design:type", String)
], PostQueryDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by village ID',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PostQueryDTO.prototype, "villageId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by user ID',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PostQueryDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Search in post text',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PostQueryDTO.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Page offset for pagination',
        default: 0,
        minimum: 0,
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (value === null || value === undefined || value === '')
            return 0;
        const parsed = parseInt(value, 10);
        return isNaN(parsed) ? 0 : parsed;
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], PostQueryDTO.prototype, "offset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of posts per page',
        default: 10,
        minimum: 1,
        maximum: 100,
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (value === null || value === undefined || value === '')
            return 10;
        const parsed = parseInt(value, 10);
        return isNaN(parsed) ? 10 : parsed;
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], PostQueryDTO.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Sort by field',
        enum: ['createdAt', 'totalVotes'],
        default: 'createdAt'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['createdAt', 'totalVotes']),
    __metadata("design:type", String)
], PostQueryDTO.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Sort order',
        enum: ['asc', 'desc'],
        default: 'desc'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['asc', 'desc']),
    __metadata("design:type", String)
], PostQueryDTO.prototype, "sortOrder", void 0);
class PostOptionResponseDTO {
}
exports.PostOptionResponseDTO = PostOptionResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Option ID' }),
    __metadata("design:type", String)
], PostOptionResponseDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Option text' }),
    __metadata("design:type", String)
], PostOptionResponseDTO.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of votes for this option' }),
    __metadata("design:type", Number)
], PostOptionResponseDTO.prototype, "voteCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Percentage of total votes' }),
    __metadata("design:type", Number)
], PostOptionResponseDTO.prototype, "percentage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the current user voted for this option', required: false }),
    __metadata("design:type", Boolean)
], PostOptionResponseDTO.prototype, "isVotedByCurrentUser", void 0);
class PostResponseDTO {
}
exports.PostResponseDTO = PostResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Post ID' }),
    __metadata("design:type", String)
], PostResponseDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID who created the post' }),
    __metadata("design:type", String)
], PostResponseDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Village ID where post was created' }),
    __metadata("design:type", String)
], PostResponseDTO.prototype, "villageId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Post type', enum: ['text', 'image', 'video', 'question'] }),
    __metadata("design:type", String)
], PostResponseDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Post text content' }),
    __metadata("design:type", String)
], PostResponseDTO.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Media URL' }),
    __metadata("design:type", String)
], PostResponseDTO.prototype, "mediaUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Media type', enum: ['image', 'video'] }),
    __metadata("design:type", String)
], PostResponseDTO.prototype, "mediaType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Question text for question posts' }),
    __metadata("design:type", String)
], PostResponseDTO.prototype, "question", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Options for question posts', type: [PostOptionResponseDTO] }),
    __metadata("design:type", Array)
], PostResponseDTO.prototype, "options", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total votes for question posts' }),
    __metadata("design:type", Number)
], PostResponseDTO.prototype, "totalVotes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of user IDs who liked this post' }),
    __metadata("design:type", Array)
], PostResponseDTO.prototype, "likedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of likes' }),
    __metadata("design:type", Number)
], PostResponseDTO.prototype, "likesCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of comments (including replies)' }),
    __metadata("design:type", Number)
], PostResponseDTO.prototype, "commentsCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of shares' }),
    __metadata("design:type", Number)
], PostResponseDTO.prototype, "sharesCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the current user has liked this post', required: false }),
    __metadata("design:type", Boolean)
], PostResponseDTO.prototype, "isLiked", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the current user has voted on this question post', required: false }),
    __metadata("design:type", Boolean)
], PostResponseDTO.prototype, "hasVoted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The option ID that the current user voted for', required: false }),
    __metadata("design:type", String)
], PostResponseDTO.prototype, "votedOptionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the current user has saved this post', required: false }),
    __metadata("design:type", Boolean)
], PostResponseDTO.prototype, "isSaved", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is post deleted' }),
    __metadata("design:type", Boolean)
], PostResponseDTO.prototype, "isDeleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], PostResponseDTO.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], PostResponseDTO.prototype, "updatedAt", void 0);
class VoteResponseDTO {
}
exports.VoteResponseDTO = VoteResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success status' }),
    __metadata("design:type", Boolean)
], VoteResponseDTO.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response message' }),
    __metadata("design:type", String)
], VoteResponseDTO.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated post data', type: PostResponseDTO }),
    __metadata("design:type", PostResponseDTO)
], VoteResponseDTO.prototype, "data", void 0);


/***/ }),
/* 69 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 70 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportPostResponseDTO = exports.ReportPostDTO = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(30);
class ReportPostDTO {
}
exports.ReportPostDTO = ReportPostDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Reason for reporting the post',
        enum: ['spam', 'inappropriate', 'harassment', 'false_information', 'violence', 'other'],
        example: 'spam'
    }),
    (0, class_validator_1.IsEnum)(['spam', 'inappropriate', 'harassment', 'false_information', 'violence', 'other']),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ReportPostDTO.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Additional details about the report (optional)',
        example: 'This post contains misleading information',
        required: false,
        maxLength: 500
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], ReportPostDTO.prototype, "description", void 0);
class ReportPostResponseDTO {
}
exports.ReportPostResponseDTO = ReportPostResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Report ID' }),
    __metadata("design:type", String)
], ReportPostResponseDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Post ID that was reported' }),
    __metadata("design:type", String)
], ReportPostResponseDTO.prototype, "postId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID who reported the post' }),
    __metadata("design:type", String)
], ReportPostResponseDTO.prototype, "reportedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reason for the report' }),
    __metadata("design:type", String)
], ReportPostResponseDTO.prototype, "reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Additional description', required: false }),
    __metadata("design:type", String)
], ReportPostResponseDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the report has been resolved' }),
    __metadata("design:type", Boolean)
], ReportPostResponseDTO.prototype, "isResolved", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], ReportPostResponseDTO.prototype, "createdAt", void 0);


/***/ }),
/* 71 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VillageSchema = exports.Village = exports.VillageStatus = void 0;
const mongoose_1 = __webpack_require__(15);
const utils_1 = __webpack_require__(49);
var VillageStatus;
(function (VillageStatus) {
    VillageStatus["ACTIVE"] = "active";
    VillageStatus["INACTIVE"] = "inactive";
})(VillageStatus || (exports.VillageStatus = VillageStatus = {}));
let Village = exports.Village = class Village {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: utils_1.generateStringId }),
    __metadata("design:type", String)
], Village.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, unique: true }),
    __metadata("design:type", String)
], Village.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Village.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: VillageStatus,
        default: VillageStatus.ACTIVE
    }),
    __metadata("design:type", String)
], Village.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: Date.now }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Village.prototype, "createdAt", void 0);
exports.Village = Village = __decorate([
    (0, mongoose_1.Schema)()
], Village);
exports.VillageSchema = mongoose_1.SchemaFactory.createForClass(Village);
exports.VillageSchema.set('timestamps', true);
exports.VillageSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
exports.VillageSchema.index({ name: 1 }, { unique: true });


/***/ }),
/* 72 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderModule = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(15);
const order_schema_1 = __webpack_require__(73);
const ecommerce_order_schema_1 = __webpack_require__(74);
const order_controller_1 = __webpack_require__(75);
const order_service_1 = __webpack_require__(77);
const ecommerce_order_controller_1 = __webpack_require__(78);
const ecommerce_order_service_1 = __webpack_require__(79);
let OrderModule = exports.OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: order_schema_1.Order.name,
                    schema: order_schema_1.OrderSchema,
                },
                {
                    name: ecommerce_order_schema_1.EcommerceOrder.name,
                    schema: ecommerce_order_schema_1.EcommerceOrderSchema,
                },
            ])
        ],
        controllers: [order_controller_1.OrderController, ecommerce_order_controller_1.EcommerceOrderController],
        providers: [order_service_1.OrderService, order_schema_1.Order, ecommerce_order_service_1.EcommerceOrderService],
        exports: [order_service_1.OrderService, ecommerce_order_service_1.EcommerceOrderService]
    })
], OrderModule);


/***/ }),
/* 73 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderSchema = exports.Order = void 0;
const mongoose_1 = __webpack_require__(15);
const utils_1 = __webpack_require__(49);
let Order = exports.Order = class Order {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: utils_1.generateStringId }),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "deliveryType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "flightType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "flightNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "airlineName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "departureCountry", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "departureCity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "departureAirport", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "departureDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "departureTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "ticketImage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "arrivalCountry", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "arrivalCity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "arrivalAirport", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "arrivalDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Order.prototype, "arrivalTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: '' }),
    __metadata("design:type", Number)
], Order.prototype, "luggageWeight", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Order.prototype, "isDropPackage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Order.prototype, "isPickupPackage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Order.prototype, "isDeleted", void 0);
exports.Order = Order = __decorate([
    (0, mongoose_1.Schema)()
], Order);
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
exports.OrderSchema.set('timestamps', true);
exports.OrderSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});


/***/ }),
/* 74 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EcommerceOrderSchema = exports.EcommerceOrder = void 0;
const mongoose_1 = __webpack_require__(15);
const utils_1 = __webpack_require__(49);
let EcommerceOrder = exports.EcommerceOrder = class EcommerceOrder {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: utils_1.generateStringId }),
    __metadata("design:type", String)
], EcommerceOrder.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, unique: true }),
    __metadata("design:type", String)
], EcommerceOrder.prototype, "orderNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], EcommerceOrder.prototype, "buyerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], EcommerceOrder.prototype, "sellerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], EcommerceOrder.prototype, "shopId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Array, required: true }),
    __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], EcommerceOrder.prototype, "items", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, default: 0 }),
    __metadata("design:type", Number)
], EcommerceOrder.prototype, "subtotal", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, default: 0 }),
    __metadata("design:type", Number)
], EcommerceOrder.prototype, "deliveryFee", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, default: 0 }),
    __metadata("design:type", Number)
], EcommerceOrder.prototype, "discount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, required: true, default: 0 }),
    __metadata("design:type", Number)
], EcommerceOrder.prototype, "total", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: 'PKR' }),
    __metadata("design:type", String)
], EcommerceOrder.prototype, "currency", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded'],
        default: 'pending',
    }),
    __metadata("design:type", String)
], EcommerceOrder.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ['cashOnDelivery', 'stripe', 'paypal', 'applePay', 'googlePay'],
        default: 'cashOnDelivery',
    }),
    __metadata("design:type", String)
], EcommerceOrder.prototype, "paymentMethod", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ['pending', 'paid', 'failed', 'refunded'],
        default: 'pending',
    }),
    __metadata("design:type", String)
], EcommerceOrder.prototype, "paymentStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: false }),
    __metadata("design:type", String)
], EcommerceOrder.prototype, "paymentIntentId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            fullName: String,
            phone: String,
            address: String,
            city: String,
            state: String,
            zipCode: String,
            country: String,
        },
        required: true,
    }),
    __metadata("design:type", Object)
], EcommerceOrder.prototype, "shippingAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: false }),
    __metadata("design:type", String)
], EcommerceOrder.prototype, "notes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: false }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], EcommerceOrder.prototype, "deliveredAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: false }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], EcommerceOrder.prototype, "cancelledAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], EcommerceOrder.prototype, "isDeleted", void 0);
exports.EcommerceOrder = EcommerceOrder = __decorate([
    (0, mongoose_1.Schema)()
], EcommerceOrder);
exports.EcommerceOrderSchema = mongoose_1.SchemaFactory.createForClass(EcommerceOrder);
exports.EcommerceOrderSchema.set('timestamps', true);
exports.EcommerceOrderSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
exports.EcommerceOrderSchema.pre('save', async function (next) {
    if (!this.orderNumber) {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        this.orderNumber = `ORD-${timestamp}-${random}`;
    }
    next();
});


/***/ }),
/* 75 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(3);
const user_decorator_1 = __webpack_require__(38);
const jwt_auth_guard_1 = __webpack_require__(36);
const order_dto_1 = __webpack_require__(76);
const order_service_1 = __webpack_require__(77);
let OrderController = exports.OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    createOrder(createPostDTO) {
        return this.orderService.createOrder(createPostDTO);
    }
    getAllOrders(getAllOrdersDTO, user) {
        return this.orderService.getAllOrders(getAllOrdersDTO);
    }
    getOrderById(getOrderIdDTO, user) {
        return this.orderService.getOrderById(getOrderIdDTO);
    }
    deleteOrderById(getOrderIdDTO, user) {
        return this.orderService.deleteOrderById(getOrderIdDTO);
    }
    updateOrderById(updateOrderDTO, user) {
        return this.orderService.updateOrderById(updateOrderDTO.id, updateOrderDTO);
    }
};
__decorate([
    (0, common_1.Post)('createOrder'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof order_dto_1.CreateOrderDTO !== "undefined" && order_dto_1.CreateOrderDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "createOrder", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('getAllOrders'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof order_dto_1.GetAllOrdersDTO !== "undefined" && order_dto_1.GetAllOrdersDTO) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getAllOrders", null);
__decorate([
    (0, common_1.Get)('getOrderById'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof order_dto_1.GetOrderIdDTO !== "undefined" && order_dto_1.GetOrderIdDTO) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getOrderById", null);
__decorate([
    (0, common_1.Post)('deleteOrderById'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof order_dto_1.DeleteOrderIdDTO !== "undefined" && order_dto_1.DeleteOrderIdDTO) === "function" ? _e : Object, Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "deleteOrderById", null);
__decorate([
    (0, common_1.Post)('updateOrderById'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof order_dto_1.UpdateOrderDTO !== "undefined" && order_dto_1.UpdateOrderDTO) === "function" ? _f : Object, Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "updateOrderById", null);
exports.OrderController = OrderController = __decorate([
    (0, swagger_1.ApiTags)('Order'),
    (0, common_1.Controller)('order'),
    __metadata("design:paramtypes", [typeof (_a = typeof order_service_1.OrderService !== "undefined" && order_service_1.OrderService) === "function" ? _a : Object])
], OrderController);


/***/ }),
/* 76 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateOrderDTO = exports.DeleteOrderIdDTO = exports.GetOrderIdDTO = exports.GetAllOrdersDTO = exports.PaginationDTO = exports.CreateOrderDTO = void 0;
const swagger_1 = __webpack_require__(3);
class CreateOrderDTO {
    static find() {
        throw new Error('Method not implemented.');
    }
}
exports.CreateOrderDTO = CreateOrderDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "deliveryType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "flightType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "flightNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "airlineName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "departureCountry", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "departureCity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "departureAirport", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "departureDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "departureTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "ticketImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "arrivalCountry", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "arrivalCity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "arrivalAirport", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "arrivalDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateOrderDTO.prototype, "arrivalTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateOrderDTO.prototype, "luggageWeight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CreateOrderDTO.prototype, "isDropPackage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], CreateOrderDTO.prototype, "isPickupPackage", void 0);
class PaginationDTO {
}
exports.PaginationDTO = PaginationDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0 }),
    __metadata("design:type", String)
], PaginationDTO.prototype, "offset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 10 }),
    __metadata("design:type", String)
], PaginationDTO.prototype, "limit", void 0);
class GetAllOrdersDTO extends PaginationDTO {
}
exports.GetAllOrdersDTO = GetAllOrdersDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], GetAllOrdersDTO.prototype, "departureCountry", void 0);
class GetOrderIdDTO {
}
exports.GetOrderIdDTO = GetOrderIdDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], GetOrderIdDTO.prototype, "id", void 0);
class DeleteOrderIdDTO {
}
exports.DeleteOrderIdDTO = DeleteOrderIdDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DeleteOrderIdDTO.prototype, "id", void 0);
class UpdateOrderDTO {
}
exports.UpdateOrderDTO = UpdateOrderDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateOrderDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateOrderDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateOrderDTO.prototype, "pic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdateOrderDTO.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], UpdateOrderDTO.prototype, "isDeleted", void 0);


/***/ }),
/* 77 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(15);
const mongoose_2 = __webpack_require__(14);
const order_schema_1 = __webpack_require__(73);
let OrderService = exports.OrderService = class OrderService {
    constructor(orderModel) {
        this.orderModel = orderModel;
    }
    async createOrder(createOrderDTO) {
        try {
            let orderDocument = await new this.orderModel(createOrderDTO).save();
            return orderDocument;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async getAllOrders(getAllOrdersDto) {
        try {
            console.log(getAllOrdersDto.limit);
            console.log(getAllOrdersDto.offset);
            let pagination = [];
            let orderData = await this.orderModel
                .find({ isDeleted: false, })
                .sort({ sort: 1 })
                .populate('departureCountry')
                .skip(parseInt(getAllOrdersDto.offset))
                .limit(parseInt(getAllOrdersDto.limit));
            let orders = await Promise.all(orderData.map(async (orderItem) => {
                return {
                    order: orderItem,
                };
            }));
            return orders;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async getOrderById(getOrderIdDTO) {
        try {
            let orderData = await this.orderModel
                .find({ id: getOrderIdDTO.id, }).exec();
            let postReturn = JSON.parse(JSON.stringify(orderData[0]));
            return postReturn;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async deleteOrderById(deleteOrderIdDTO) {
        try {
            let postData = await this.orderModel
                .deleteOne({ id: deleteOrderIdDTO.id, }).exec();
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async updateOrderById(postId, updateOrderByDto) {
        try {
            console.log(postId);
            console.log("updated post ", updateOrderByDto);
            const updatedOrder = await this.orderModel
                .updateOne({ id: postId }, { $set: updateOrderByDto });
            console.log("updated post nnn ", updatedOrder);
            return updatedOrder;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
};
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_schema_1.Order.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], OrderService);


/***/ }),
/* 78 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EcommerceOrderController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(3);
const jwt_auth_guard_1 = __webpack_require__(36);
const ecommerce_order_service_1 = __webpack_require__(79);
const ecommerce_order_dto_1 = __webpack_require__(80);
let EcommerceOrderController = exports.EcommerceOrderController = class EcommerceOrderController {
    constructor(ecommerceOrderService) {
        this.ecommerceOrderService = ecommerceOrderService;
    }
    async createOrder(createOrderDTO) {
        const order = await this.ecommerceOrderService.createOrder(createOrderDTO);
        return {
            success: true,
            message: 'Order created successfully',
            data: order,
        };
    }
    async getAllOrders(query) {
        const orders = await this.ecommerceOrderService.getAllOrders(query);
        return {
            success: true,
            message: 'Orders retrieved successfully',
            data: orders,
        };
    }
    async getOrderById(orderId) {
        const order = await this.ecommerceOrderService.getOrderById(orderId);
        return {
            success: true,
            message: 'Order retrieved successfully',
            data: order,
        };
    }
    async updateOrderStatus(orderId, updateStatusDTO) {
        const order = await this.ecommerceOrderService.updateOrderStatus(orderId, updateStatusDTO.status);
        return {
            success: true,
            message: 'Order status updated successfully',
            data: order,
        };
    }
    async cancelOrder(orderId) {
        const order = await this.ecommerceOrderService.cancelOrder(orderId);
        return {
            success: true,
            message: 'Order cancelled successfully',
            data: order,
        };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new e-commerce order' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Order created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof ecommerce_order_dto_1.CreateEcommerceOrderDTO !== "undefined" && ecommerce_order_dto_1.CreateEcommerceOrderDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], EcommerceOrderController.prototype, "createOrder", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all e-commerce orders' }),
    (0, swagger_1.ApiQuery)({ name: 'userId', required: false, description: 'Filter by buyer ID' }),
    (0, swagger_1.ApiQuery)({ name: 'shopId', required: false, description: 'Filter by shop ID' }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, description: 'Filter by order status' }),
    (0, swagger_1.ApiQuery)({ name: 'offset', required: false, type: Number, description: 'Pagination offset' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number, description: 'Pagination limit' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Orders retrieved successfully' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof ecommerce_order_dto_1.GetAllOrdersDTO !== "undefined" && ecommerce_order_dto_1.GetAllOrdersDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], EcommerceOrderController.prototype, "getAllOrders", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get order by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Order ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Order retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Order not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EcommerceOrderController.prototype, "getOrderById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update order status' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Order ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Order status updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Order not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id/status'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof ecommerce_order_dto_1.UpdateOrderStatusDTO !== "undefined" && ecommerce_order_dto_1.UpdateOrderStatusDTO) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], EcommerceOrderController.prototype, "updateOrderStatus", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Cancel order' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Order ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Order cancelled successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Order not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id/cancel'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EcommerceOrderController.prototype, "cancelOrder", null);
exports.EcommerceOrderController = EcommerceOrderController = __decorate([
    (0, swagger_1.ApiTags)('E-commerce Orders'),
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [typeof (_a = typeof ecommerce_order_service_1.EcommerceOrderService !== "undefined" && ecommerce_order_service_1.EcommerceOrderService) === "function" ? _a : Object])
], EcommerceOrderController);


/***/ }),
/* 79 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EcommerceOrderService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(15);
const mongoose_2 = __webpack_require__(14);
const ecommerce_order_schema_1 = __webpack_require__(74);
let EcommerceOrderService = exports.EcommerceOrderService = class EcommerceOrderService {
    constructor(ecommerceOrderModel) {
        this.ecommerceOrderModel = ecommerceOrderModel;
    }
    async createOrder(createOrderDTO) {
        try {
            const order = new this.ecommerceOrderModel(createOrderDTO);
            return await order.save();
        }
        catch (error) {
            console.error('❌ Error creating e-commerce order:', error);
            throw new common_1.BadRequestException(error?.message || 'Failed to create order');
        }
    }
    async getAllOrders(query) {
        try {
            const filter = { isDeleted: false };
            if (query.userId) {
                filter.buyerId = query.userId;
            }
            if (query.shopId) {
                filter.shopId = query.shopId;
            }
            if (query.status) {
                filter.status = query.status;
            }
            const offset = query.offset || 0;
            const limit = query.limit || 20;
            const orders = await this.ecommerceOrderModel
                .find(filter)
                .sort({ createdAt: -1 })
                .skip(offset)
                .limit(limit)
                .exec();
            return orders;
        }
        catch (error) {
            console.error('❌ Error fetching e-commerce orders:', error);
            throw new common_1.BadRequestException(error?.message || 'Failed to fetch orders');
        }
    }
    async getOrderById(orderId) {
        try {
            const order = await this.ecommerceOrderModel
                .findOne({ id: orderId, isDeleted: false })
                .exec();
            if (!order) {
                throw new common_1.NotFoundException('Order not found');
            }
            return order;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            console.error('❌ Error fetching e-commerce order:', error);
            throw new common_1.BadRequestException(error?.message || 'Failed to fetch order');
        }
    }
    async updateOrderStatus(orderId, status) {
        try {
            const order = await this.ecommerceOrderModel.findOne({ id: orderId, isDeleted: false }).exec();
            if (!order) {
                throw new common_1.NotFoundException('Order not found');
            }
            order.status = status;
            if (status === 'delivered') {
                order.deliveredAt = new Date();
            }
            else if (status === 'cancelled') {
                order.cancelledAt = new Date();
            }
            return await order.save();
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            console.error('❌ Error updating order status:', error);
            throw new common_1.BadRequestException(error?.message || 'Failed to update order status');
        }
    }
    async cancelOrder(orderId) {
        try {
            const order = await this.ecommerceOrderModel.findOne({ id: orderId, isDeleted: false }).exec();
            if (!order) {
                throw new common_1.NotFoundException('Order not found');
            }
            if (order.status === 'delivered' || order.status === 'cancelled') {
                throw new common_1.BadRequestException('Cannot cancel order with current status');
            }
            order.status = 'cancelled';
            order.cancelledAt = new Date();
            return await order.save();
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException || error instanceof common_1.BadRequestException) {
                throw error;
            }
            console.error('❌ Error cancelling order:', error);
            throw new common_1.BadRequestException(error?.message || 'Failed to cancel order');
        }
    }
};
exports.EcommerceOrderService = EcommerceOrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(ecommerce_order_schema_1.EcommerceOrder.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], EcommerceOrderService);


/***/ }),
/* 80 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfirmStripePaymentDTO = exports.CreateStripePaymentIntentDTO = exports.GetAllOrdersDTO = exports.UpdateOrderStatusDTO = exports.CreateEcommerceOrderDTO = exports.OrderItemDTO = exports.ShippingAddressDTO = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(30);
const class_transformer_1 = __webpack_require__(69);
class ShippingAddressDTO {
}
exports.ShippingAddressDTO = ShippingAddressDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShippingAddressDTO.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShippingAddressDTO.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShippingAddressDTO.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShippingAddressDTO.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShippingAddressDTO.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShippingAddressDTO.prototype, "zipCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ShippingAddressDTO.prototype, "country", void 0);
class OrderItemDTO {
}
exports.OrderItemDTO = OrderItemDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderItemDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], OrderItemDTO.prototype, "product", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], OrderItemDTO.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], OrderItemDTO.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderItemDTO.prototype, "selectedSize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderItemDTO.prototype, "selectedColor", void 0);
class CreateEcommerceOrderDTO {
}
exports.CreateEcommerceOrderDTO = CreateEcommerceOrderDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEcommerceOrderDTO.prototype, "buyerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEcommerceOrderDTO.prototype, "sellerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEcommerceOrderDTO.prototype, "shopId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [OrderItemDTO] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => OrderItemDTO),
    __metadata("design:type", Array)
], CreateEcommerceOrderDTO.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateEcommerceOrderDTO.prototype, "subtotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateEcommerceOrderDTO.prototype, "deliveryFee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateEcommerceOrderDTO.prototype, "discount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateEcommerceOrderDTO.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'PKR' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEcommerceOrderDTO.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['cashOnDelivery', 'stripe', 'paypal', 'applePay', 'googlePay'], default: 'cashOnDelivery' }),
    (0, class_validator_1.IsEnum)(['cashOnDelivery', 'stripe', 'paypal', 'applePay', 'googlePay']),
    __metadata("design:type", String)
], CreateEcommerceOrderDTO.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: ShippingAddressDTO }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ShippingAddressDTO),
    __metadata("design:type", ShippingAddressDTO)
], CreateEcommerceOrderDTO.prototype, "shippingAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEcommerceOrderDTO.prototype, "notes", void 0);
class UpdateOrderStatusDTO {
}
exports.UpdateOrderStatusDTO = UpdateOrderStatusDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded'] }),
    (0, class_validator_1.IsEnum)(['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded']),
    __metadata("design:type", String)
], UpdateOrderStatusDTO.prototype, "status", void 0);
class GetAllOrdersDTO {
}
exports.GetAllOrdersDTO = GetAllOrdersDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAllOrdersDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAllOrdersDTO.prototype, "shopId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded'] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded']),
    __metadata("design:type", String)
], GetAllOrdersDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (value === null || value === undefined || value === '')
            return 0;
        const parsed = parseInt(value, 10);
        return isNaN(parsed) ? 0 : parsed;
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetAllOrdersDTO.prototype, "offset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        if (value === null || value === undefined || value === '')
            return 20;
        const parsed = parseInt(value, 10);
        return isNaN(parsed) ? 20 : parsed;
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetAllOrdersDTO.prototype, "limit", void 0);
class CreateStripePaymentIntentDTO {
}
exports.CreateStripePaymentIntentDTO = CreateStripePaymentIntentDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStripePaymentIntentDTO.prototype, "orderId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateStripePaymentIntentDTO.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStripePaymentIntentDTO.prototype, "currency", void 0);
class ConfirmStripePaymentDTO {
}
exports.ConfirmStripePaymentDTO = ConfirmStripePaymentDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfirmStripePaymentDTO.prototype, "orderId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ConfirmStripePaymentDTO.prototype, "paymentIntentId", void 0);


/***/ }),
/* 81 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentsModule = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(15);
const comments_schema_1 = __webpack_require__(66);
const user_schema_1 = __webpack_require__(48);
const post_schema_1 = __webpack_require__(63);
const comments_controller_1 = __webpack_require__(82);
const comments_service_1 = __webpack_require__(83);
let CommentsModule = exports.CommentsModule = class CommentsModule {
};
exports.CommentsModule = CommentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: comments_schema_1.Comments.name,
                    schema: comments_schema_1.CommentsSchema,
                },
                {
                    name: 'users',
                    schema: user_schema_1.UserSchema,
                },
                {
                    name: post_schema_1.Post.name,
                    schema: post_schema_1.PostSchema,
                }
            ])
        ],
        controllers: [comments_controller_1.CommentsController],
        providers: [comments_service_1.CommentsService],
        exports: [comments_service_1.CommentsService]
    })
], CommentsModule);


/***/ }),
/* 82 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentsController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(3);
const user_decorator_1 = __webpack_require__(38);
const jwt_auth_guard_1 = __webpack_require__(36);
const comments_service_1 = __webpack_require__(83);
const comments_dto_1 = __webpack_require__(84);
let CommentsController = exports.CommentsController = class CommentsController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    createComment(createCommentDTO, user) {
        createCommentDTO.userId = user.id;
        return this.commentService.createComments(createCommentDTO);
    }
    getAllComments(getAllCommentsDTO, user) {
        return this.commentService.getAllComments(getAllCommentsDTO, user.id);
    }
    getReplies(commentId, offset = '0', limit = '10', user) {
        return this.commentService.getRepliesByCommentId(commentId, user.id, parseInt(offset), parseInt(limit));
    }
    getCommentById(getCommentIdDTO, user) {
        return this.commentService.getCommentsById(getCommentIdDTO);
    }
    deleteCommentById(getCommentIdDTO, user) {
        return this.commentService.deleteCommentsById(getCommentIdDTO);
    }
    updateCommentById(updateCommentDTO, user) {
        return this.commentService.updateCommentsById(updateCommentDTO.id, updateCommentDTO);
    }
    toggleLikeComment(commentId, user) {
        return this.commentService.toggleLikeComment(commentId, user.id);
    }
};
__decorate([
    (0, common_1.Post)('createComment'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof comments_dto_1.CreateCommentsDTO !== "undefined" && comments_dto_1.CreateCommentsDTO) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "createComment", null);
__decorate([
    (0, common_1.Get)('getAllComments'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof comments_dto_1.GetAllCommmentDTO !== "undefined" && comments_dto_1.GetAllCommmentDTO) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "getAllComments", null);
__decorate([
    (0, common_1.Get)('getReplies/:commentId'),
    __param(0, (0, common_1.Param)('commentId')),
    __param(1, (0, common_1.Query)('offset')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "getReplies", null);
__decorate([
    (0, common_1.Get)('getCommentById'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof comments_dto_1.GetCommentsIdDTO !== "undefined" && comments_dto_1.GetCommentsIdDTO) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "getCommentById", null);
__decorate([
    (0, common_1.Post)('deleteCommentById'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof comments_dto_1.DeleteCommentIdDTO !== "undefined" && comments_dto_1.DeleteCommentIdDTO) === "function" ? _e : Object, Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "deleteCommentById", null);
__decorate([
    (0, common_1.Post)('updateCommentById'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof comments_dto_1.UpdateCommentsDTO !== "undefined" && comments_dto_1.UpdateCommentsDTO) === "function" ? _f : Object, Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "updateCommentById", null);
__decorate([
    (0, common_1.Post)(':id/like'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CommentsController.prototype, "toggleLikeComment", null);
exports.CommentsController = CommentsController = __decorate([
    (0, swagger_1.ApiTags)('Comments'),
    (0, common_1.Controller)('comment'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof comments_service_1.CommentsService !== "undefined" && comments_service_1.CommentsService) === "function" ? _a : Object])
], CommentsController);


/***/ }),
/* 83 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentsService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(15);
const mongoose_2 = __webpack_require__(14);
const post_schema_1 = __webpack_require__(63);
const comments_schema_1 = __webpack_require__(66);
let CommentsService = exports.CommentsService = class CommentsService {
    constructor(commentsModel, userModel, postModel) {
        this.commentsModel = commentsModel;
        this.userModel = userModel;
        this.postModel = postModel;
    }
    async createComments(createCommentsDTO) {
        try {
            console.log('💬 Creating comment with data:', {
                postId: createCommentsDTO.postId,
                userId: createCommentsDTO.userId,
                text: createCommentsDTO.text,
                parentCommentId: createCommentsDTO.parentCommentId
            });
            const post = await this.postModel.findOne({ id: createCommentsDTO.postId, isDeleted: false });
            if (!post) {
                console.log(`❌ Post not found: ${createCommentsDTO.postId}`);
                throw new common_1.NotFoundException('Post not found');
            }
            console.log('✅ Post found:', post.id);
            const user = await this.userModel.findOne({ _id: createCommentsDTO.userId, isDeleted: false });
            if (!user) {
                console.log(`❌ User not found: ${createCommentsDTO.userId}`);
                throw new common_1.NotFoundException('User not found');
            }
            console.log('✅ User found:', user._id);
            const commentDocument = await new this.commentsModel({
                ...createCommentsDTO,
                likesCount: 0,
                likedBy: [],
            }).save();
            console.log('✅ Comment created:', commentDocument.id);
            const populatedComment = await this.populateCommentData(commentDocument, createCommentsDTO.userId);
            return {
                success: true,
                message: 'Comment created successfully',
                data: populatedComment
            };
        }
        catch (error) {
            console.log('❌ Error creating comment:', error?.message);
            console.log('❌ Full error:', error);
            throw new common_1.BadRequestException(error?.message || 'Failed to create comment');
        }
    }
    async getAllComments(getAllCommentsDto, currentUserId) {
        try {
            const commentsData = await this.commentsModel
                .find({
                isDeleted: false,
                postId: getAllCommentsDto.postId,
                $or: [
                    { parentCommentId: null },
                    { parentCommentId: '' }
                ]
            })
                .sort({ createdAt: -1 })
                .skip(parseInt(getAllCommentsDto.offset))
                .limit(parseInt(getAllCommentsDto.limit));
            const populatedComments = await Promise.all(commentsData.map(async (comment) => {
                const populatedComment = await this.populateCommentData(comment, currentUserId);
                const replyCount = await this.commentsModel.countDocuments({
                    parentCommentId: comment.id,
                    isDeleted: false
                });
                return {
                    ...populatedComment,
                    replyCount: replyCount
                };
            }));
            console.log(`✅ Fetched ${populatedComments.length} parent comments for post ${getAllCommentsDto.postId}`);
            return {
                success: true,
                message: 'Comments fetched successfully',
                data: populatedComments
            };
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message || 'Failed to fetch comments');
        }
    }
    async getRepliesByCommentId(commentId, currentUserId, offset = 0, limit = 10) {
        try {
            console.log(`📥 Fetching replies for comment ${commentId}: offset=${offset}, limit=${limit}`);
            const repliesData = await this.commentsModel
                .find({
                isDeleted: false,
                parentCommentId: commentId
            })
                .sort({ createdAt: 1 })
                .skip(offset)
                .limit(limit);
            const total = await this.commentsModel.countDocuments({
                parentCommentId: commentId,
                isDeleted: false
            });
            const populatedReplies = await Promise.all(repliesData.map(async (reply) => {
                return await this.populateCommentData(reply, currentUserId);
            }));
            console.log(`✅ Fetched ${populatedReplies.length} replies out of ${total} total`);
            return {
                success: true,
                message: 'Replies fetched successfully',
                data: populatedReplies,
                total: total
            };
        }
        catch (error) {
            console.log('❌ Error fetching replies:', error);
            throw new common_1.BadRequestException(error?.message || 'Failed to fetch replies');
        }
    }
    async getCommentsById(getCommentsIdDTO) {
        try {
            let commentsData = await this.commentsModel
                .find({ id: getCommentsIdDTO.id, }).exec();
            let commentReturn = JSON.parse(JSON.stringify(commentsData[0]));
            return commentReturn;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async deleteCommentsById(deleteCommentIdDTO) {
        try {
            let postData = await this.commentsModel
                .deleteOne({ id: deleteCommentIdDTO.id, }).exec();
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async updateCommentsById(postId, updateCommentsDTO) {
        try {
            console.log(postId);
            console.log("updated post ", updateCommentsDTO);
            const comments = await this.commentsModel
                .updateOne({ id: postId }, { $set: updateCommentsDTO });
            console.log("updated post nnn ", comments);
            return comments;
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message);
        }
    }
    async toggleLikeComment(commentId, userId) {
        try {
            const comment = await this.commentsModel.findOne({ id: commentId, isDeleted: false });
            if (!comment) {
                throw new common_1.NotFoundException('Comment not found');
            }
            const isLiked = comment.likedBy.includes(userId);
            if (isLiked) {
                comment.likedBy = comment.likedBy.filter(id => id !== userId);
                comment.likesCount = Math.max(0, comment.likesCount - 1);
            }
            else {
                comment.likedBy.push(userId);
                comment.likesCount = comment.likesCount + 1;
            }
            await comment.save();
            const populatedComment = await this.populateCommentData(comment, userId);
            return {
                success: true,
                message: isLiked ? 'Comment unliked successfully' : 'Comment liked successfully',
                data: populatedComment
            };
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException(error?.message || 'Failed to toggle like');
        }
    }
    async populateCommentData(comment, currentUserId) {
        try {
            const user = await this.userModel.findOne({ _id: comment.userId, isDeleted: false });
            return {
                id: comment.id,
                userId: user ? {
                    id: user._id,
                    fullName: user.fullName,
                    profilePic: user.profilePic,
                    email: user.email,
                } : null,
                postId: comment.postId,
                text: comment.text,
                parentCommentId: comment.parentCommentId && comment.parentCommentId.trim() !== ''
                    ? comment.parentCommentId
                    : null,
                likedBy: comment.likedBy || [],
                likesCount: comment.likesCount || 0,
                isLiked: currentUserId ? (comment.likedBy || []).includes(currentUserId) : false,
                isDeleted: comment.isDeleted,
                createdAt: comment.createdAt,
                updatedAt: comment.updatedAt
            };
        }
        catch (error) {
            console.log('Error populating comment data:', error);
            throw error;
        }
    }
};
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(comments_schema_1.Comments.name)),
    __param(1, (0, mongoose_1.InjectModel)('users')),
    __param(2, (0, mongoose_1.InjectModel)(post_schema_1.Post.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object])
], CommentsService);


/***/ }),
/* 84 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LikeCommentDTO = exports.CommentResponseDTO = exports.UpdateCommentsDTO = exports.DeleteCommentIdDTO = exports.GetCommentsIdDTO = exports.GetAllCommmentDTO = exports.PaginationDTO = exports.CreateCommentsDTO = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(30);
class CreateCommentsDTO {
}
exports.CreateCommentsDTO = CreateCommentsDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID who is creating the comment' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCommentsDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Post ID to comment on' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCommentsDTO.prototype, "postId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Comment text content' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCommentsDTO.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Parent comment ID for replies', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCommentsDTO.prototype, "parentCommentId", void 0);
class PaginationDTO {
}
exports.PaginationDTO = PaginationDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PaginationDTO.prototype, "offset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 10 }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PaginationDTO.prototype, "limit", void 0);
class GetAllCommmentDTO extends PaginationDTO {
}
exports.GetAllCommmentDTO = GetAllCommmentDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GetAllCommmentDTO.prototype, "postId", void 0);
class GetCommentsIdDTO {
}
exports.GetCommentsIdDTO = GetCommentsIdDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetCommentsIdDTO.prototype, "id", void 0);
class DeleteCommentIdDTO {
}
exports.DeleteCommentIdDTO = DeleteCommentIdDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], DeleteCommentIdDTO.prototype, "id", void 0);
class UpdateCommentsDTO {
}
exports.UpdateCommentsDTO = UpdateCommentsDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Comment ID to update' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCommentsDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Updated comment text' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateCommentsDTO.prototype, "text", void 0);
class CommentResponseDTO {
}
exports.CommentResponseDTO = CommentResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Comment ID' }),
    __metadata("design:type", String)
], CommentResponseDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User who created the comment' }),
    __metadata("design:type", Object)
], CommentResponseDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Post ID this comment belongs to' }),
    __metadata("design:type", String)
], CommentResponseDTO.prototype, "postId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Comment text content' }),
    __metadata("design:type", String)
], CommentResponseDTO.prototype, "text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Parent comment ID for replies', required: false }),
    __metadata("design:type", String)
], CommentResponseDTO.prototype, "parentCommentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of user IDs who liked this comment' }),
    __metadata("design:type", Array)
], CommentResponseDTO.prototype, "likedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of likes' }),
    __metadata("design:type", Number)
], CommentResponseDTO.prototype, "likesCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of replies (only for parent comments)', required: false }),
    __metadata("design:type", Number)
], CommentResponseDTO.prototype, "replyCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the current user has liked this comment', required: false }),
    __metadata("design:type", Boolean)
], CommentResponseDTO.prototype, "isLiked", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Whether the comment is deleted' }),
    __metadata("design:type", Boolean)
], CommentResponseDTO.prototype, "isDeleted", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Comment creation date' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CommentResponseDTO.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Comment last update date' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CommentResponseDTO.prototype, "updatedAt", void 0);
class LikeCommentDTO {
}
exports.LikeCommentDTO = LikeCommentDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Comment ID to like/unlike' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LikeCommentDTO.prototype, "commentId", void 0);


/***/ }),
/* 85 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VillageModule = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(15);
const village_controller_1 = __webpack_require__(86);
const village_service_1 = __webpack_require__(87);
const village_schema_1 = __webpack_require__(71);
let VillageModule = exports.VillageModule = class VillageModule {
};
exports.VillageModule = VillageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: village_schema_1.Village.name,
                    schema: village_schema_1.VillageSchema
                }
            ])
        ],
        controllers: [village_controller_1.VillageController],
        providers: [village_service_1.VillageService],
        exports: [village_service_1.VillageService]
    })
], VillageModule);


/***/ }),
/* 86 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VillageController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(3);
const village_service_1 = __webpack_require__(87);
const village_dto_1 = __webpack_require__(88);
let VillageController = exports.VillageController = class VillageController {
    constructor(villageService) {
        this.villageService = villageService;
    }
    async createVillage(createVillageDto) {
        return await this.villageService.createVillage(createVillageDto);
    }
    async getAllVillages(queryDto) {
        return await this.villageService.findAll(queryDto);
    }
    async getVillageById(id) {
        return await this.villageService.findOne(id);
    }
    async updateVillage(id, updateVillageDto) {
        return await this.villageService.updateVillage(id, updateVillageDto);
    }
    async deleteVillage(id) {
        return await this.villageService.deleteVillage(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({
        summary: 'Create a new village',
        description: 'Creates a new village with the provided information'
    }),
    (0, swagger_1.ApiBody)({
        type: village_dto_1.CreateVillageDto,
        description: 'Village data to create'
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Village successfully created',
        type: village_dto_1.VillageResponseDto
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Village with this name already exists'
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Invalid input data'
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof village_dto_1.CreateVillageDto !== "undefined" && village_dto_1.CreateVillageDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], VillageController.prototype, "createVillage", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get villages with optional filters',
        description: 'Retrieves villages from the database with optional filtering by status and search by name'
    }),
    (0, swagger_1.ApiQuery)({
        name: 'status',
        required: false,
        enum: ['active', 'inactive'],
        description: 'Filter villages by status'
    }),
    (0, swagger_1.ApiQuery)({
        name: 'search',
        required: false,
        type: String,
        description: 'Search villages by name (case-insensitive partial match)'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of villages matching the criteria',
        type: [village_dto_1.VillageResponseDto]
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof village_dto_1.GetVillagesQueryDto !== "undefined" && village_dto_1.GetVillagesQueryDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], VillageController.prototype, "getAllVillages", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get village by ID',
        description: 'Retrieves a specific village by its ID'
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Village ID',
        type: String
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Village found',
        type: village_dto_1.VillageResponseDto
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Village not found'
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], VillageController.prototype, "getVillageById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update village by ID',
        description: 'Updates a specific village with the provided information'
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Village ID',
        type: String
    }),
    (0, swagger_1.ApiBody)({
        type: village_dto_1.UpdateVillageDto,
        description: 'Village data to update (only provided fields will be updated)'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Village successfully updated',
        type: village_dto_1.VillageResponseDto
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Village not found'
    }),
    (0, swagger_1.ApiResponse)({
        status: 409,
        description: 'Village with this name already exists'
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Invalid input data'
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_g = typeof village_dto_1.UpdateVillageDto !== "undefined" && village_dto_1.UpdateVillageDto) === "function" ? _g : Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], VillageController.prototype, "updateVillage", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete village by ID',
        description: 'Deletes a specific village by its ID'
    }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Village ID',
        type: String
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Village successfully deleted',
        type: village_dto_1.DeleteVillageResponseDto
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Village not found'
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], VillageController.prototype, "deleteVillage", null);
exports.VillageController = VillageController = __decorate([
    (0, swagger_1.ApiTags)('Villages'),
    (0, common_1.Controller)('villages'),
    __metadata("design:paramtypes", [typeof (_a = typeof village_service_1.VillageService !== "undefined" && village_service_1.VillageService) === "function" ? _a : Object])
], VillageController);


/***/ }),
/* 87 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VillageService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(15);
const mongoose_2 = __webpack_require__(14);
const village_schema_1 = __webpack_require__(71);
let VillageService = exports.VillageService = class VillageService {
    constructor(villageModel) {
        this.villageModel = villageModel;
    }
    async createVillage(createVillageDto) {
        try {
            const villageData = {
                ...createVillageDto,
                status: createVillageDto.status || village_schema_1.VillageStatus.ACTIVE,
                createdAt: new Date(),
            };
            const createdVillage = new this.villageModel(villageData);
            return await createdVillage.save();
        }
        catch (error) {
            if (error.code === 11000 && error.keyPattern?.name) {
                throw new common_1.ConflictException(`Village with name '${createVillageDto.name}' already exists`);
            }
            throw error;
        }
    }
    async findAll(queryDto) {
        const filter = {};
        if (queryDto?.status) {
            filter.status = queryDto.status;
        }
        if (queryDto?.search) {
            filter.name = { $regex: queryDto.search, $options: 'i' };
        }
        return this.villageModel
            .find(filter)
            .select('_id name description status createdAt')
            .sort({ createdAt: -1 })
            .exec();
    }
    async findOne(id) {
        return this.villageModel.findById(id).exec();
    }
    async findByName(name) {
        return this.villageModel.findOne({ name }).exec();
    }
    async updateVillage(id, updateVillageDto) {
        try {
            const existingVillage = await this.villageModel.findById(id).exec();
            if (!existingVillage) {
                throw new common_1.NotFoundException(`Village with ID '${id}' not found`);
            }
            const updateData = {};
            if (updateVillageDto.name !== undefined)
                updateData.name = updateVillageDto.name;
            if (updateVillageDto.description !== undefined)
                updateData.description = updateVillageDto.description;
            if (updateVillageDto.status !== undefined)
                updateData.status = updateVillageDto.status;
            const updatedVillage = await this.villageModel
                .findByIdAndUpdate(id, updateData, { new: true, runValidators: true })
                .exec();
            if (!updatedVillage) {
                throw new common_1.NotFoundException(`Village with ID '${id}' not found`);
            }
            return updatedVillage;
        }
        catch (error) {
            if (error.code === 11000 && error.keyPattern?.name) {
                throw new common_1.ConflictException(`Village with name '${updateVillageDto.name}' already exists`);
            }
            if (error instanceof common_1.NotFoundException || error instanceof common_1.ConflictException) {
                throw error;
            }
            throw error;
        }
    }
    async deleteVillage(id) {
        const existingVillage = await this.villageModel.findById(id).exec();
        if (!existingVillage) {
            throw new common_1.NotFoundException(`Village with ID '${id}' not found`);
        }
        const result = await this.villageModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Village with ID '${id}' not found`);
        }
        return {
            success: true,
            message: 'Village deleted successfully'
        };
    }
};
exports.VillageService = VillageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(village_schema_1.Village.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], VillageService);


/***/ }),
/* 88 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteVillageResponseDto = exports.UpdateVillageDto = exports.VillageResponseDto = exports.GetVillagesQueryDto = exports.CreateVillageDto = exports.VillageStatus = void 0;
const class_validator_1 = __webpack_require__(30);
const swagger_1 = __webpack_require__(3);
const class_transformer_1 = __webpack_require__(69);
var VillageStatus;
(function (VillageStatus) {
    VillageStatus["ACTIVE"] = "active";
    VillageStatus["INACTIVE"] = "inactive";
})(VillageStatus || (exports.VillageStatus = VillageStatus = {}));
class CreateVillageDto {
}
exports.CreateVillageDto = CreateVillageDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of the village',
        example: 'Green Valley',
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateVillageDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Description of the village',
        example: 'A peaceful village surrounded by mountains',
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVillageDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Status of the village',
        enum: VillageStatus,
        default: VillageStatus.ACTIVE,
        example: VillageStatus.ACTIVE
    }),
    (0, class_validator_1.IsEnum)(VillageStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVillageDto.prototype, "status", void 0);
class GetVillagesQueryDto {
}
exports.GetVillagesQueryDto = GetVillagesQueryDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Filter villages by status',
        enum: VillageStatus,
        example: VillageStatus.ACTIVE
    }),
    (0, class_validator_1.IsEnum)(VillageStatus),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value?.toLowerCase()),
    __metadata("design:type", String)
], GetVillagesQueryDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Search villages by name (case-insensitive partial match)',
        example: 'green',
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => value?.trim()),
    __metadata("design:type", String)
], GetVillagesQueryDto.prototype, "search", void 0);
class VillageResponseDto {
}
exports.VillageResponseDto = VillageResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Village unique identifier' }),
    __metadata("design:type", String)
], VillageResponseDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the village' }),
    __metadata("design:type", String)
], VillageResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description of the village' }),
    __metadata("design:type", String)
], VillageResponseDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status of the village', enum: VillageStatus }),
    __metadata("design:type", String)
], VillageResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation date' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], VillageResponseDto.prototype, "createdAt", void 0);
class UpdateVillageDto {
}
exports.UpdateVillageDto = UpdateVillageDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Name of the village',
        example: 'Updated Village Name',
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateVillageDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Description of the village',
        example: 'Updated description of the village',
        type: String
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateVillageDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Status of the village',
        enum: VillageStatus,
        example: VillageStatus.ACTIVE
    }),
    (0, class_validator_1.IsEnum)(VillageStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateVillageDto.prototype, "status", void 0);
class DeleteVillageResponseDto {
}
exports.DeleteVillageResponseDto = DeleteVillageResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Indicates if the operation was successful',
        example: true
    }),
    __metadata("design:type", Boolean)
], DeleteVillageResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Success message',
        example: 'Village deleted successfully'
    }),
    __metadata("design:type", String)
], DeleteVillageResponseDto.prototype, "message", void 0);


/***/ }),
/* 89 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShopModule = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(15);
const shop_controller_1 = __webpack_require__(90);
const shop_service_1 = __webpack_require__(91);
const shop_schema_1 = __webpack_require__(95);
const shop_category_schema_1 = __webpack_require__(96);
const user_schema_1 = __webpack_require__(48);
let ShopModule = exports.ShopModule = class ShopModule {
};
exports.ShopModule = ShopModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Shop', schema: shop_schema_1.ShopSchema },
                { name: 'ShopCategory', schema: shop_category_schema_1.ShopCategorySchema },
                { name: 'User', schema: user_schema_1.UserSchema },
            ]),
        ],
        controllers: [shop_controller_1.ShopController],
        providers: [shop_service_1.ShopService],
        exports: [shop_service_1.ShopService],
    })
], ShopModule);


/***/ }),
/* 90 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShopController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(3);
const shop_service_1 = __webpack_require__(91);
const create_shop_dto_1 = __webpack_require__(92);
const update_shop_dto_1 = __webpack_require__(93);
const shop_response_dto_1 = __webpack_require__(94);
const jwt_auth_guard_1 = __webpack_require__(36);
const user_decorator_1 = __webpack_require__(38);
let ShopController = exports.ShopController = class ShopController {
    constructor(shopService) {
        this.shopService = shopService;
    }
    createShop(createShopDto, user) {
        return this.shopService.createShop(createShopDto, user.id);
    }
    getMyShops(user) {
        return this.shopService.getShopsByOwner(user.id);
    }
    getAllShops() {
        return this.shopService.getAllShops();
    }
    getShopById(id, user) {
        return this.shopService.getShopById(id, user?.id);
    }
    updateShop(id, updateShopDto, user) {
        return this.shopService.updateShop(id, updateShopDto, user.id);
    }
    deleteShop(id, user) {
        return this.shopService.deleteShop(id, user.id);
    }
    toggleFollowShop(id, user) {
        return this.shopService.toggleFollowShop(id, user.id);
    }
    getShopFollowers(id, user) {
        return this.shopService.getShopFollowers(id, user.id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new shop' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Shop created successfully',
        type: shop_response_dto_1.ShopResponseDTO
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_shop_dto_1.CreateShopDTO !== "undefined" && create_shop_dto_1.CreateShopDTO) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", void 0)
], ShopController.prototype, "createShop", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get shops owned by the authenticated user' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User shops retrieved successfully',
        type: [shop_response_dto_1.ShopResponseDTO]
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('my-shops'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ShopController.prototype, "getMyShops", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all active shops' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Shops retrieved successfully',
        type: [shop_response_dto_1.ShopResponseDTO]
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShopController.prototype, "getAllShops", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get shop by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Shop retrieved successfully',
        type: shop_response_dto_1.ShopResponseDTO
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Shop not found' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ShopController.prototype, "getShopById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update shop by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Shop updated successfully',
        type: shop_response_dto_1.ShopResponseDTO
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden - Not shop owner' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Shop not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_shop_dto_1.UpdateShopDTO !== "undefined" && update_shop_dto_1.UpdateShopDTO) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", void 0)
], ShopController.prototype, "updateShop", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete shop by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Shop deleted successfully',
        type: shop_response_dto_1.ShopResponseDTO
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden - Not shop owner' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Shop not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ShopController.prototype, "deleteShop", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Follow or unfollow a shop' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Shop follow status toggled successfully',
        type: shop_response_dto_1.ShopResponseDTO
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Shop not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':id/follow'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ShopController.prototype, "toggleFollowShop", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get shop followers (shop owner only)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Shop followers retrieved successfully'
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden - Not shop owner' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Shop not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id/followers'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ShopController.prototype, "getShopFollowers", null);
exports.ShopController = ShopController = __decorate([
    (0, swagger_1.ApiTags)('Shop'),
    (0, common_1.Controller)('shop'),
    __metadata("design:paramtypes", [typeof (_a = typeof shop_service_1.ShopService !== "undefined" && shop_service_1.ShopService) === "function" ? _a : Object])
], ShopController);


/***/ }),
/* 91 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShopService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(15);
const mongoose_2 = __webpack_require__(14);
let ShopService = exports.ShopService = class ShopService {
    constructor(shopModel, userModel) {
        this.shopModel = shopModel;
        this.userModel = userModel;
    }
    async createShop(createShopDto, userId) {
        try {
            const existingShop = await this.shopModel.findOne({
                user: userId,
                status: { $ne: 'closed' }
            });
            if (existingShop) {
                throw new Error('User already has an active shop');
            }
            const shopData = {
                ...createShopDto,
                ownerId: userId,
                user: userId,
                profileImage: createShopDto.profileImage || '',
                coverImage: createShopDto.coverImage || '',
                description: createShopDto.description || '',
            };
            const newShop = await new this.shopModel(shopData).save();
            const updatedUser = await this.userModel.findByIdAndUpdate(userId, { userRole: 'seller' }, { new: true });
            if (!updatedUser) {
                throw new Error('User not found');
            }
            const populatedShop = await this.shopModel
                .findById(newShop.id)
                .populate('user', 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt')
                .populate('villageId', 'id name')
                .populate('categoryId', 'id name')
                .exec();
            if (populatedShop && populatedShop.user) {
                const userObj = populatedShop.user;
                delete userObj.password;
            }
            return {
                shop: populatedShop,
                message: 'Shop created successfully and user role updated to seller'
            };
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Failed to create shop');
        }
    }
    async getShopById(shopId, userId) {
        try {
            const shop = await this.shopModel
                .findById(shopId)
                .populate('user', 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt')
                .populate('villageId', 'id name')
                .populate('categoryId', 'id name')
                .populate('followers', 'id fullName email profilePic')
                .exec();
            if (!shop) {
                throw new Error('Shop not found');
            }
            if (shop && shop.user) {
                const userObj = shop.user;
                delete userObj.password;
            }
            if (userId) {
                const shopObj = shop.toObject ? shop.toObject() : shop;
                shopObj.isFollowing = shop.followers && shop.followers.some((follower) => {
                    const followerId = typeof follower === 'string' ? follower : (follower._id || follower.id);
                    return followerId === userId;
                });
                return shopObj;
            }
            return shop;
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Failed to get shop');
        }
    }
    async getAllShops() {
        try {
            const shops = await this.shopModel
                .find({ status: 'active' })
                .populate('user', 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt')
                .populate('villageId', 'id name')
                .populate('categoryId', 'id name')
                .sort({ createdAt: -1 })
                .exec();
            shops.forEach(shop => {
                if (shop && shop.user) {
                    const userObj = shop.user;
                    delete userObj.password;
                }
            });
            return shops;
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Failed to get shops');
        }
    }
    async updateShop(shopId, updateShopDto, userId) {
        try {
            const shop = await this.shopModel.findOne({
                _id: shopId,
                user: userId,
                status: { $ne: 'closed' }
            });
            if (!shop) {
                throw new Error('Shop not found or you do not have permission to update this shop');
            }
            const updatedShop = await this.shopModel.findByIdAndUpdate(shopId, updateShopDto, { new: true }).populate('user', 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt')
                .populate('villageId', 'id name')
                .populate('categoryId', 'id name');
            if (updatedShop && updatedShop.user) {
                const userObj = updatedShop.user;
                delete userObj.password;
            }
            return {
                shop: updatedShop,
                message: 'Shop updated successfully'
            };
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Failed to update shop');
        }
    }
    async deleteShop(shopId, userId) {
        try {
            const shop = await this.shopModel.findOne({
                _id: shopId,
                user: userId
            });
            if (!shop) {
                throw new Error('Shop not found or you do not have permission to delete this shop');
            }
            const deletedShop = await this.shopModel.findByIdAndUpdate(shopId, { status: 'closed' }, { new: true }).populate('user', 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt')
                .populate('villageId', 'id name')
                .populate('categoryId', 'id name');
            if (deletedShop && deletedShop.user) {
                const userObj = deletedShop.user;
                delete userObj.password;
            }
            const activeShops = await this.shopModel.countDocuments({
                user: userId,
                status: { $ne: 'closed' }
            });
            if (activeShops === 0) {
                await this.userModel.findByIdAndUpdate(userId, { userRole: 'normal' });
            }
            return {
                message: 'Shop deleted successfully',
                shop: deletedShop
            };
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Failed to delete shop');
        }
    }
    async getShopsByOwner(userId) {
        try {
            console.log('🔍 Getting shops for user:', userId);
            const shops = await this.shopModel
                .find({ user: userId })
                .populate('user', 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt')
                .populate('villageId', 'id name')
                .populate('categoryId', 'id name')
                .sort({ createdAt: -1 })
                .exec();
            console.log('✅ Found shops:', shops.length);
            if (!shops || shops.length === 0) {
                console.log('ℹ️ No shops found for user, returning empty array');
                return [];
            }
            shops.forEach(shop => {
                if (shop && shop.user) {
                    const userObj = shop.user;
                    delete userObj.password;
                }
            });
            return shops;
        }
        catch (err) {
            console.log('❌ Error getting user shops:', err);
            return [];
        }
    }
    async toggleFollowShop(shopId, userId) {
        try {
            const shop = await this.shopModel.findById(shopId);
            if (!shop) {
                throw new Error('Shop not found');
            }
            const isFollowing = shop.followers && shop.followers.includes(userId);
            let updatedShop;
            if (isFollowing) {
                updatedShop = await this.shopModel.findByIdAndUpdate(shopId, { $pull: { followers: userId } }, { new: true }).populate('user', 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt')
                    .populate('villageId', 'id name')
                    .populate('categoryId', 'id name')
                    .populate('followers', 'id fullName email profilePic');
            }
            else {
                updatedShop = await this.shopModel.findByIdAndUpdate(shopId, { $addToSet: { followers: userId } }, { new: true }).populate('user', 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt')
                    .populate('villageId', 'id name')
                    .populate('categoryId', 'id name')
                    .populate('followers', 'id fullName email profilePic');
            }
            if (updatedShop && updatedShop.user) {
                const userObj = updatedShop.user;
                delete userObj.password;
            }
            return {
                shop: updatedShop,
                isFollowing: !isFollowing,
                message: isFollowing ? 'Shop unfollowed successfully' : 'Shop followed successfully'
            };
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Failed to toggle follow shop');
        }
    }
    async getShopFollowers(shopId, userId) {
        try {
            const shop = await this.shopModel.findById(shopId)
                .populate('followers', 'id fullName email profilePic')
                .exec();
            if (!shop) {
                throw new Error('Shop not found');
            }
            const isOwner = shop.ownerId === userId || shop.user === userId;
            if (!isOwner) {
                throw new Error('Only shop owner can view followers');
            }
            return {
                followers: shop.followers || [],
                count: shop.followers ? shop.followers.length : 0
            };
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Failed to get shop followers');
        }
    }
};
exports.ShopService = ShopService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Shop')),
    __param(1, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object])
], ShopService);


/***/ }),
/* 92 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateShopDTO = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(30);
class CreateShopDTO {
}
exports.CreateShopDTO = CreateShopDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the shop' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateShopDTO.prototype, "shopName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID of the village where the shop is located' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateShopDTO.prototype, "villageId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID of the shop category' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateShopDTO.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Profile image URL', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({}, { message: 'Please provide a valid URL for profile image' }),
    __metadata("design:type", String)
], CreateShopDTO.prototype, "profileImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cover image URL', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({}, { message: 'Please provide a valid URL for cover image' }),
    __metadata("design:type", String)
], CreateShopDTO.prototype, "coverImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description of the shop', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateShopDTO.prototype, "description", void 0);


/***/ }),
/* 93 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateShopDTO = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(30);
class UpdateShopDTO {
}
exports.UpdateShopDTO = UpdateShopDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Name of the shop', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateShopDTO.prototype, "shopName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID of the village where the shop is located', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateShopDTO.prototype, "villageId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID of the shop category', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateShopDTO.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Profile image URL', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({}, { message: 'Please provide a valid URL for profile image' }),
    __metadata("design:type", String)
], UpdateShopDTO.prototype, "profileImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cover image URL', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)({}, { message: 'Please provide a valid URL for cover image' }),
    __metadata("design:type", String)
], UpdateShopDTO.prototype, "coverImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description of the shop', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateShopDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status of the shop', enum: ['active', 'suspended', 'closed'], required: false }),
    (0, class_validator_1.IsEnum)(['active', 'suspended', 'closed']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateShopDTO.prototype, "status", void 0);


/***/ }),
/* 94 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShopResponseDTO = exports.CategoryResponseDTO = exports.VillageResponseDTO = exports.UserResponseDTO = void 0;
const swagger_1 = __webpack_require__(3);
class UserResponseDTO {
}
exports.UserResponseDTO = UserResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID' }),
    __metadata("design:type", String)
], UserResponseDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Full name of the user' }),
    __metadata("design:type", String)
], UserResponseDTO.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email address' }),
    __metadata("design:type", String)
], UserResponseDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Phone number' }),
    __metadata("design:type", String)
], UserResponseDTO.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User role', enum: ['normal', 'seller', 'admin'] }),
    __metadata("design:type", String)
], UserResponseDTO.prototype, "userRole", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User status', enum: ['active', 'inactive', 'suspended'] }),
    __metadata("design:type", String)
], UserResponseDTO.prototype, "userStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Profile picture URL' }),
    __metadata("design:type", String)
], UserResponseDTO.prototype, "profilePic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserResponseDTO.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserResponseDTO.prototype, "updatedAt", void 0);
class VillageResponseDTO {
}
exports.VillageResponseDTO = VillageResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Village ID' }),
    __metadata("design:type", String)
], VillageResponseDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Village name' }),
    __metadata("design:type", String)
], VillageResponseDTO.prototype, "name", void 0);
class CategoryResponseDTO {
}
exports.CategoryResponseDTO = CategoryResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category ID' }),
    __metadata("design:type", String)
], CategoryResponseDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category name' }),
    __metadata("design:type", String)
], CategoryResponseDTO.prototype, "name", void 0);
class ShopResponseDTO {
}
exports.ShopResponseDTO = ShopResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shop ID' }),
    __metadata("design:type", String)
], ShopResponseDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shop name' }),
    __metadata("design:type", String)
], ShopResponseDTO.prototype, "shopName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shop owner ID' }),
    __metadata("design:type", String)
], ShopResponseDTO.prototype, "ownerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shop owner details', type: UserResponseDTO }),
    __metadata("design:type", UserResponseDTO)
], ShopResponseDTO.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Village details', type: VillageResponseDTO }),
    __metadata("design:type", VillageResponseDTO)
], ShopResponseDTO.prototype, "villageId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category details', type: CategoryResponseDTO }),
    __metadata("design:type", CategoryResponseDTO)
], ShopResponseDTO.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Profile image URL' }),
    __metadata("design:type", String)
], ShopResponseDTO.prototype, "profileImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cover image URL' }),
    __metadata("design:type", String)
], ShopResponseDTO.prototype, "coverImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shop description' }),
    __metadata("design:type", String)
], ShopResponseDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of likes' }),
    __metadata("design:type", Number)
], ShopResponseDTO.prototype, "likes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of follower user IDs' }),
    __metadata("design:type", Array)
], ShopResponseDTO.prototype, "followers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of product IDs' }),
    __metadata("design:type", Array)
], ShopResponseDTO.prototype, "products", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shop rating' }),
    __metadata("design:type", Number)
], ShopResponseDTO.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of review IDs' }),
    __metadata("design:type", Array)
], ShopResponseDTO.prototype, "reviews", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Verification status' }),
    __metadata("design:type", Boolean)
], ShopResponseDTO.prototype, "isVerified", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shop status', enum: ['active', 'suspended', 'closed'] }),
    __metadata("design:type", String)
], ShopResponseDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], ShopResponseDTO.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], ShopResponseDTO.prototype, "updatedAt", void 0);


/***/ }),
/* 95 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Shop = exports.ShopSchema = void 0;
const mongoose_1 = __webpack_require__(14);
const utils_1 = __webpack_require__(49);
exports.ShopSchema = new mongoose_1.Schema({
    _id: { type: String, default: utils_1.generateStringId },
    shopName: { type: String, required: true },
    ownerId: { type: String, required: true, ref: 'User' },
    user: { type: String, required: true, ref: 'User' },
    villageId: { type: String, required: true, ref: 'Village' },
    categoryId: { type: String, required: true, ref: 'ShopCategory' },
    profileImage: { type: String, default: '' },
    coverImage: { type: String, default: '' },
    description: { type: String, default: '' },
    likes: { type: Number, default: 0 },
    followers: [{ type: String, ref: 'User' }],
    products: [{ type: String, ref: 'Product' }],
    rating: { type: Number, default: 0 },
    reviews: [{ type: String, ref: 'Review' }],
    isVerified: { type: Boolean, default: false },
    status: {
        type: String,
        default: 'active',
        enum: ['active', 'suspended', 'closed']
    },
}, {
    collection: 'shops',
    timestamps: true,
});
const Shop = (0, mongoose_1.model)('Shop', exports.ShopSchema);
exports.Shop = Shop;
exports.ShopSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
exports.ShopSchema.index({ shopName: 1 });
exports.ShopSchema.index({ ownerId: 1 });
exports.ShopSchema.index({ user: 1 });
exports.ShopSchema.index({ villageId: 1 });
exports.ShopSchema.index({ categoryId: 1 });
exports.ShopSchema.index({ status: 1 });
exports.ShopSchema.index({ isVerified: 1 });


/***/ }),
/* 96 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShopCategory = exports.ShopCategorySchema = void 0;
const mongoose_1 = __webpack_require__(14);
const utils_1 = __webpack_require__(49);
exports.ShopCategorySchema = new mongoose_1.Schema({
    _id: { type: String, default: utils_1.generateStringId },
    name: { type: String, required: true },
    description: { type: String, default: '' },
    icon: { type: String, default: '' },
    isActive: { type: Boolean, default: true },
}, {
    collection: 'shop_categories',
    timestamps: true,
});
const ShopCategory = (0, mongoose_1.model)('ShopCategory', exports.ShopCategorySchema);
exports.ShopCategory = ShopCategory;
exports.ShopCategorySchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
exports.ShopCategorySchema.index({ name: 1 });
exports.ShopCategorySchema.index({ isActive: 1 });


/***/ }),
/* 97 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryModule = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(15);
const category_controller_1 = __webpack_require__(98);
const category_service_1 = __webpack_require__(99);
const category_schema_1 = __webpack_require__(104);
let CategoryModule = exports.CategoryModule = class CategoryModule {
};
exports.CategoryModule = CategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Category', schema: category_schema_1.CategorySchema },
            ]),
        ],
        controllers: [category_controller_1.CategoryController],
        providers: [category_service_1.CategoryService],
        exports: [category_service_1.CategoryService],
    })
], CategoryModule);


/***/ }),
/* 98 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(3);
const category_service_1 = __webpack_require__(99);
const create_category_dto_1 = __webpack_require__(100);
const update_category_dto_1 = __webpack_require__(101);
const category_query_dto_1 = __webpack_require__(102);
const category_response_dto_1 = __webpack_require__(103);
let CategoryController = exports.CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    createCategory(createCategoryDto) {
        return this.categoryService.createCategory(createCategoryDto);
    }
    getCategoryById(id) {
        return this.categoryService.getCategoryById(id);
    }
    getAllCategories(query) {
        return this.categoryService.getAllCategories(query);
    }
    updateCategory(id, updateCategoryDto) {
        return this.categoryService.updateCategory(id, updateCategoryDto);
    }
    deleteCategory(id) {
        return this.categoryService.deleteCategory(id);
    }
    getCategoriesByType(type) {
        return this.categoryService.getCategoriesByType(type);
    }
    getCategoryHierarchy() {
        return this.categoryService.getCategoryHierarchy();
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new category' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Category created successfully',
        type: category_response_dto_1.CategoryResponseDTO
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - validation failed' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_category_dto_1.CreateCategoryDTO !== "undefined" && create_category_dto_1.CreateCategoryDTO) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "createCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get category by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Category ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Category retrieved successfully',
        type: category_response_dto_1.CategoryResponseDTO
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "getCategoryById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all categories with optional filters' }),
    (0, swagger_1.ApiQuery)({ name: 'type', required: false, enum: ['SHOP_CATEGORY', 'PRODUCT_CATEGORY', 'SUBCATEGORY'] }),
    (0, swagger_1.ApiQuery)({ name: 'shopCategoryId', required: false, description: 'Filter by shop category ID' }),
    (0, swagger_1.ApiQuery)({ name: 'productCategoryId', required: false, description: 'Filter by product category ID' }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: ['ACTIVE', 'INACTIVE'] }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, description: 'Search by category name' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Categories retrieved successfully',
        type: [category_response_dto_1.CategoryResponseDTO]
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof category_query_dto_1.CategoryQueryDTO !== "undefined" && category_query_dto_1.CategoryQueryDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "getAllCategories", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update category by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Category ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Category updated successfully',
        type: category_response_dto_1.CategoryResponseDTO
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof update_category_dto_1.UpdateCategoryDTO !== "undefined" && update_category_dto_1.UpdateCategoryDTO) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "updateCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete category by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Category ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Category deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - category has children' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Category not found' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "deleteCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get categories by type' }),
    (0, swagger_1.ApiParam)({ name: 'type', enum: ['SHOP_CATEGORY', 'PRODUCT_CATEGORY', 'SUBCATEGORY'] }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Categories retrieved successfully',
        type: [category_response_dto_1.CategoryResponseDTO]
    }),
    (0, common_1.Get)('type/:type'),
    __param(0, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "getCategoriesByType", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get complete category hierarchy' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Category hierarchy retrieved successfully',
        schema: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    name: { type: 'string' },
                    type: { type: 'string', enum: ['SHOP_CATEGORY'] },
                    status: { type: 'string', enum: ['ACTIVE', 'INACTIVE'] },
                    children: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                id: { type: 'string' },
                                name: { type: 'string' },
                                type: { type: 'string', enum: ['PRODUCT_CATEGORY'] },
                                status: { type: 'string', enum: ['ACTIVE', 'INACTIVE'] },
                                children: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            id: { type: 'string' },
                                            name: { type: 'string' },
                                            type: { type: 'string', enum: ['SUBCATEGORY'] },
                                            status: { type: 'string', enum: ['ACTIVE', 'INACTIVE'] }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }),
    (0, common_1.Get)('hierarchy/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "getCategoryHierarchy", null);
exports.CategoryController = CategoryController = __decorate([
    (0, swagger_1.ApiTags)('Category'),
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [typeof (_a = typeof category_service_1.CategoryService !== "undefined" && category_service_1.CategoryService) === "function" ? _a : Object])
], CategoryController);


/***/ }),
/* 99 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(15);
const mongoose_2 = __webpack_require__(14);
let CategoryService = exports.CategoryService = class CategoryService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    async createCategory(createCategoryDto) {
        try {
            await this.validateParentCategories(createCategoryDto);
            const category = await new this.categoryModel(createCategoryDto).save();
            return await this.getCategoryById(category.id);
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Failed to create category');
        }
    }
    async getCategoryById(id) {
        try {
            const category = await this.categoryModel
                .findById(id)
                .populate('parentCategoryId', 'id name type')
                .populate('shopCategoryId', 'id name type')
                .populate('productCategoryId', 'id name type')
                .exec();
            if (!category) {
                throw new common_1.NotFoundException('Category not found');
            }
            return this.formatCategoryResponse(category);
        }
        catch (err) {
            console.log(err);
            if (err instanceof common_1.NotFoundException) {
                throw err;
            }
            throw new common_1.BadRequestException(err?.message || 'Failed to get category');
        }
    }
    async getAllCategories(query) {
        try {
            const filter = {};
            if (query.type) {
                filter.type = query.type;
            }
            if (query.shopCategoryId) {
                filter.shopCategoryId = query.shopCategoryId;
            }
            if (query.productCategoryId) {
                filter.productCategoryId = query.productCategoryId;
            }
            if (query.status) {
                filter.status = query.status;
            }
            if (query.search) {
                filter.name = { $regex: query.search, $options: 'i' };
            }
            const categories = await this.categoryModel
                .find(filter)
                .populate('parentCategoryId', 'id name type')
                .populate('shopCategoryId', 'id name type')
                .populate('productCategoryId', 'id name type')
                .sort({ sortOrder: 1, createdAt: -1 })
                .exec();
            return categories.map(category => this.formatCategoryResponse(category));
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Failed to get categories');
        }
    }
    async updateCategory(id, updateCategoryDto) {
        try {
            const category = await this.categoryModel.findById(id);
            if (!category) {
                throw new common_1.NotFoundException('Category not found');
            }
            const updatedCategory = await this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, { new: true }).populate('parentCategoryId', 'id name type')
                .populate('shopCategoryId', 'id name type')
                .populate('productCategoryId', 'id name type');
            return this.formatCategoryResponse(updatedCategory);
        }
        catch (err) {
            console.log(err);
            if (err instanceof common_1.NotFoundException) {
                throw err;
            }
            throw new common_1.BadRequestException(err?.message || 'Failed to update category');
        }
    }
    async deleteCategory(id) {
        try {
            const category = await this.categoryModel.findById(id);
            if (!category) {
                throw new common_1.NotFoundException('Category not found');
            }
            const hasChildren = await this.categoryModel.findOne({
                $or: [
                    { parentCategoryId: id },
                    { shopCategoryId: id },
                    { productCategoryId: id }
                ]
            });
            if (hasChildren) {
                throw new common_1.BadRequestException('Cannot delete category with child categories');
            }
            await this.categoryModel.findByIdAndDelete(id);
            return { message: 'Category deleted successfully' };
        }
        catch (err) {
            console.log(err);
            if (err instanceof common_1.NotFoundException || err instanceof common_1.BadRequestException) {
                throw err;
            }
            throw new common_1.BadRequestException(err?.message || 'Failed to delete category');
        }
    }
    async getCategoriesByType(type) {
        try {
            const categories = await this.categoryModel
                .find({ type, status: 'ACTIVE' })
                .populate('parentCategoryId', 'id name type')
                .populate('shopCategoryId', 'id name type')
                .populate('productCategoryId', 'id name type')
                .sort({ sortOrder: 1, name: 1 })
                .exec();
            return categories.map(category => this.formatCategoryResponse(category));
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Failed to get categories by type');
        }
    }
    async getCategoryHierarchy() {
        try {
            const shopCategories = await this.categoryModel
                .find({ type: 'SHOP_CATEGORY', status: 'ACTIVE' })
                .sort({ sortOrder: 1, name: 1 })
                .exec();
            const hierarchy = [];
            for (const shopCategory of shopCategories) {
                const productCategories = await this.categoryModel
                    .find({
                    type: 'PRODUCT_CATEGORY',
                    shopCategoryId: shopCategory.id,
                    status: 'ACTIVE'
                })
                    .sort({ sortOrder: 1, name: 1 })
                    .exec();
                const shopCategoryWithChildren = {
                    ...this.formatCategoryResponse(shopCategory),
                    children: []
                };
                for (const productCategory of productCategories) {
                    const subcategories = await this.categoryModel
                        .find({
                        type: 'SUBCATEGORY',
                        productCategoryId: productCategory.id,
                        status: 'ACTIVE'
                    })
                        .sort({ sortOrder: 1, name: 1 })
                        .exec();
                    shopCategoryWithChildren.children.push({
                        ...this.formatCategoryResponse(productCategory),
                        children: subcategories.map(sub => this.formatCategoryResponse(sub))
                    });
                }
                hierarchy.push(shopCategoryWithChildren);
            }
            return hierarchy;
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Failed to get category hierarchy');
        }
    }
    async validateParentCategories(createCategoryDto) {
        if (createCategoryDto.shopCategoryId) {
            const shopCategory = await this.categoryModel.findOne({
                _id: createCategoryDto.shopCategoryId,
                type: 'SHOP_CATEGORY',
                status: 'ACTIVE'
            });
            if (!shopCategory) {
                throw new common_1.BadRequestException('Invalid shopCategoryId');
            }
        }
        if (createCategoryDto.productCategoryId) {
            const productCategory = await this.categoryModel.findOne({
                _id: createCategoryDto.productCategoryId,
                type: 'PRODUCT_CATEGORY',
                status: 'ACTIVE'
            });
            if (!productCategory) {
                throw new common_1.BadRequestException('Invalid productCategoryId');
            }
        }
    }
    formatCategoryResponse(category) {
        const response = {
            id: category.id,
            name: category.name,
            type: category.type,
            parentCategoryId: category.parentCategoryId,
            shopCategoryId: category.shopCategoryId,
            productCategoryId: category.productCategoryId,
            status: category.status,
            description: category.description,
            icon: category.icon,
            sortOrder: category.sortOrder,
            createdAt: category.createdAt,
            updatedAt: category.updatedAt,
        };
        if (category.parentCategoryId && typeof category.parentCategoryId === 'object') {
            response['parentCategory'] = {
                id: category.parentCategoryId.id,
                name: category.parentCategoryId.name,
                type: category.parentCategoryId.type
            };
        }
        if (category.shopCategoryId && typeof category.shopCategoryId === 'object') {
            response['shopCategory'] = {
                id: category.shopCategoryId.id,
                name: category.shopCategoryId.name,
                type: category.shopCategoryId.type
            };
        }
        if (category.productCategoryId && typeof category.productCategoryId === 'object') {
            response['productCategory'] = {
                id: category.productCategoryId.id,
                name: category.productCategoryId.name,
                type: category.productCategoryId.type
            };
        }
        return response;
    }
};
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Category')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], CategoryService);


/***/ }),
/* 100 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCategoryDTO = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(30);
class CreateCategoryDTO {
}
exports.CreateCategoryDTO = CreateCategoryDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of the category',
        example: 'Electronics'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCategoryDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Type of category',
        enum: ['SHOP_CATEGORY', 'PRODUCT_CATEGORY', 'SUBCATEGORY'],
        example: 'SHOP_CATEGORY'
    }),
    (0, class_validator_1.IsEnum)(['SHOP_CATEGORY', 'PRODUCT_CATEGORY', 'SUBCATEGORY']),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCategoryDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Parent category ID (nullable for SHOP_CATEGORY)',
        required: false,
        example: null
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCategoryDTO.prototype, "parentCategoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Shop category ID (required for PRODUCT_CATEGORY and SUBCATEGORY)',
        required: false,
        example: 'shop_cat_123'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCategoryDTO.prototype, "shopCategoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product category ID (required for SUBCATEGORY)',
        required: false,
        example: 'product_cat_123'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCategoryDTO.prototype, "productCategoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Category status',
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE',
        required: false
    }),
    (0, class_validator_1.IsEnum)(['ACTIVE', 'INACTIVE']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCategoryDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Category description',
        required: false,
        example: 'Electronic devices and accessories'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCategoryDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Category icon URL',
        required: false,
        example: 'https://example.com/icon.png'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCategoryDTO.prototype, "icon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Sort order for display',
        required: false,
        example: 1,
        minimum: 0
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateCategoryDTO.prototype, "sortOrder", void 0);


/***/ }),
/* 101 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateCategoryDTO = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(30);
class UpdateCategoryDTO {
}
exports.UpdateCategoryDTO = UpdateCategoryDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of the category',
        required: false,
        example: 'Updated Electronics'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCategoryDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Category status',
        enum: ['ACTIVE', 'INACTIVE'],
        required: false
    }),
    (0, class_validator_1.IsEnum)(['ACTIVE', 'INACTIVE']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCategoryDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Category description',
        required: false,
        example: 'Updated description'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCategoryDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Category icon URL',
        required: false,
        example: 'https://example.com/updated-icon.png'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCategoryDTO.prototype, "icon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Sort order for display',
        required: false,
        example: 2,
        minimum: 0
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateCategoryDTO.prototype, "sortOrder", void 0);


/***/ }),
/* 102 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryQueryDTO = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(30);
class CategoryQueryDTO {
}
exports.CategoryQueryDTO = CategoryQueryDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by category type',
        enum: ['SHOP_CATEGORY', 'PRODUCT_CATEGORY', 'SUBCATEGORY'],
        required: false
    }),
    (0, class_validator_1.IsEnum)(['SHOP_CATEGORY', 'PRODUCT_CATEGORY', 'SUBCATEGORY']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CategoryQueryDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by shop category ID',
        required: false,
        example: 'shop_cat_123'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CategoryQueryDTO.prototype, "shopCategoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by product category ID',
        required: false,
        example: 'product_cat_123'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CategoryQueryDTO.prototype, "productCategoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by status',
        enum: ['ACTIVE', 'INACTIVE'],
        required: false
    }),
    (0, class_validator_1.IsEnum)(['ACTIVE', 'INACTIVE']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CategoryQueryDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Search by category name',
        required: false,
        example: 'electronics'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CategoryQueryDTO.prototype, "search", void 0);


/***/ }),
/* 103 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryResponseDTO = exports.ParentCategoryDTO = void 0;
const swagger_1 = __webpack_require__(3);
class ParentCategoryDTO {
}
exports.ParentCategoryDTO = ParentCategoryDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Parent category ID' }),
    __metadata("design:type", String)
], ParentCategoryDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Parent category name' }),
    __metadata("design:type", String)
], ParentCategoryDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Parent category type' }),
    __metadata("design:type", String)
], ParentCategoryDTO.prototype, "type", void 0);
class CategoryResponseDTO {
}
exports.CategoryResponseDTO = CategoryResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category ID' }),
    __metadata("design:type", String)
], CategoryResponseDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category name' }),
    __metadata("design:type", String)
], CategoryResponseDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Category type',
        enum: ['SHOP_CATEGORY', 'PRODUCT_CATEGORY', 'SUBCATEGORY']
    }),
    __metadata("design:type", String)
], CategoryResponseDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Parent category ID (nullable for SHOP_CATEGORY)',
        required: false
    }),
    __metadata("design:type", String)
], CategoryResponseDTO.prototype, "parentCategoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Shop category ID (for PRODUCT_CATEGORY and SUBCATEGORY)',
        required: false
    }),
    __metadata("design:type", String)
], CategoryResponseDTO.prototype, "shopCategoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product category ID (for SUBCATEGORY)',
        required: false
    }),
    __metadata("design:type", String)
], CategoryResponseDTO.prototype, "productCategoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Category status',
        enum: ['ACTIVE', 'INACTIVE']
    }),
    __metadata("design:type", String)
], CategoryResponseDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category description', required: false }),
    __metadata("design:type", String)
], CategoryResponseDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category icon URL', required: false }),
    __metadata("design:type", String)
], CategoryResponseDTO.prototype, "icon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sort order for display' }),
    __metadata("design:type", Number)
], CategoryResponseDTO.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Parent category details', type: ParentCategoryDTO, required: false }),
    __metadata("design:type", ParentCategoryDTO)
], CategoryResponseDTO.prototype, "parentCategory", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shop category details', type: ParentCategoryDTO, required: false }),
    __metadata("design:type", ParentCategoryDTO)
], CategoryResponseDTO.prototype, "shopCategory", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product category details', type: ParentCategoryDTO, required: false }),
    __metadata("design:type", ParentCategoryDTO)
], CategoryResponseDTO.prototype, "productCategory", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CategoryResponseDTO.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CategoryResponseDTO.prototype, "updatedAt", void 0);


/***/ }),
/* 104 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Category = exports.CategorySchema = void 0;
const mongoose_1 = __webpack_require__(14);
const utils_1 = __webpack_require__(49);
exports.CategorySchema = new mongoose_1.Schema({
    _id: { type: String, default: utils_1.generateStringId },
    name: { type: String, required: true },
    type: {
        type: String,
        required: true,
        enum: ['SHOP_CATEGORY', 'PRODUCT_CATEGORY', 'SUBCATEGORY'],
        default: 'SHOP_CATEGORY'
    },
    parentCategoryId: { type: String, ref: 'Category', default: null },
    shopCategoryId: { type: String, ref: 'Category', default: null },
    productCategoryId: { type: String, ref: 'Category', default: null },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE'
    },
    description: { type: String, default: '' },
    icon: { type: String, default: '' },
    sortOrder: { type: Number, default: 0 },
}, {
    collection: 'categories',
    timestamps: true,
});
const Category = (0, mongoose_1.model)('Category', exports.CategorySchema);
exports.Category = Category;
exports.CategorySchema.pre('save', function (next) {
    const category = this;
    if (category.type === 'SHOP_CATEGORY') {
        if (category.shopCategoryId || category.productCategoryId) {
            return next(new Error('SHOP_CATEGORY cannot have parent categories'));
        }
    }
    if (category.type === 'PRODUCT_CATEGORY') {
        if (!category.shopCategoryId) {
            return next(new Error('PRODUCT_CATEGORY must have shopCategoryId'));
        }
        if (category.productCategoryId) {
            return next(new Error('PRODUCT_CATEGORY cannot have productCategoryId'));
        }
    }
    if (category.type === 'SUBCATEGORY') {
        if (!category.productCategoryId) {
            return next(new Error('SUBCATEGORY must have productCategoryId'));
        }
        if (!category.shopCategoryId) {
            return next(new Error('SUBCATEGORY must have shopCategoryId'));
        }
    }
    next();
});
exports.CategorySchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
exports.CategorySchema.index({ name: 1 });
exports.CategorySchema.index({ type: 1 });
exports.CategorySchema.index({ status: 1 });
exports.CategorySchema.index({ shopCategoryId: 1 });
exports.CategorySchema.index({ productCategoryId: 1 });
exports.CategorySchema.index({ parentCategoryId: 1 });
exports.CategorySchema.index({ sortOrder: 1 });


/***/ }),
/* 105 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductModule = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(15);
const product_controller_1 = __webpack_require__(106);
const product_service_1 = __webpack_require__(107);
const product_schema_1 = __webpack_require__(112);
const shop_schema_1 = __webpack_require__(95);
const category_schema_1 = __webpack_require__(104);
let ProductModule = exports.ProductModule = class ProductModule {
};
exports.ProductModule = ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Product', schema: product_schema_1.ProductSchema },
                { name: 'Shop', schema: shop_schema_1.ShopSchema },
                { name: 'Category', schema: category_schema_1.CategorySchema },
            ]),
        ],
        controllers: [product_controller_1.ProductController],
        providers: [product_service_1.ProductService],
        exports: [product_service_1.ProductService],
    })
], ProductModule);


/***/ }),
/* 106 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(3);
const product_service_1 = __webpack_require__(107);
const create_product_dto_1 = __webpack_require__(108);
const update_product_dto_1 = __webpack_require__(109);
const product_query_dto_1 = __webpack_require__(110);
const product_response_dto_1 = __webpack_require__(111);
const jwt_auth_guard_1 = __webpack_require__(36);
const user_decorator_1 = __webpack_require__(38);
let ProductController = exports.ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async createProduct(createProductDto, user) {
        const product = await this.productService.createProduct(createProductDto, user.id);
        return {
            success: true,
            message: 'Product created successfully',
            data: product
        };
    }
    async getProductById(id) {
        const product = await this.productService.getProductById(id);
        return {
            success: true,
            message: 'Product retrieved successfully',
            data: product
        };
    }
    async getAllProducts(query) {
        const result = await this.productService.getAllProducts(query);
        return {
            success: true,
            message: 'Products retrieved successfully',
            data: result
        };
    }
    async updateProduct(id, updateProductDto, user) {
        const product = await this.productService.updateProduct(id, updateProductDto, user.id);
        return {
            success: true,
            message: 'Product updated successfully',
            data: product
        };
    }
    async deleteProduct(id, user) {
        const result = await this.productService.deleteProduct(id, user.id);
        return {
            success: true,
            message: result.message,
            data: result
        };
    }
    async getProductsByShop(shopId, query) {
        const result = await this.productService.getProductsByShop(shopId, query);
        return {
            success: true,
            message: 'Shop products retrieved successfully',
            data: result
        };
    }
    async getFeaturedProducts(limit) {
        const products = await this.productService.getFeaturedProducts(limit);
        return {
            success: true,
            message: 'Featured products retrieved successfully',
            data: products
        };
    }
    async getProductsByCategory(categoryId, query) {
        const result = await this.productService.getProductsByCategory(categoryId, query);
        return {
            success: true,
            message: 'Category products retrieved successfully',
            data: result
        };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new product' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Product created successfully',
        type: (product_response_dto_1.ApiResponseDTO)
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - validation failed' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden - not shop owner' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_product_dto_1.CreateProductDTO !== "undefined" && create_product_dto_1.CreateProductDTO) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get product by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Product ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Product retrieved successfully',
        type: (product_response_dto_1.ApiResponseDTO)
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Product not found' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all products with advanced filters' }),
    (0, swagger_1.ApiQuery)({ name: 'shopId', required: false, description: 'Filter by shop ID' }),
    (0, swagger_1.ApiQuery)({ name: 'shopCategoryId', required: false, description: 'Filter by shop category ID' }),
    (0, swagger_1.ApiQuery)({ name: 'productCategoryId', required: false, description: 'Filter by product category ID' }),
    (0, swagger_1.ApiQuery)({ name: 'subCategoryId', required: false, description: 'Filter by subcategory ID' }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: ['ACTIVE', 'INACTIVE', 'OUT_OF_STOCK'] }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, description: 'Search by name, description, or tags' }),
    (0, swagger_1.ApiQuery)({ name: 'minPrice', required: false, description: 'Minimum price filter' }),
    (0, swagger_1.ApiQuery)({ name: 'maxPrice', required: false, description: 'Maximum price filter' }),
    (0, swagger_1.ApiQuery)({ name: 'createdFrom', required: false, description: 'Filter from creation date (ISO string)' }),
    (0, swagger_1.ApiQuery)({ name: 'createdTo', required: false, description: 'Filter to creation date (ISO string)' }),
    (0, swagger_1.ApiQuery)({ name: 'sortBy', required: false, enum: ['price', 'createdAt', 'updatedAt', 'stock', 'name', 'rating', 'soldCount', 'viewCount'] }),
    (0, swagger_1.ApiQuery)({ name: 'sortOrder', required: false, enum: ['asc', 'desc'] }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Number of products per page (1-100)' }),
    (0, swagger_1.ApiQuery)({ name: 'offset', required: false, description: 'Number of products to skip' }),
    (0, swagger_1.ApiQuery)({ name: 'isFeatured', required: false, description: 'Filter featured products' }),
    (0, swagger_1.ApiQuery)({ name: 'condition', required: false, enum: ['NEW', 'USED', 'REFURBISHED'] }),
    (0, swagger_1.ApiQuery)({ name: 'brand', required: false, description: 'Filter by brand' }),
    (0, swagger_1.ApiQuery)({ name: 'color', required: false, description: 'Filter by color' }),
    (0, swagger_1.ApiQuery)({ name: 'minRating', required: false, description: 'Minimum rating filter' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Products retrieved successfully',
        type: (product_response_dto_1.ApiResponseDTO)
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof product_query_dto_1.ProductQueryDTO !== "undefined" && product_query_dto_1.ProductQueryDTO) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProducts", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update product by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Product ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Product updated successfully',
        type: (product_response_dto_1.ApiResponseDTO)
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden - not product owner' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Product not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof update_product_dto_1.UpdateProductDTO !== "undefined" && update_product_dto_1.UpdateProductDTO) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete product by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Product ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Product deleted successfully',
        type: (product_response_dto_1.ApiResponseDTO)
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden - not product owner' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Product not found' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get products by shop ID' }),
    (0, swagger_1.ApiParam)({ name: 'shopId', description: 'Shop ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Shop products retrieved successfully',
        type: (product_response_dto_1.ApiResponseDTO)
    }),
    (0, common_1.Get)('shop/:shopId'),
    __param(0, (0, common_1.Param)('shopId')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_e = typeof product_query_dto_1.ProductQueryDTO !== "undefined" && product_query_dto_1.ProductQueryDTO) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductsByShop", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get featured products' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Number of featured products to return' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Featured products retrieved successfully',
        type: (product_response_dto_1.ApiResponseDTO)
    }),
    (0, common_1.Get)('featured/list'),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getFeaturedProducts", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get products by category ID' }),
    (0, swagger_1.ApiParam)({ name: 'categoryId', description: 'Category ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Category products retrieved successfully',
        type: (product_response_dto_1.ApiResponseDTO)
    }),
    (0, common_1.Get)('category/:categoryId'),
    __param(0, (0, common_1.Param)('categoryId')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_f = typeof product_query_dto_1.ProductQueryDTO !== "undefined" && product_query_dto_1.ProductQueryDTO) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProductsByCategory", null);
exports.ProductController = ProductController = __decorate([
    (0, swagger_1.ApiTags)('Products'),
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" ? _a : Object])
], ProductController);


/***/ }),
/* 107 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(15);
const mongoose_2 = __webpack_require__(14);
let ProductService = exports.ProductService = class ProductService {
    constructor(productModel, shopModel, categoryModel) {
        this.productModel = productModel;
        this.shopModel = shopModel;
        this.categoryModel = categoryModel;
    }
    async createProduct(createProductDto, userId) {
        try {
            const shop = await this.shopModel.findOne({
                _id: createProductDto.shopId,
                user: userId,
                status: 'active'
            });
            if (!shop) {
                throw new common_1.BadRequestException('Shop not found or you do not have permission to add products to this shop');
            }
            await this.validateCategories(createProductDto);
            if (createProductDto.sku) {
                const existingProduct = await this.productModel.findOne({ sku: createProductDto.sku });
                if (existingProduct) {
                    throw new common_1.BadRequestException('SKU already exists');
                }
            }
            const product = await new this.productModel(createProductDto).save();
            return await this.getProductById(product.id);
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Failed to create product');
        }
    }
    async getProductById(id) {
        try {
            const product = await this.productModel
                .findById(id)
                .populate({
                path: 'shopId',
                populate: {
                    path: 'user',
                    select: 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt'
                }
            })
                .populate('shopCategoryId', 'id name type')
                .populate('productCategoryId', 'id name type')
                .populate('subCategoryId', 'id name type')
                .exec();
            if (!product) {
                throw new common_1.NotFoundException('Product not found');
            }
            await this.productModel.findByIdAndUpdate(id, { $inc: { viewCount: 1 } });
            return this.formatProductResponse(product);
        }
        catch (err) {
            console.log(err);
            if (err instanceof common_1.NotFoundException) {
                throw err;
            }
            throw new common_1.BadRequestException(err?.message || 'Failed to get product');
        }
    }
    async getAllProducts(query) {
        try {
            const filter = {};
            const sort = {};
            if (query.shopId)
                filter.shopId = query.shopId;
            if (query.shopCategoryId)
                filter.shopCategoryId = query.shopCategoryId;
            if (query.productCategoryId)
                filter.productCategoryId = query.productCategoryId;
            if (query.subCategoryId)
                filter.subCategoryId = query.subCategoryId;
            if (query.status)
                filter.status = query.status;
            if (query.isFeatured !== undefined)
                filter.isFeatured = query.isFeatured;
            if (query.condition)
                filter.condition = query.condition;
            if (query.brand)
                filter.brand = { $regex: query.brand, $options: 'i' };
            if (query.color)
                filter.color = { $regex: query.color, $options: 'i' };
            if (query.minRating)
                filter.rating = { $gte: query.minRating };
            if (query.minPrice || query.maxPrice) {
                filter.price = {};
                if (query.minPrice)
                    filter.price.$gte = query.minPrice;
                if (query.maxPrice)
                    filter.price.$lte = query.maxPrice;
            }
            if (query.createdFrom || query.createdTo) {
                filter.createdAt = {};
                if (query.createdFrom)
                    filter.createdAt.$gte = new Date(query.createdFrom);
                if (query.createdTo)
                    filter.createdAt.$lte = new Date(query.createdTo);
            }
            if (query.search) {
                filter.$or = [
                    { name: { $regex: query.search, $options: 'i' } },
                    { description: { $regex: query.search, $options: 'i' } },
                    { tags: { $in: [new RegExp(query.search, 'i')] } },
                    { brand: { $regex: query.search, $options: 'i' } },
                    { model: { $regex: query.search, $options: 'i' } }
                ];
            }
            const sortBy = query.sortBy || 'createdAt';
            const sortOrder = query.sortOrder === 'asc' ? 1 : -1;
            sort[sortBy] = sortOrder;
            const limit = query.limit || 10;
            const offset = query.offset || 0;
            const [products, total] = await Promise.all([
                this.productModel
                    .find(filter)
                    .populate({
                    path: 'shopId',
                    populate: {
                        path: 'user',
                        select: 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt'
                    }
                })
                    .populate('shopCategoryId', 'id name type')
                    .populate('productCategoryId', 'id name type')
                    .populate('subCategoryId', 'id name type')
                    .sort(sort)
                    .skip(offset)
                    .limit(limit)
                    .exec(),
                this.productModel.countDocuments(filter)
            ]);
            const formattedProducts = products.map(product => this.formatProductResponse(product));
            const totalPages = Math.ceil(total / limit);
            const currentPage = Math.floor(offset / limit) + 1;
            return {
                products: formattedProducts,
                total,
                page: currentPage,
                limit,
                totalPages
            };
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Failed to get products');
        }
    }
    async updateProduct(id, updateProductDto, userId) {
        try {
            const product = await this.productModel.findById(id);
            if (!product) {
                throw new common_1.NotFoundException('Product not found');
            }
            const shop = await this.shopModel.findOne({
                _id: product.shopId,
                user: userId
            });
            if (!shop) {
                throw new common_1.BadRequestException('You do not have permission to update this product');
            }
            if (updateProductDto.sku && updateProductDto.sku !== product.sku) {
                const existingProduct = await this.productModel.findOne({
                    sku: updateProductDto.sku,
                    _id: { $ne: id }
                });
                if (existingProduct) {
                    throw new common_1.BadRequestException('SKU already exists');
                }
            }
            const updatedProduct = await this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true }).populate({
                path: 'shopId',
                populate: {
                    path: 'user',
                    select: 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt'
                }
            })
                .populate('shopCategoryId', 'id name type')
                .populate('productCategoryId', 'id name type')
                .populate('subCategoryId', 'id name type');
            return this.formatProductResponse(updatedProduct);
        }
        catch (err) {
            console.log(err);
            if (err instanceof common_1.NotFoundException || err instanceof common_1.BadRequestException) {
                throw err;
            }
            throw new common_1.BadRequestException(err?.message || 'Failed to update product');
        }
    }
    async deleteProduct(id, userId) {
        try {
            const product = await this.productModel.findById(id);
            if (!product) {
                throw new common_1.NotFoundException('Product not found');
            }
            const shop = await this.shopModel.findOne({
                _id: product.shopId,
                user: userId
            });
            if (!shop) {
                throw new common_1.BadRequestException('You do not have permission to delete this product');
            }
            await this.productModel.findByIdAndDelete(id);
            return { message: 'Product deleted successfully' };
        }
        catch (err) {
            console.log(err);
            if (err instanceof common_1.NotFoundException || err instanceof common_1.BadRequestException) {
                throw err;
            }
            throw new common_1.BadRequestException(err?.message || 'Failed to delete product');
        }
    }
    async getProductsByShop(shopId, query) {
        try {
            const shopQuery = { ...query, shopId };
            return await this.getAllProducts(shopQuery);
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Failed to get shop products');
        }
    }
    async getFeaturedProducts(limit = 10) {
        try {
            const products = await this.productModel
                .find({ isFeatured: true, status: 'ACTIVE' })
                .populate({
                path: 'shopId',
                populate: {
                    path: 'user',
                    select: 'id fullName email phoneNumber userRole userStatus profilePic createdAt updatedAt'
                }
            })
                .populate('shopCategoryId', 'id name type')
                .populate('productCategoryId', 'id name type')
                .populate('subCategoryId', 'id name type')
                .sort({ createdAt: -1 })
                .limit(limit)
                .exec();
            return products.map(product => this.formatProductResponse(product));
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Failed to get featured products');
        }
    }
    async getProductsByCategory(categoryId, query) {
        try {
            const categoryQuery = { ...query, productCategoryId: categoryId };
            return await this.getAllProducts(categoryQuery);
        }
        catch (err) {
            console.log(err);
            throw new common_1.BadRequestException(err?.message || 'Failed to get category products');
        }
    }
    async validateCategories(createProductDto) {
        const shopCategory = await this.categoryModel.findOne({
            _id: createProductDto.shopCategoryId,
            type: 'SHOP_CATEGORY',
            status: 'ACTIVE'
        });
        if (!shopCategory) {
            throw new common_1.BadRequestException('Invalid shop category');
        }
        const productCategory = await this.categoryModel.findOne({
            _id: createProductDto.productCategoryId,
            type: 'PRODUCT_CATEGORY',
            status: 'ACTIVE'
        });
        if (!productCategory) {
            throw new common_1.BadRequestException('Invalid product category');
        }
        if (createProductDto.subCategoryId) {
            const subCategory = await this.categoryModel.findOne({
                _id: createProductDto.subCategoryId,
                type: 'SUBCATEGORY',
                status: 'ACTIVE'
            });
            if (!subCategory) {
                throw new common_1.BadRequestException('Invalid subcategory');
            }
        }
    }
    formatProductResponse(product) {
        const response = {
            id: product.id,
            shopId: product.shopId,
            shop: product.shopId,
            shopCategoryId: product.shopCategoryId,
            shopCategory: product.shopCategoryId,
            productCategoryId: product.productCategoryId,
            productCategory: product.productCategoryId,
            subCategoryId: product.subCategoryId,
            subCategory: product.subCategoryId,
            name: product.name,
            description: product.description,
            images: product.images,
            video: product.video,
            price: product.price,
            discountPrice: product.discountPrice,
            currency: product.currency,
            sku: product.sku,
            stock: product.stock,
            unit: product.unit,
            status: product.status,
            tags: product.tags,
            isFeatured: product.isFeatured,
            weight: product.weight,
            dimensions: product.dimensions,
            warranty: product.warranty,
            brand: product.brand,
            model: product.model,
            color: product.color,
            size: product.size,
            material: product.material,
            condition: product.condition,
            rating: product.rating,
            reviewCount: product.reviewCount,
            viewCount: product.viewCount,
            soldCount: product.soldCount,
            createdAt: product.createdAt,
            updatedAt: product.updatedAt,
        };
        if (product.shopId && typeof product.shopId === 'object') {
            response.shop = product.shopId;
            if (product.shopId.user && typeof product.shopId.user === 'object') {
                const userObj = product.shopId.user;
                delete userObj.password;
            }
        }
        if (product.shopCategoryId && typeof product.shopCategoryId === 'object') {
            response.shopCategory = product.shopCategoryId;
        }
        if (product.productCategoryId && typeof product.productCategoryId === 'object') {
            response.productCategory = product.productCategoryId;
        }
        if (product.subCategoryId && typeof product.subCategoryId === 'object') {
            response.subCategory = product.subCategoryId;
        }
        return response;
    }
};
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Product')),
    __param(1, (0, mongoose_1.InjectModel)('Shop')),
    __param(2, (0, mongoose_1.InjectModel)('Category')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object])
], ProductService);


/***/ }),
/* 108 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateProductDTO = exports.ProductDimensionsDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(30);
const class_transformer_1 = __webpack_require__(69);
class ProductDimensionsDto {
}
exports.ProductDimensionsDto = ProductDimensionsDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product length in cm',
        example: 10,
        required: false
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ProductDimensionsDto.prototype, "length", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product width in cm',
        example: 5,
        required: false
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ProductDimensionsDto.prototype, "width", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product height in cm',
        example: 3,
        required: false
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ProductDimensionsDto.prototype, "height", void 0);
class CreateProductDTO {
}
exports.CreateProductDTO = CreateProductDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Shop ID where the product belongs',
        example: 'shop_123'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "shopId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Shop category ID',
        example: 'cat_123'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "shopCategoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product category ID',
        example: 'cat_456'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "productCategoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Subcategory ID (optional)',
        example: 'cat_789',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "subCategoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product name',
        example: 'iPhone 15 Pro Max'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product description',
        example: 'Latest iPhone with advanced features',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of product image URLs',
        example: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
        type: [String]
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1, { message: 'At least one image is required' }),
    (0, class_validator_1.IsUrl)({}, { each: true, message: 'Each image must be a valid URL' }),
    __metadata("design:type", Array)
], CreateProductDTO.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product video URL',
        example: 'https://example.com/video.mp4',
        required: false
    }),
    (0, class_validator_1.IsUrl)({}, { message: 'Video must be a valid URL' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "video", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product price',
        example: 150000,
        minimum: 0
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateProductDTO.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Discounted price (must be less than regular price)',
        example: 140000,
        minimum: 0,
        required: false
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateProductDTO.prototype, "discountPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Currency code',
        example: 'PKR',
        default: 'PKR',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Stock Keeping Unit (SKU)',
        example: 'IPH15PM-256-BLK',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "sku", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Available stock quantity',
        example: 50,
        minimum: 0,
        default: 0
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateProductDTO.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product unit',
        example: 'piece',
        default: 'piece',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product status',
        enum: ['ACTIVE', 'INACTIVE', 'OUT_OF_STOCK'],
        default: 'ACTIVE',
        required: false
    }),
    (0, class_validator_1.IsEnum)(['ACTIVE', 'INACTIVE', 'OUT_OF_STOCK']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product tags for search and categorization',
        example: ['smartphone', 'apple', 'premium'],
        type: [String],
        required: false
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateProductDTO.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this a featured product?',
        example: false,
        default: false,
        required: false
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateProductDTO.prototype, "isFeatured", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product weight in grams',
        example: 240,
        minimum: 0,
        required: false
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateProductDTO.prototype, "weight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product dimensions',
        type: ProductDimensionsDto,
        required: false
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => ProductDimensionsDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", ProductDimensionsDto)
], CreateProductDTO.prototype, "dimensions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product warranty information',
        example: '1 year manufacturer warranty',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "warranty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product brand',
        example: 'Apple',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product model',
        example: 'iPhone 15 Pro Max',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "model", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product color',
        example: 'Space Black',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product size',
        example: '256GB',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product material',
        example: 'Titanium',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "material", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product condition',
        enum: ['NEW', 'USED', 'REFURBISHED'],
        default: 'NEW',
        required: false
    }),
    (0, class_validator_1.IsEnum)(['NEW', 'USED', 'REFURBISHED']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProductDTO.prototype, "condition", void 0);


/***/ }),
/* 109 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProductDTO = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(30);
const class_transformer_1 = __webpack_require__(69);
const create_product_dto_1 = __webpack_require__(108);
class UpdateProductDTO {
}
exports.UpdateProductDTO = UpdateProductDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product name',
        example: 'iPhone 15 Pro Max - Updated',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product description',
        example: 'Updated description for iPhone 15 Pro Max',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of product image URLs',
        example: ['https://example.com/updated-image1.jpg'],
        type: [String],
        required: false
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1, { message: 'At least one image is required' }),
    (0, class_validator_1.IsUrl)({}, { each: true, message: 'Each image must be a valid URL' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateProductDTO.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product video URL',
        example: 'https://example.com/updated-video.mp4',
        required: false
    }),
    (0, class_validator_1.IsUrl)({}, { message: 'Video must be a valid URL' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductDTO.prototype, "video", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product price',
        example: 160000,
        minimum: 0,
        required: false
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateProductDTO.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Discounted price (must be less than regular price)',
        example: 150000,
        minimum: 0,
        required: false
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateProductDTO.prototype, "discountPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Currency code',
        example: 'PKR',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductDTO.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Stock Keeping Unit (SKU)',
        example: 'IPH15PM-256-BLK-UPDATED',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductDTO.prototype, "sku", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Available stock quantity',
        example: 75,
        minimum: 0,
        required: false
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateProductDTO.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product unit',
        example: 'piece',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductDTO.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product status',
        enum: ['ACTIVE', 'INACTIVE', 'OUT_OF_STOCK'],
        required: false
    }),
    (0, class_validator_1.IsEnum)(['ACTIVE', 'INACTIVE', 'OUT_OF_STOCK']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product tags for search and categorization',
        example: ['smartphone', 'apple', 'premium', 'updated'],
        type: [String],
        required: false
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateProductDTO.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is this a featured product?',
        example: true,
        required: false
    }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateProductDTO.prototype, "isFeatured", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product weight in grams',
        example: 250,
        minimum: 0,
        required: false
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateProductDTO.prototype, "weight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product dimensions',
        type: create_product_dto_1.ProductDimensionsDto,
        required: false
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => create_product_dto_1.ProductDimensionsDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof create_product_dto_1.ProductDimensionsDto !== "undefined" && create_product_dto_1.ProductDimensionsDto) === "function" ? _a : Object)
], UpdateProductDTO.prototype, "dimensions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product warranty information',
        example: '2 years manufacturer warranty',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductDTO.prototype, "warranty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product brand',
        example: 'Apple',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductDTO.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product model',
        example: 'iPhone 15 Pro Max',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductDTO.prototype, "model", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product color',
        example: 'Natural Titanium',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductDTO.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product size',
        example: '512GB',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductDTO.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product material',
        example: 'Titanium',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductDTO.prototype, "material", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Product condition',
        enum: ['NEW', 'USED', 'REFURBISHED'],
        required: false
    }),
    (0, class_validator_1.IsEnum)(['NEW', 'USED', 'REFURBISHED']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductDTO.prototype, "condition", void 0);


/***/ }),
/* 110 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductQueryDTO = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(30);
const class_transformer_1 = __webpack_require__(69);
class ProductQueryDTO {
}
exports.ProductQueryDTO = ProductQueryDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by shop ID',
        example: 'shop_123',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductQueryDTO.prototype, "shopId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by shop category ID',
        example: 'cat_123',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductQueryDTO.prototype, "shopCategoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by product category ID',
        example: 'cat_456',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductQueryDTO.prototype, "productCategoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by subcategory ID',
        example: 'cat_789',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductQueryDTO.prototype, "subCategoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by product status',
        enum: ['ACTIVE', 'INACTIVE', 'OUT_OF_STOCK'],
        required: false
    }),
    (0, class_validator_1.IsEnum)(['ACTIVE', 'INACTIVE', 'OUT_OF_STOCK']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductQueryDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Search by product name, description, or tags',
        example: 'iPhone',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductQueryDTO.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Minimum price filter',
        example: 1000,
        minimum: 0,
        required: false
    }),
    (0, class_transformer_1.Transform)(({ value }) => parseFloat(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ProductQueryDTO.prototype, "minPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Maximum price filter',
        example: 200000,
        minimum: 0,
        required: false
    }),
    (0, class_transformer_1.Transform)(({ value }) => parseFloat(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ProductQueryDTO.prototype, "maxPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter products created from this date (ISO string)',
        example: '2025-01-01T00:00:00.000Z',
        required: false
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductQueryDTO.prototype, "createdFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter products created until this date (ISO string)',
        example: '2025-12-31T23:59:59.999Z',
        required: false
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductQueryDTO.prototype, "createdTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Sort by field',
        enum: ['price', 'createdAt', 'updatedAt', 'stock', 'name', 'rating', 'soldCount', 'viewCount'],
        default: 'createdAt',
        required: false
    }),
    (0, class_validator_1.IsEnum)(['price', 'createdAt', 'updatedAt', 'stock', 'name', 'rating', 'soldCount', 'viewCount']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductQueryDTO.prototype, "sortBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Sort order',
        enum: ['asc', 'desc'],
        default: 'desc',
        required: false
    }),
    (0, class_validator_1.IsEnum)(['asc', 'desc']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductQueryDTO.prototype, "sortOrder", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of products to return per page',
        example: 10,
        minimum: 1,
        maximum: 100,
        default: 10,
        required: false
    }),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ProductQueryDTO.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Number of products to skip for pagination',
        example: 0,
        minimum: 0,
        default: 0,
        required: false
    }),
    (0, class_transformer_1.Transform)(({ value }) => parseInt(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ProductQueryDTO.prototype, "offset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by featured products only',
        example: true,
        required: false
    }),
    (0, class_transformer_1.Transform)(({ value }) => value === 'true'),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], ProductQueryDTO.prototype, "isFeatured", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by product condition',
        enum: ['NEW', 'USED', 'REFURBISHED'],
        required: false
    }),
    (0, class_validator_1.IsEnum)(['NEW', 'USED', 'REFURBISHED']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductQueryDTO.prototype, "condition", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by product brand',
        example: 'Apple',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductQueryDTO.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by product color',
        example: 'Black',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductQueryDTO.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Filter by minimum rating',
        example: 4.0,
        minimum: 0,
        maximum: 5,
        required: false
    }),
    (0, class_transformer_1.Transform)(({ value }) => parseFloat(value)),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(5),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ProductQueryDTO.prototype, "minRating", void 0);


/***/ }),
/* 111 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiResponseDTO = exports.ProductListResponseDTO = exports.ProductResponseDTO = exports.CategoryResponseDTO = exports.ShopResponseDTO = exports.ShopOwnerResponseDTO = exports.ProductDimensionsResponseDTO = void 0;
const swagger_1 = __webpack_require__(3);
class ProductDimensionsResponseDTO {
}
exports.ProductDimensionsResponseDTO = ProductDimensionsResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product length in cm' }),
    __metadata("design:type", Number)
], ProductDimensionsResponseDTO.prototype, "length", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product width in cm' }),
    __metadata("design:type", Number)
], ProductDimensionsResponseDTO.prototype, "width", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product height in cm' }),
    __metadata("design:type", Number)
], ProductDimensionsResponseDTO.prototype, "height", void 0);
class ShopOwnerResponseDTO {
}
exports.ShopOwnerResponseDTO = ShopOwnerResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID' }),
    __metadata("design:type", String)
], ShopOwnerResponseDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User role', enum: ['normal', 'seller', 'admin'] }),
    __metadata("design:type", String)
], ShopOwnerResponseDTO.prototype, "userRole", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Full name of the user' }),
    __metadata("design:type", String)
], ShopOwnerResponseDTO.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email address' }),
    __metadata("design:type", String)
], ShopOwnerResponseDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Phone number' }),
    __metadata("design:type", String)
], ShopOwnerResponseDTO.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User status', enum: ['active', 'inactive', 'suspended'] }),
    __metadata("design:type", String)
], ShopOwnerResponseDTO.prototype, "userStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Profile picture URL' }),
    __metadata("design:type", String)
], ShopOwnerResponseDTO.prototype, "profilePic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], ShopOwnerResponseDTO.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], ShopOwnerResponseDTO.prototype, "updatedAt", void 0);
class ShopResponseDTO {
}
exports.ShopResponseDTO = ShopResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shop ID' }),
    __metadata("design:type", String)
], ShopResponseDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shop name' }),
    __metadata("design:type", String)
], ShopResponseDTO.prototype, "shopName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shop owner ID' }),
    __metadata("design:type", String)
], ShopResponseDTO.prototype, "ownerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shop owner details', type: ShopOwnerResponseDTO }),
    __metadata("design:type", ShopOwnerResponseDTO)
], ShopResponseDTO.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Village details' }),
    __metadata("design:type", Object)
], ShopResponseDTO.prototype, "villageId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category details' }),
    __metadata("design:type", Object)
], ShopResponseDTO.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL of the shop profile image' }),
    __metadata("design:type", String)
], ShopResponseDTO.prototype, "profileImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL of the shop cover image' }),
    __metadata("design:type", String)
], ShopResponseDTO.prototype, "coverImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Description of the shop' }),
    __metadata("design:type", String)
], ShopResponseDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of likes for the shop' }),
    __metadata("design:type", Number)
], ShopResponseDTO.prototype, "likes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of user IDs following the shop' }),
    __metadata("design:type", Array)
], ShopResponseDTO.prototype, "followers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of product IDs sold by the shop' }),
    __metadata("design:type", Array)
], ShopResponseDTO.prototype, "products", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shop rating' }),
    __metadata("design:type", Number)
], ShopResponseDTO.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of review IDs for the shop' }),
    __metadata("design:type", Array)
], ShopResponseDTO.prototype, "reviews", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is the shop verified?' }),
    __metadata("design:type", Boolean)
], ShopResponseDTO.prototype, "isVerified", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status of the shop', enum: ['active', 'suspended', 'closed'] }),
    __metadata("design:type", String)
], ShopResponseDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], ShopResponseDTO.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], ShopResponseDTO.prototype, "updatedAt", void 0);
class CategoryResponseDTO {
}
exports.CategoryResponseDTO = CategoryResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category ID' }),
    __metadata("design:type", String)
], CategoryResponseDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category name' }),
    __metadata("design:type", String)
], CategoryResponseDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category type' }),
    __metadata("design:type", String)
], CategoryResponseDTO.prototype, "type", void 0);
class ProductResponseDTO {
}
exports.ProductResponseDTO = ProductResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product ID' }),
    __metadata("design:type", String)
], ProductResponseDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shop ID' }),
    __metadata("design:type", String)
], ProductResponseDTO.prototype, "shopId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shop details', type: ShopResponseDTO }),
    __metadata("design:type", ShopResponseDTO)
], ProductResponseDTO.prototype, "shop", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shop category ID' }),
    __metadata("design:type", String)
], ProductResponseDTO.prototype, "shopCategoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shop category details', type: CategoryResponseDTO }),
    __metadata("design:type", CategoryResponseDTO)
], ProductResponseDTO.prototype, "shopCategory", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product category ID' }),
    __metadata("design:type", String)
], ProductResponseDTO.prototype, "productCategoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product category details', type: CategoryResponseDTO }),
    __metadata("design:type", CategoryResponseDTO)
], ProductResponseDTO.prototype, "productCategory", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subcategory ID', required: false }),
    __metadata("design:type", String)
], ProductResponseDTO.prototype, "subCategoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Subcategory details', type: CategoryResponseDTO, required: false }),
    __metadata("design:type", CategoryResponseDTO)
], ProductResponseDTO.prototype, "subCategory", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product name' }),
    __metadata("design:type", String)
], ProductResponseDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product description' }),
    __metadata("design:type", String)
], ProductResponseDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of product image URLs', type: [String] }),
    __metadata("design:type", Array)
], ProductResponseDTO.prototype, "images", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product video URL' }),
    __metadata("design:type", String)
], ProductResponseDTO.prototype, "video", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product price' }),
    __metadata("design:type", Number)
], ProductResponseDTO.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Discounted price' }),
    __metadata("design:type", Number)
], ProductResponseDTO.prototype, "discountPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code' }),
    __metadata("design:type", String)
], ProductResponseDTO.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Stock Keeping Unit' }),
    __metadata("design:type", String)
], ProductResponseDTO.prototype, "sku", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Available stock quantity' }),
    __metadata("design:type", Number)
], ProductResponseDTO.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product unit' }),
    __metadata("design:type", String)
], ProductResponseDTO.prototype, "unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product status', enum: ['ACTIVE', 'INACTIVE', 'OUT_OF_STOCK'] }),
    __metadata("design:type", String)
], ProductResponseDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product tags', type: [String] }),
    __metadata("design:type", Array)
], ProductResponseDTO.prototype, "tags", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Is this a featured product?' }),
    __metadata("design:type", Boolean)
], ProductResponseDTO.prototype, "isFeatured", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product weight in grams' }),
    __metadata("design:type", Number)
], ProductResponseDTO.prototype, "weight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product dimensions', type: ProductDimensionsResponseDTO }),
    __metadata("design:type", ProductDimensionsResponseDTO)
], ProductResponseDTO.prototype, "dimensions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product warranty information' }),
    __metadata("design:type", String)
], ProductResponseDTO.prototype, "warranty", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product brand' }),
    __metadata("design:type", String)
], ProductResponseDTO.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product model' }),
    __metadata("design:type", String)
], ProductResponseDTO.prototype, "model", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product color' }),
    __metadata("design:type", String)
], ProductResponseDTO.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product size' }),
    __metadata("design:type", String)
], ProductResponseDTO.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product material' }),
    __metadata("design:type", String)
], ProductResponseDTO.prototype, "material", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product condition', enum: ['NEW', 'USED', 'REFURBISHED'] }),
    __metadata("design:type", String)
], ProductResponseDTO.prototype, "condition", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Product rating' }),
    __metadata("design:type", Number)
], ProductResponseDTO.prototype, "rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of reviews' }),
    __metadata("design:type", Number)
], ProductResponseDTO.prototype, "reviewCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of views' }),
    __metadata("design:type", Number)
], ProductResponseDTO.prototype, "viewCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of sold items' }),
    __metadata("design:type", Number)
], ProductResponseDTO.prototype, "soldCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], ProductResponseDTO.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], ProductResponseDTO.prototype, "updatedAt", void 0);
class ProductListResponseDTO {
}
exports.ProductListResponseDTO = ProductListResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Array of products', type: [ProductResponseDTO] }),
    __metadata("design:type", Array)
], ProductListResponseDTO.prototype, "products", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of products' }),
    __metadata("design:type", Number)
], ProductListResponseDTO.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Current page number' }),
    __metadata("design:type", Number)
], ProductListResponseDTO.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of products per page' }),
    __metadata("design:type", Number)
], ProductListResponseDTO.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total number of pages' }),
    __metadata("design:type", Number)
], ProductListResponseDTO.prototype, "totalPages", void 0);
class ApiResponseDTO {
}
exports.ApiResponseDTO = ApiResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success status' }),
    __metadata("design:type", Boolean)
], ApiResponseDTO.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response message' }),
    __metadata("design:type", String)
], ApiResponseDTO.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Response data' }),
    __metadata("design:type", Object)
], ApiResponseDTO.prototype, "data", void 0);


/***/ }),
/* 112 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Product = exports.ProductSchema = void 0;
const mongoose_1 = __webpack_require__(14);
const utils_1 = __webpack_require__(49);
exports.ProductSchema = new mongoose_1.Schema({
    _id: { type: String, default: utils_1.generateStringId },
    shopId: { type: String, required: true, ref: 'Shop' },
    shopCategoryId: { type: String, required: true, ref: 'Category' },
    productCategoryId: { type: String, required: true, ref: 'Category' },
    subCategoryId: { type: String, ref: 'Category', default: null },
    name: { type: String, required: true },
    description: { type: String, default: '' },
    images: [{ type: String, required: true }],
    video: { type: String, default: '' },
    price: { type: Number, required: true, min: 0 },
    discountPrice: { type: Number, min: 0, default: null },
    currency: { type: String, default: 'PKR' },
    sku: { type: String, unique: true, sparse: true },
    stock: { type: Number, required: true, default: 0, min: 0 },
    unit: { type: String, default: 'piece' },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE', 'OUT_OF_STOCK'],
        default: 'ACTIVE'
    },
    tags: [{ type: String }],
    isFeatured: { type: Boolean, default: false },
    weight: { type: Number, default: 0 },
    dimensions: {
        length: { type: Number, default: 0 },
        width: { type: Number, default: 0 },
        height: { type: Number, default: 0 }
    },
    warranty: { type: String, default: '' },
    brand: { type: String, default: '' },
    model: { type: String, default: '' },
    color: { type: String, default: '' },
    size: { type: String, default: '' },
    material: { type: String, default: '' },
    condition: {
        type: String,
        enum: ['NEW', 'USED', 'REFURBISHED'],
        default: 'NEW'
    },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviewCount: { type: Number, default: 0 },
    viewCount: { type: Number, default: 0 },
    soldCount: { type: Number, default: 0 },
}, {
    collection: 'products',
    timestamps: true,
});
const Product = (0, mongoose_1.model)('Product', exports.ProductSchema);
exports.Product = Product;
exports.ProductSchema.pre('save', function (next) {
    const product = this;
    if (product.discountPrice && product.discountPrice >= product.price) {
        return next(new Error('Discount price must be less than regular price'));
    }
    if (product.stock === 0 && product.status === 'ACTIVE') {
        product.status = 'OUT_OF_STOCK';
    }
    else if (product.stock > 0 && product.status === 'OUT_OF_STOCK') {
        product.status = 'ACTIVE';
    }
    next();
});
exports.ProductSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
exports.ProductSchema.index({ shopId: 1 });
exports.ProductSchema.index({ shopCategoryId: 1 });
exports.ProductSchema.index({ productCategoryId: 1 });
exports.ProductSchema.index({ subCategoryId: 1 });
exports.ProductSchema.index({ price: 1 });
exports.ProductSchema.index({ createdAt: -1 });
exports.ProductSchema.index({ status: 1 });
exports.ProductSchema.index({ name: 'text', description: 'text', tags: 'text' });
exports.ProductSchema.index({ sku: 1 }, { unique: true, sparse: true });
exports.ProductSchema.index({ isFeatured: 1 });
exports.ProductSchema.index({ rating: -1 });
exports.ProductSchema.index({ soldCount: -1 });
exports.ProductSchema.index({ viewCount: -1 });


/***/ }),
/* 113 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatModule = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(15);
const chat_controller_1 = __webpack_require__(114);
const chat_service_1 = __webpack_require__(115);
const chat_gateway_1 = __webpack_require__(116);
const chat_room_schema_1 = __webpack_require__(122);
const message_schema_1 = __webpack_require__(123);
const user_schema_1 = __webpack_require__(48);
const shop_schema_1 = __webpack_require__(95);
let ChatModule = exports.ChatModule = class ChatModule {
};
exports.ChatModule = ChatModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'ChatRoom', schema: chat_room_schema_1.ChatRoomSchema },
                { name: 'Message', schema: message_schema_1.MessageSchema },
                { name: 'User', schema: user_schema_1.UserSchema },
                { name: 'Shop', schema: shop_schema_1.ShopSchema },
            ]),
        ],
        controllers: [chat_controller_1.ChatController],
        providers: [chat_service_1.ChatService, chat_gateway_1.ChatGateway],
        exports: [chat_service_1.ChatService],
    })
], ChatModule);


/***/ }),
/* 114 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(3);
const chat_service_1 = __webpack_require__(115);
const create_chat_room_dto_1 = __webpack_require__(120);
const send_message_dto_1 = __webpack_require__(119);
const chat_response_dto_1 = __webpack_require__(121);
const jwt_auth_guard_1 = __webpack_require__(36);
let ChatController = exports.ChatController = class ChatController {
    constructor(chatService) {
        this.chatService = chatService;
    }
    async createChatRoom(createChatRoomDto, req) {
        try {
            const result = await this.chatService.createChatRoom(createChatRoomDto);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message || 'Failed to create chat room', error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getChatRooms(req) {
        try {
            const userId = req.user.id;
            const chatRooms = await this.chatService.getChatRooms(userId);
            return chatRooms;
        }
        catch (error) {
            throw new common_1.HttpException(error.message || 'Failed to get chat rooms', error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async sendMessage(sendMessageDto, req) {
        try {
            if (req.user.id !== sendMessageDto.senderId) {
                throw new common_1.HttpException('Unauthorized - Invalid sender', common_1.HttpStatus.FORBIDDEN);
            }
            const result = await this.chatService.sendMessage(sendMessageDto);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message || 'Failed to send message', error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getMessages(chatRoomId, req) {
        try {
            const userId = req.user.id;
            const messages = await this.chatService.getMessages(chatRoomId, userId);
            return messages;
        }
        catch (error) {
            throw new common_1.HttpException(error.message || 'Failed to get messages', error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async markMessagesAsRead(chatRoomId, req) {
        try {
            const userId = req.user.id;
            const result = await this.chatService.markMessagesAsRead(chatRoomId, userId);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message || 'Failed to mark messages as read', error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteMessage(messageId, req) {
        try {
            const userId = req.user.id;
            const result = await this.chatService.deleteMessage(messageId, userId);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message || 'Failed to delete message', error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getUnreadCount(req) {
        try {
            const userId = req.user.id;
            const unreadCount = await this.chatService.getUnreadCount(userId);
            return { unreadCount };
        }
        catch (error) {
            throw new common_1.HttpException(error.message || 'Failed to get unread count', error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deactivateChatRoom(chatRoomId, req) {
        try {
            const userId = req.user.id;
            const result = await this.chatService.deactivateChatRoom(chatRoomId, userId);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message || 'Failed to deactivate chat room', error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async testEndpoint() {
        return { message: 'Chat module is working!' };
    }
    async getOrCreateChatRoom(body, req) {
        try {
            const { buyerId, sellerId, shopId } = body;
            if (req.user.id !== buyerId && req.user.id !== sellerId) {
                throw new common_1.HttpException('Unauthorized access', common_1.HttpStatus.FORBIDDEN);
            }
            const chatRoomId = await this.chatService.getOrCreateChatRoom(buyerId, sellerId, shopId);
            return { chatRoomId };
        }
        catch (error) {
            throw new common_1.HttpException(error.message || 'Failed to get or create chat room', error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new chat room between buyer and seller' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Chat room created successfully',
        type: chat_response_dto_1.CreateChatRoomResponseDto
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - Invalid data' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User or shop not found' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'Chat room already exists' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_chat_room_dto_1.CreateChatRoomDto !== "undefined" && create_chat_room_dto_1.CreateChatRoomDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ChatController.prototype, "createChatRoom", null);
__decorate([
    (0, common_1.Get)('list'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all chat rooms for the authenticated user' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Chat rooms retrieved successfully',
        type: [chat_response_dto_1.ChatRoomResponseDto]
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], ChatController.prototype, "getChatRooms", null);
__decorate([
    (0, common_1.Post)('message'),
    (0, swagger_1.ApiOperation)({ summary: 'Send a message in a chat room' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Message sent successfully',
        type: chat_response_dto_1.SendMessageResponseDto
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - Invalid data' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Chat room not found' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof send_message_dto_1.SendMessageDto !== "undefined" && send_message_dto_1.SendMessageDto) === "function" ? _e : Object, Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], ChatController.prototype, "sendMessage", null);
__decorate([
    (0, common_1.Get)('messages/:chatRoomId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all messages in a chat room' }),
    (0, swagger_1.ApiParam)({ name: 'chatRoomId', description: 'Chat room ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Messages retrieved successfully',
        type: [chat_response_dto_1.MessageResponseDto]
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Chat room not found' }),
    __param(0, (0, common_1.Param)('chatRoomId')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ChatController.prototype, "getMessages", null);
__decorate([
    (0, common_1.Post)('messages/:chatRoomId/read'),
    (0, swagger_1.ApiOperation)({ summary: 'Mark messages as read in a chat room' }),
    (0, swagger_1.ApiParam)({ name: 'chatRoomId', description: 'Chat room ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Messages marked as read' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Chat room not found' }),
    __param(0, (0, common_1.Param)('chatRoomId')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], ChatController.prototype, "markMessagesAsRead", null);
__decorate([
    (0, common_1.Post)('message/:messageId/delete'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a message' }),
    (0, swagger_1.ApiParam)({ name: 'messageId', description: 'Message ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Message deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Message not found' }),
    __param(0, (0, common_1.Param)('messageId')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], ChatController.prototype, "deleteMessage", null);
__decorate([
    (0, common_1.Get)('unread-count'),
    (0, swagger_1.ApiOperation)({ summary: 'Get unread message count for the authenticated user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Unread count retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], ChatController.prototype, "getUnreadCount", null);
__decorate([
    (0, common_1.Post)('room/:chatRoomId/deactivate'),
    (0, swagger_1.ApiOperation)({ summary: 'Deactivate a chat room' }),
    (0, swagger_1.ApiParam)({ name: 'chatRoomId', description: 'Chat room ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Chat room deactivated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Chat room not found' }),
    __param(0, (0, common_1.Param)('chatRoomId')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], ChatController.prototype, "deactivateChatRoom", null);
__decorate([
    (0, common_1.Get)('test'),
    (0, swagger_1.ApiOperation)({ summary: 'Test endpoint to verify chat module is loaded' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Chat module is working' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_m = typeof Promise !== "undefined" && Promise) === "function" ? _m : Object)
], ChatController.prototype, "testEndpoint", null);
__decorate([
    (0, common_1.Post)('get-or-create'),
    (0, swagger_1.ApiOperation)({ summary: 'Get or create chat room for buyer and seller' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Chat room ID retrieved or created',
        schema: { type: 'object', properties: { chatRoomId: { type: 'string' } } }
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - Invalid data' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User or shop not found' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], ChatController.prototype, "getOrCreateChatRoom", null);
exports.ChatController = ChatController = __decorate([
    (0, swagger_1.ApiTags)('Chat'),
    (0, common_1.Controller)('chat'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [typeof (_a = typeof chat_service_1.ChatService !== "undefined" && chat_service_1.ChatService) === "function" ? _a : Object])
], ChatController);


/***/ }),
/* 115 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatService = void 0;
const common_1 = __webpack_require__(1);
const mongoose_1 = __webpack_require__(15);
const mongoose_2 = __webpack_require__(14);
const chat_gateway_1 = __webpack_require__(116);
let ChatService = exports.ChatService = class ChatService {
    constructor(chatRoomModel, messageModel, userModel, shopModel, chatGateway) {
        this.chatRoomModel = chatRoomModel;
        this.messageModel = messageModel;
        this.userModel = userModel;
        this.shopModel = shopModel;
        this.chatGateway = chatGateway;
    }
    async createChatRoom(createChatRoomDto) {
        const { buyerId, sellerId, shopId } = createChatRoomDto;
        if (buyerId === sellerId) {
            throw new common_1.BadRequestException('Buyer and seller cannot be the same user');
        }
        const existingChatRoom = await this.chatRoomModel.findOne({
            buyerId,
            sellerId,
            shopId,
            isActive: true
        });
        if (existingChatRoom) {
            return {
                success: true,
                chatRoomId: existingChatRoom._id,
                message: 'Chat room already exists'
            };
        }
        const [buyer, seller, shop] = await Promise.all([
            this.userModel.findById(buyerId),
            this.userModel.findById(sellerId),
            this.shopModel.findById(shopId)
        ]);
        if (!buyer) {
            throw new common_1.NotFoundException('Buyer not found');
        }
        if (!seller) {
            throw new common_1.NotFoundException('Seller not found');
        }
        if (!shop) {
            throw new common_1.NotFoundException('Shop not found');
        }
        if (shop.ownerId !== sellerId) {
            throw new common_1.BadRequestException('Seller does not own this shop');
        }
        const newChatRoom = new this.chatRoomModel({
            buyerId,
            sellerId,
            shopId,
            participants: [buyerId, sellerId],
            unreadCount: {
                buyer: 0,
                seller: 0
            },
            isActive: true
        });
        const savedChatRoom = await newChatRoom.save();
        return {
            success: true,
            chatRoomId: savedChatRoom._id,
            message: 'Chat room created successfully'
        };
    }
    async getChatRooms(userId) {
        const chatRooms = await this.chatRoomModel
            .find({
            $or: [{ buyerId: userId }, { sellerId: userId }],
            isActive: true
        })
            .populate('buyerId', 'name fullName profilePic')
            .populate('sellerId', 'name fullName profilePic')
            .populate('shopId', 'shopName profileImage')
            .sort({ updatedAt: -1 })
            .exec();
        return chatRooms.map(room => {
            const roomObj = room.toObject();
            return {
                _id: roomObj._id,
                buyerId: roomObj.buyerId,
                sellerId: roomObj.sellerId,
                shopId: roomObj.shopId,
                lastMessage: roomObj.lastMessage,
                unreadCount: roomObj.unreadCount,
                isActive: roomObj.isActive,
                participants: roomObj.participants,
                createdAt: roomObj.createdAt,
                updatedAt: roomObj.updatedAt,
                buyer: roomObj.buyerId,
                seller: roomObj.sellerId,
                shop: roomObj.shopId
            };
        });
    }
    async getOrCreateChatRoom(buyerId, sellerId, shopId) {
        const createDto = { buyerId, sellerId, shopId };
        const result = await this.createChatRoom(createDto);
        return result.chatRoomId;
    }
    async sendMessage(sendMessageDto) {
        const { chatRoomId, senderId, receiverId, messageType, messageContent, mediaUrl, replyTo, metadata } = sendMessageDto;
        const chatRoom = await this.chatRoomModel.findById(chatRoomId);
        if (!chatRoom) {
            throw new common_1.NotFoundException('Chat room not found');
        }
        if (!chatRoom.participants.includes(senderId)) {
            throw new common_1.BadRequestException('User is not a participant in this chat room');
        }
        if (!chatRoom.participants.includes(receiverId)) {
            throw new common_1.BadRequestException('Receiver is not a participant in this chat room');
        }
        const newMessage = new this.messageModel({
            chatRoomId,
            senderId,
            receiverId,
            messageType,
            messageContent,
            mediaUrl,
            replyTo,
            metadata,
            isRead: false
        });
        const savedMessage = await newMessage.save();
        const isFromBuyer = chatRoom.buyerId === senderId;
        await this.chatRoomModel.findByIdAndUpdate(chatRoomId, {
            lastMessage: {
                content: messageContent,
                messageType,
                senderId,
                timestamp: new Date()
            },
            $inc: {
                [`unreadCount.${isFromBuyer ? 'seller' : 'buyer'}`]: 1
            }
        });
        try {
            await this.chatGateway.emitNewMessage(chatRoomId, {
                _id: savedMessage._id,
                chatRoomId: savedMessage.chatRoomId,
                senderId: savedMessage.senderId,
                receiverId: savedMessage.receiverId,
                messageType: savedMessage.messageType,
                messageContent: savedMessage.messageContent,
                mediaUrl: savedMessage.mediaUrl,
                isRead: savedMessage.isRead,
                createdAt: savedMessage.createdAt,
                updatedAt: savedMessage.updatedAt,
            });
            await this.chatGateway.emitChatRoomUpdate(senderId, { chatRoomId, action: 'message_sent' });
            await this.chatGateway.emitChatRoomUpdate(receiverId, { chatRoomId, action: 'message_received' });
            const updatedChatRoom = await this.chatRoomModel.findById(chatRoomId);
            if (updatedChatRoom) {
                const receiverUnreadCount = isFromBuyer ? updatedChatRoom.unreadCount.seller : updatedChatRoom.unreadCount.buyer;
                await this.chatGateway.emitUnreadCountUpdate(receiverId, receiverUnreadCount);
            }
        }
        catch (error) {
            console.error('Error emitting WebSocket events:', error);
        }
        return {
            success: true,
            messageId: savedMessage._id,
            message: 'Message sent successfully'
        };
    }
    async getMessages(chatRoomId, userId) {
        const chatRoom = await this.chatRoomModel.findById(chatRoomId);
        if (!chatRoom) {
            throw new common_1.NotFoundException('Chat room not found');
        }
        if (!chatRoom.participants.includes(userId)) {
            throw new common_1.BadRequestException('User is not a participant in this chat room');
        }
        const messages = await this.messageModel
            .find({
            chatRoomId,
            isDeleted: false
        })
            .populate('senderId', 'name fullName profilePic')
            .populate('receiverId', 'name fullName profilePic')
            .sort({ createdAt: -1 })
            .exec();
        return messages.map(msg => {
            const msgObj = msg.toObject();
            return {
                _id: msgObj._id,
                chatRoomId: msgObj.chatRoomId,
                senderId: msgObj.senderId,
                receiverId: msgObj.receiverId,
                messageType: msgObj.messageType,
                messageContent: msgObj.messageContent,
                mediaUrl: msgObj.mediaUrl,
                isRead: msgObj.isRead,
                readAt: msgObj.readAt,
                isDeleted: msgObj.isDeleted,
                deletedAt: msgObj.deletedAt,
                replyTo: msgObj.replyTo,
                metadata: msgObj.metadata,
                createdAt: msgObj.createdAt,
                updatedAt: msgObj.updatedAt,
                sender: msgObj.senderId,
                receiver: msgObj.receiverId
            };
        });
    }
    async markMessagesAsRead(chatRoomId, userId) {
        const chatRoom = await this.chatRoomModel.findById(chatRoomId);
        if (!chatRoom) {
            throw new common_1.NotFoundException('Chat room not found');
        }
        if (!chatRoom.participants.includes(userId)) {
            throw new common_1.BadRequestException('User is not a participant in this chat room');
        }
        await this.messageModel.updateMany({
            chatRoomId,
            receiverId: userId,
            isRead: false
        }, {
            isRead: true,
            readAt: new Date()
        });
        const isBuyer = chatRoom.buyerId === userId;
        await this.chatRoomModel.findByIdAndUpdate(chatRoomId, {
            [`unreadCount.${isBuyer ? 'buyer' : 'seller'}`]: 0
        });
        try {
            await this.chatGateway.emitChatRoomUpdate(userId, { chatRoomId, action: 'messages_read' });
            await this.chatGateway.emitUnreadCountUpdate(userId, 0);
        }
        catch (error) {
            console.error('Error emitting WebSocket events for mark as read:', error);
        }
        return {
            success: true,
            message: 'Messages marked as read'
        };
    }
    async deleteMessage(messageId, userId) {
        const message = await this.messageModel.findById(messageId);
        if (!message) {
            throw new common_1.NotFoundException('Message not found');
        }
        if (message.senderId !== userId) {
            throw new common_1.BadRequestException('You can only delete your own messages');
        }
        await this.messageModel.findByIdAndUpdate(messageId, {
            isDeleted: true,
            deletedAt: new Date()
        });
        return {
            success: true,
            message: 'Message deleted successfully'
        };
    }
    async getUnreadCount(userId) {
        const chatRooms = await this.chatRoomModel.find({
            $or: [{ buyerId: userId }, { sellerId: userId }],
            isActive: true
        });
        let totalUnread = 0;
        for (const room of chatRooms) {
            const isBuyer = room.buyerId === userId;
            totalUnread += isBuyer ? room.unreadCount.buyer : room.unreadCount.seller;
        }
        return totalUnread;
    }
    async deactivateChatRoom(chatRoomId, userId) {
        const chatRoom = await this.chatRoomModel.findById(chatRoomId);
        if (!chatRoom) {
            throw new common_1.NotFoundException('Chat room not found');
        }
        if (!chatRoom.participants.includes(userId)) {
            throw new common_1.BadRequestException('User is not a participant in this chat room');
        }
        await this.chatRoomModel.findByIdAndUpdate(chatRoomId, {
            isActive: false
        });
        return {
            success: true,
            message: 'Chat room deactivated'
        };
    }
};
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('ChatRoom')),
    __param(1, (0, mongoose_1.InjectModel)('Message')),
    __param(2, (0, mongoose_1.InjectModel)('User')),
    __param(3, (0, mongoose_1.InjectModel)('Shop')),
    __param(4, (0, common_1.Inject)((0, common_1.forwardRef)(() => chat_gateway_1.ChatGateway))),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object, typeof (_d = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _d : Object, typeof (_e = typeof chat_gateway_1.ChatGateway !== "undefined" && chat_gateway_1.ChatGateway) === "function" ? _e : Object])
], ChatService);


/***/ }),
/* 116 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatGateway = void 0;
const websockets_1 = __webpack_require__(117);
const socket_io_1 = __webpack_require__(118);
const jwt_1 = __webpack_require__(9);
const send_message_dto_1 = __webpack_require__(119);
let ChatGateway = exports.ChatGateway = class ChatGateway {
    constructor(jwtService) {
        this.jwtService = jwtService;
        this.connectedUsers = new Map();
        console.log('🔧 ChatGateway initialized with JWT service');
        console.log('🔧 JWT_SECRET at initialization:', process.env.JWT_SECRET ? `Yes (length: ${process.env.JWT_SECRET.length})` : 'No');
    }
    async handleConnection(client) {
        console.log('🚀 WebSocket connection attempt started');
        try {
            const authToken = client.handshake.auth?.token;
            const headerToken = client.handshake.headers?.authorization;
            console.log('🔍 Raw auth token from handshake:', authToken);
            console.log('🔍 Raw header authorization:', headerToken);
            let token = authToken || (headerToken ? headerToken.replace('Bearer ', '') : null);
            if (token?.startsWith('Bearer ')) {
                console.log('🔧 Removing Bearer prefix from token');
                token = token.substring(7);
            }
            console.log('🔐 WebSocket connection attempt:');
            console.log('🔐 Final token length:', token?.length || 0);
            console.log('🔐 Final token preview:', token ? `${token.substring(0, 20)}...` : 'No token');
            console.log('🔐 Handshake auth object:', JSON.stringify(client.handshake.auth));
            console.log('🔐 JWT_SECRET configured:', process.env.JWT_SECRET ? `Yes (length: ${process.env.JWT_SECRET.length})` : 'No');
            console.log('🔐 JWT_SECRET preview:', process.env.JWT_SECRET ? `${process.env.JWT_SECRET.substring(0, 20)}...` : 'Not set');
            if (!process.env.JWT_SECRET) {
                console.error('❌ JWT_SECRET environment variable is not set!');
                console.error('❌ This will cause JWT verification to fail');
                client.disconnect();
                return;
            }
            if (!token) {
                console.log('❌ No token provided in WebSocket connection');
                console.log('❌ Auth object:', client.handshake.auth);
                console.log('❌ Headers authorization:', client.handshake.headers?.authorization);
                client.disconnect();
                return;
            }
            try {
                console.log('🔐 Attempting JWT verification...');
                console.log('🔐 JWT Service instance:', !!this.jwtService);
                console.log('🔐 Token to verify (first 50 chars):', token.substring(0, 50) + '...');
                const payload = this.jwtService.verify(token, {
                    secret: process.env.JWT_SECRET
                });
                console.log('🔐 JWT payload verified successfully:', {
                    id: payload?.id,
                    email: payload?.email,
                    userRole: payload?.userRole,
                    iat: payload?.iat,
                    exp: payload?.exp
                });
                if (!payload || !payload.id) {
                    console.log('❌ Invalid JWT payload - missing id field');
                    console.log('❌ Payload received:', payload);
                    client.disconnect();
                    return;
                }
                client.userId = payload.id;
                this.connectedUsers.set(client.userId, client.id);
                await client.join(`user_${client.userId}`);
                console.log(`✅ User ${client.userId} connected with socket ${client.id}`);
                client.emit('connection_confirmed', { userId: client.userId });
                console.log('📤 Sent connection_confirmed event to client');
            }
            catch (jwtError) {
                console.error('❌ JWT verification failed:', jwtError);
                console.error('❌ JWT error details:', jwtError.message);
                console.error('❌ JWT error name:', jwtError.name);
                console.error('❌ Current JWT_SECRET length:', process.env.JWT_SECRET?.length || 0);
                console.error('❌ Token being verified:', token.substring(0, 50) + '...');
                let errorMessage = 'Authentication failed';
                if (jwtError.message?.includes('invalid signature')) {
                    console.error('❌ SIGNATURE ERROR: JWT secret mismatch between signing and verification');
                    errorMessage = 'JWT signature verification failed - token may be invalid';
                }
                else if (jwtError.message?.includes('expired')) {
                    console.error('❌ EXPIRY ERROR: Token has expired');
                    errorMessage = 'JWT token has expired - please log in again';
                }
                else if (jwtError.message?.includes('malformed')) {
                    console.error('❌ FORMAT ERROR: Token is malformed');
                    errorMessage = 'JWT token format is invalid';
                }
                else {
                    console.error('❌ UNKNOWN JWT ERROR:', jwtError);
                    errorMessage = `JWT verification failed: ${jwtError.message}`;
                }
                client.emit('auth_error', { message: errorMessage });
                client.disconnect();
            }
        }
        catch (error) {
            console.error('❌ WebSocket connection error:', error);
            console.error('❌ Error details:', error.message);
            client.disconnect();
        }
    }
    handleDisconnect(client) {
        if (client.userId) {
            this.connectedUsers.delete(client.userId);
            console.log(`User ${client.userId} disconnected`);
        }
    }
    async handleJoinChatRoom(client, data) {
        try {
            console.log('🚪 User attempting to join chat room:', data.chatRoomId);
            console.log('🚪 Client userId:', client.userId);
            console.log('🚪 Client connected:', client.connected);
            console.log('🚪 Socket id:', client.id);
            console.log('🚪 Data received:', JSON.stringify(data));
            console.log('🚪 Server available:', !!this.server);
            console.log('🚪 Server sockets available:', !!(this.server && this.server.sockets));
            console.log('🚪 Server adapter available:', !!(this.server && this.server.sockets && this.server.sockets.adapter));
            if (!data || !data.chatRoomId) {
                console.log('❌ Invalid data provided for join_chat_room');
                client.emit('error', { message: 'Invalid chat room ID provided' });
                return;
            }
            if (!client.userId) {
                console.log('❌ Unauthorized: No userId for room join');
                client.emit('error', { message: 'Unauthorized - no user ID' });
                return;
            }
            if (!client.connected) {
                console.log('❌ Socket not connected');
                client.emit('error', { message: 'Socket not connected' });
                return;
            }
            const roomName = `chat_room_${data.chatRoomId}`;
            console.log('🚪 Joining room:', roomName);
            await client.join(roomName);
            console.log('🚪 Successfully called client.join()');
            try {
                if (this.server && this.server.sockets && this.server.sockets.adapter && this.server.sockets.adapter.rooms) {
                    const room = this.server.sockets.adapter.rooms.get(roomName);
                    const roomSockets = room ? Array.from(room) : [];
                    console.log(`✅ User ${client.userId} joined chat room ${data.chatRoomId}. Room now has ${roomSockets.length} members:`, roomSockets);
                    const isInRoom = roomSockets.includes(client.id);
                    console.log('🚪 Client is in room:', isInRoom);
                }
                else {
                    console.log('⚠️ Server adapter not fully available for room verification, but join was successful');
                }
            }
            catch (roomCheckError) {
                console.log('⚠️ Could not verify room membership:', roomCheckError.message);
                console.log('⚠️ Error details:', roomCheckError);
            }
            client.emit('joined_chat_room', { chatRoomId: data.chatRoomId });
            console.log('📤 Sent joined_chat_room confirmation');
        }
        catch (error) {
            console.error('❌ Join chat room error:', error);
            console.error('❌ Error stack:', error.stack);
            console.error('❌ Error message:', error.message);
            client.emit('error', { message: `Failed to join chat room: ${error.message}` });
        }
    }
    async handleLeaveChatRoom(client, data) {
        try {
            await client.leave(`chat_room_${data.chatRoomId}`);
            client.emit('left_chat_room', { chatRoomId: data.chatRoomId });
            console.log(`User ${client.userId} left chat room ${data.chatRoomId}`);
        }
        catch (error) {
            console.error('Leave chat room error:', error);
            client.emit('error', { message: 'Failed to leave chat room' });
        }
    }
    async handleSendMessage(client, data) {
        try {
            console.log('📤 Processing send_message from user:', client.userId);
            console.log('📤 Message data:', JSON.stringify(data));
            if (!client.userId) {
                console.log('❌ Unauthorized: No userId');
                client.emit('error', { message: 'Unauthorized' });
                return;
            }
            if (data.senderId !== client.userId) {
                console.log('❌ Invalid sender:', data.senderId, 'vs authenticated:', client.userId);
                client.emit('error', { message: 'Invalid sender' });
                return;
            }
            const roomName = `chat_room_${data.chatRoomId}`;
            console.log('📤 Broadcasting to room:', roomName);
            try {
                if (this.server && this.server.sockets && this.server.sockets.adapter) {
                    const room = this.server.sockets.adapter.rooms.get(roomName);
                    const roomSockets = room ? Array.from(room) : [];
                    console.log('📤 Clients in room:', roomSockets.length, roomSockets);
                }
                else {
                    console.log('📤 Cannot check room clients - adapter not available');
                }
            }
            catch (roomCheckError) {
                console.log('📤 Error checking room clients:', roomCheckError.message);
            }
            this.server.to(roomName).emit('new_message', data);
            console.log('📤 Message broadcasted to room:', roomName);
            client.emit('message_sent', { messageId: data.chatRoomId });
            console.log('📤 Confirmation sent to sender');
        }
        catch (error) {
            console.error('Send message error:', error);
            client.emit('error', { message: 'Failed to send message' });
        }
    }
    async handleTypingStart(client, data) {
        try {
            if (!client.userId || client.userId !== data.userId) {
                return;
            }
            client.to(`chat_room_${data.chatRoomId}`).emit('user_typing', {
                chatRoomId: data.chatRoomId,
                userId: data.userId,
                isTyping: true,
            });
        }
        catch (error) {
            console.error('Typing start error:', error);
        }
    }
    async handleTypingStop(client, data) {
        try {
            if (!client.userId || client.userId !== data.userId) {
                return;
            }
            client.to(`chat_room_${data.chatRoomId}`).emit('user_typing', {
                chatRoomId: data.chatRoomId,
                userId: data.userId,
                isTyping: false,
            });
        }
        catch (error) {
            console.error('Typing stop error:', error);
        }
    }
    async handleMarkMessagesRead(client, data) {
        try {
            if (!client.userId) {
                return;
            }
            client.to(`chat_room_${data.chatRoomId}`).emit('messages_read', {
                chatRoomId: data.chatRoomId,
                userId: client.userId,
            });
        }
        catch (error) {
            console.error('Mark messages read error:', error);
        }
    }
    async handleChatRoomOpened(client, data) {
        try {
            if (!client.userId) {
                return;
            }
            console.log(`User ${client.userId} opened chat room ${data.chatRoomId}`);
            this.server.to(`user_${client.userId}`).emit('chat_room_update', {
                chatRoomId: data.chatRoomId,
                action: 'opened',
                userId: client.userId,
            });
        }
        catch (error) {
            console.error('Chat room opened error:', error);
        }
    }
    async emitNewMessage(chatRoomId, message) {
        this.server.to(`chat_room_${chatRoomId}`).emit('new_message', message);
    }
    async emitChatRoomUpdate(userId, chatRoom) {
        this.server.to(`user_${userId}`).emit('chat_room_update', chatRoom);
    }
    async emitUnreadCountUpdate(userId, unreadCount) {
        this.server.to(`user_${userId}`).emit('unread_count_update', { unreadCount });
    }
    isUserOnline(userId) {
        return this.connectedUsers.has(userId);
    }
    getOnlineUsersCount() {
        return this.connectedUsers.size;
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_b = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _b : Object)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('join_chat_room'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleJoinChatRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('leave_chat_room'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleLeaveChatRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('send_message'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_c = typeof send_message_dto_1.SendMessageDto !== "undefined" && send_message_dto_1.SendMessageDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleSendMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('typing_start'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleTypingStart", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('typing_stop'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleTypingStop", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('mark_messages_read'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleMarkMessagesRead", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('chat_room_opened'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleChatRoomOpened", null);
exports.ChatGateway = ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
        namespace: '/chat',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], ChatGateway);


/***/ }),
/* 117 */
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),
/* 118 */
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),
/* 119 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SendMessageDto = exports.MessageType = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(30);
var MessageType;
(function (MessageType) {
    MessageType["TEXT"] = "text";
    MessageType["IMAGE"] = "image";
    MessageType["VIDEO"] = "video";
    MessageType["FILE"] = "file";
    MessageType["VOICE"] = "voice";
})(MessageType || (exports.MessageType = MessageType = {}));
class SendMessageDto {
}
exports.SendMessageDto = SendMessageDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Chat room ID',
        example: '64f1a2b3c4d5e6f7g8h9i0j1'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SendMessageDto.prototype, "chatRoomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Sender user ID',
        example: '64f1a2b3c4d5e6f7g8h9i0j2'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SendMessageDto.prototype, "senderId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Receiver user ID',
        example: '64f1a2b3c4d5e6f7g8h9i0j3'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SendMessageDto.prototype, "receiverId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Type of message',
        enum: MessageType,
        example: MessageType.TEXT
    }),
    (0, class_validator_1.IsEnum)(MessageType),
    __metadata("design:type", String)
], SendMessageDto.prototype, "messageType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Message content',
        example: 'Hello, I am interested in this product!'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SendMessageDto.prototype, "messageContent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Media URL for non-text messages',
        example: 'https://example.com/image.jpg',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SendMessageDto.prototype, "mediaUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Reply to message ID',
        example: '64f1a2b3c4d5e6f7g8h9i0j4',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SendMessageDto.prototype, "replyTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'File metadata',
        required: false
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], SendMessageDto.prototype, "metadata", void 0);


/***/ }),
/* 120 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateChatRoomDto = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(30);
class CreateChatRoomDto {
}
exports.CreateChatRoomDto = CreateChatRoomDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Buyer user ID',
        example: '64f1a2b3c4d5e6f7g8h9i0j1'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateChatRoomDto.prototype, "buyerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Seller user ID',
        example: '64f1a2b3c4d5e6f7g8h9i0j2'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateChatRoomDto.prototype, "sellerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Shop ID where the chat is happening',
        example: '64f1a2b3c4d5e6f7g8h9i0j3'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateChatRoomDto.prototype, "shopId", void 0);


/***/ }),
/* 121 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SendMessageResponseDto = exports.CreateChatRoomResponseDto = exports.MessageResponseDto = exports.ChatRoomResponseDto = void 0;
const swagger_1 = __webpack_require__(3);
class ChatRoomResponseDto {
}
exports.ChatRoomResponseDto = ChatRoomResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chat room ID' }),
    __metadata("design:type", String)
], ChatRoomResponseDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Buyer information' }),
    __metadata("design:type", Object)
], ChatRoomResponseDto.prototype, "buyer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Seller information' }),
    __metadata("design:type", Object)
], ChatRoomResponseDto.prototype, "seller", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Shop information' }),
    __metadata("design:type", Object)
], ChatRoomResponseDto.prototype, "shop", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last message details' }),
    __metadata("design:type", Object)
], ChatRoomResponseDto.prototype, "lastMessage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unread message counts' }),
    __metadata("design:type", Object)
], ChatRoomResponseDto.prototype, "unreadCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chat room status' }),
    __metadata("design:type", Boolean)
], ChatRoomResponseDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], ChatRoomResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], ChatRoomResponseDto.prototype, "updatedAt", void 0);
class MessageResponseDto {
}
exports.MessageResponseDto = MessageResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Message ID' }),
    __metadata("design:type", String)
], MessageResponseDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chat room ID' }),
    __metadata("design:type", String)
], MessageResponseDto.prototype, "chatRoomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Sender information' }),
    __metadata("design:type", Object)
], MessageResponseDto.prototype, "sender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Receiver information' }),
    __metadata("design:type", Object)
], MessageResponseDto.prototype, "receiver", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Message type' }),
    __metadata("design:type", String)
], MessageResponseDto.prototype, "messageType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Message content' }),
    __metadata("design:type", String)
], MessageResponseDto.prototype, "messageContent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Media URL', required: false }),
    __metadata("design:type", String)
], MessageResponseDto.prototype, "mediaUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Read status' }),
    __metadata("design:type", Boolean)
], MessageResponseDto.prototype, "isRead", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Read timestamp', required: false }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], MessageResponseDto.prototype, "readAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Reply to message ID', required: false }),
    __metadata("design:type", String)
], MessageResponseDto.prototype, "replyTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Message metadata', required: false }),
    __metadata("design:type", Object)
], MessageResponseDto.prototype, "metadata", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], MessageResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], MessageResponseDto.prototype, "updatedAt", void 0);
class CreateChatRoomResponseDto {
}
exports.CreateChatRoomResponseDto = CreateChatRoomResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success status' }),
    __metadata("design:type", Boolean)
], CreateChatRoomResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Chat room ID' }),
    __metadata("design:type", String)
], CreateChatRoomResponseDto.prototype, "chatRoomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Message' }),
    __metadata("design:type", String)
], CreateChatRoomResponseDto.prototype, "message", void 0);
class SendMessageResponseDto {
}
exports.SendMessageResponseDto = SendMessageResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Success status' }),
    __metadata("design:type", Boolean)
], SendMessageResponseDto.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Message ID' }),
    __metadata("design:type", String)
], SendMessageResponseDto.prototype, "messageId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Message' }),
    __metadata("design:type", String)
], SendMessageResponseDto.prototype, "message", void 0);


/***/ }),
/* 122 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatRoom = exports.ChatRoomSchema = void 0;
const mongoose_1 = __webpack_require__(14);
const utils_1 = __webpack_require__(49);
exports.ChatRoomSchema = new mongoose_1.Schema({
    _id: { type: String, default: utils_1.generateStringId },
    buyerId: {
        type: String,
        required: true,
        ref: 'User',
        index: true
    },
    sellerId: {
        type: String,
        required: true,
        ref: 'User',
        index: true
    },
    shopId: {
        type: String,
        required: true,
        ref: 'Shop',
        index: true
    },
    lastMessage: {
        content: { type: String, default: '' },
        messageType: {
            type: String,
            enum: ['text', 'image', 'video', 'file', 'voice'],
            default: 'text'
        },
        senderId: { type: String, ref: 'User' },
        timestamp: { type: Date, default: Date.now }
    },
    unreadCount: {
        buyer: { type: Number, default: 0 },
        seller: { type: Number, default: 0 }
    },
    isActive: { type: Boolean, default: true },
    participants: [{
            type: String,
            ref: 'User',
            required: true
        }],
}, {
    collection: 'chatrooms',
    timestamps: true,
});
let ChatRoom;
try {
    exports.ChatRoom = ChatRoom = (0, mongoose_1.model)('ChatRoom');
}
catch (e) {
    exports.ChatRoom = ChatRoom = (0, mongoose_1.model)('ChatRoom', exports.ChatRoomSchema);
}
exports.ChatRoomSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
exports.ChatRoomSchema.index({ buyerId: 1, sellerId: 1, shopId: 1 }, { unique: true });
exports.ChatRoomSchema.index({ buyerId: 1, updatedAt: -1 });
exports.ChatRoomSchema.index({ sellerId: 1, updatedAt: -1 });
exports.ChatRoomSchema.index({ shopId: 1 });


/***/ }),
/* 123 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Message = exports.MessageSchema = void 0;
const mongoose_1 = __webpack_require__(14);
const utils_1 = __webpack_require__(49);
exports.MessageSchema = new mongoose_1.Schema({
    _id: { type: String, default: utils_1.generateStringId },
    chatRoomId: {
        type: String,
        required: true,
        ref: 'ChatRoom',
        index: true
    },
    senderId: {
        type: String,
        required: true,
        ref: 'User',
        index: true
    },
    receiverId: {
        type: String,
        required: true,
        ref: 'User',
        index: true
    },
    messageType: {
        type: String,
        required: true,
        enum: ['text', 'image', 'video', 'file', 'voice'],
        default: 'text'
    },
    messageContent: {
        type: String,
        required: true
    },
    mediaUrl: {
        type: String,
        default: ''
    },
    isRead: {
        type: Boolean,
        default: false
    },
    readAt: {
        type: Date,
        default: null
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    deletedAt: {
        type: Date,
        default: null
    },
    replyTo: {
        type: String,
        ref: 'Message',
        default: null
    },
    metadata: {
        fileName: { type: String, default: '' },
        fileSize: { type: Number, default: 0 },
        duration: { type: Number, default: 0 },
        thumbnail: { type: String, default: '' }
    }
}, {
    collection: 'messages',
    timestamps: true,
});
let Message;
try {
    exports.Message = Message = (0, mongoose_1.model)('Message');
}
catch (e) {
    exports.Message = Message = (0, mongoose_1.model)('Message', exports.MessageSchema);
}
exports.MessageSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
exports.MessageSchema.index({ chatRoomId: 1, createdAt: -1 });
exports.MessageSchema.index({ senderId: 1, createdAt: -1 });
exports.MessageSchema.index({ receiverId: 1, isRead: 1 });
exports.MessageSchema.index({ chatRoomId: 1, isDeleted: 1 });


/***/ }),
/* 124 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminModule = void 0;
const common_1 = __webpack_require__(1);
const admin_auth_controller_1 = __webpack_require__(125);
const admin_users_controller_1 = __webpack_require__(128);
const auth_module_1 = __webpack_require__(8);
let AdminModule = exports.AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule.forRoot()],
        controllers: [admin_auth_controller_1.AdminAuthController, admin_users_controller_1.AdminUsersController],
    })
], AdminModule);


/***/ }),
/* 125 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminAuthController = void 0;
const common_1 = __webpack_require__(1);
const express_1 = __webpack_require__(11);
const swagger_1 = __webpack_require__(3);
const auth_service_1 = __webpack_require__(12);
const admin_login_dto_1 = __webpack_require__(126);
const admin_login_response_dto_1 = __webpack_require__(127);
let AdminAuthController = exports.AdminAuthController = class AdminAuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async adminLogin(loginDto, req) {
        console.log('🔵 [ADMIN AUTH CONTROLLER] Admin login request received');
        console.log('📦 [ADMIN AUTH CONTROLLER] Email:', loginDto?.email);
        const ipAddress = req.ip || req.connection.remoteAddress || 'Unknown';
        console.log('🌐 [ADMIN AUTH CONTROLLER] IP Address:', ipAddress);
        const result = await this.authService.adminLogin(loginDto, ipAddress);
        return {
            success: true,
            message: 'Admin login successful',
            data: result
        };
    }
};
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Admin login',
        description: 'Authenticate admin user and return JWT token. Only users with ADMIN role can access.'
    }),
    (0, swagger_1.ApiBody)({ type: admin_login_dto_1.AdminLoginDTO }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Login successful',
        type: admin_login_response_dto_1.AdminLoginResponseDTO
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Invalid credentials or user is not an admin'
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Bad request - validation error'
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof admin_login_dto_1.AdminLoginDTO !== "undefined" && admin_login_dto_1.AdminLoginDTO) === "function" ? _b : Object, typeof (_c = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AdminAuthController.prototype, "adminLogin", null);
exports.AdminAuthController = AdminAuthController = __decorate([
    (0, swagger_1.ApiTags)('adminApis'),
    (0, common_1.Controller)('admin/auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AdminAuthController);


/***/ }),
/* 126 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminLoginDTO = void 0;
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(30);
class AdminLoginDTO {
}
exports.AdminLoginDTO = AdminLoginDTO;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Admin email address',
        example: 'admin@jhamat.com',
        required: true
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'Please provide a valid email address' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AdminLoginDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Admin password',
        example: 'Admin@123',
        required: true
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AdminLoginDTO.prototype, "password", void 0);


/***/ }),
/* 127 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminLoginResponseDTO = exports.AdminUserDTO = void 0;
const swagger_1 = __webpack_require__(3);
class AdminUserDTO {
}
exports.AdminUserDTO = AdminUserDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID' }),
    __metadata("design:type", String)
], AdminUserDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User email' }),
    __metadata("design:type", String)
], AdminUserDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User full name' }),
    __metadata("design:type", String)
], AdminUserDTO.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User role' }),
    __metadata("design:type", String)
], AdminUserDTO.prototype, "userRole", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User status' }),
    __metadata("design:type", String)
], AdminUserDTO.prototype, "userStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Profile picture URL', required: false }),
    __metadata("design:type", String)
], AdminUserDTO.prototype, "profilePic", void 0);
class AdminLoginResponseDTO {
}
exports.AdminLoginResponseDTO = AdminLoginResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'JWT access token' }),
    __metadata("design:type", String)
], AdminLoginResponseDTO.prototype, "accessToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'JWT refresh token', required: false }),
    __metadata("design:type", String)
], AdminLoginResponseDTO.prototype, "refreshToken", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Admin user information', type: AdminUserDTO }),
    __metadata("design:type", AdminUserDTO)
], AdminLoginResponseDTO.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Token expiration time in seconds' }),
    __metadata("design:type", Number)
], AdminLoginResponseDTO.prototype, "expiresIn", void 0);


/***/ }),
/* 128 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminUsersController = void 0;
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(3);
const auth_service_1 = __webpack_require__(12);
const jwt_auth_guard_1 = __webpack_require__(36);
const admin_users_response_dto_1 = __webpack_require__(129);
let AdminUsersController = exports.AdminUsersController = class AdminUsersController {
    constructor(authService) {
        this.authService = authService;
    }
    async getAllUsers(query) {
        console.log('🔵 [ADMIN USERS CONTROLLER] Get all users request received');
        console.log('📦 [ADMIN USERS CONTROLLER] Query params:', query);
        try {
            const result = await this.authService.getAllUsersForAdmin(query);
            console.log('✅ [ADMIN USERS CONTROLLER] Users retrieved:', result.total, 'total users');
            console.log('✅ [ADMIN USERS CONTROLLER] Returning', result.users?.length || 0, 'users');
            return {
                success: true,
                message: 'Users retrieved successfully',
                data: result
            };
        }
        catch (error) {
            console.error('❌ [ADMIN USERS CONTROLLER] Error:', error);
            throw error;
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all users (Admin only)',
        description: 'Retrieve all users with optional filters. Only accessible by admin users.'
    }),
    (0, swagger_1.ApiQuery)({
        name: 'search',
        required: false,
        type: String,
        description: 'Search users by email, name, or fullName'
    }),
    (0, swagger_1.ApiQuery)({
        name: 'userRole',
        required: false,
        enum: ['normal', 'seller', 'admin'],
        description: 'Filter by user role'
    }),
    (0, swagger_1.ApiQuery)({
        name: 'userStatus',
        required: false,
        enum: ['active', 'inactive', 'suspended'],
        description: 'Filter by user status'
    }),
    (0, swagger_1.ApiQuery)({
        name: 'userLevel',
        required: false,
        enum: ['beginner', 'intermediate', 'advanced', 'expert'],
        description: 'Filter by user level'
    }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        required: false,
        type: Number,
        description: 'Number of users to return (default: 100)'
    }),
    (0, swagger_1.ApiQuery)({
        name: 'offset',
        required: false,
        type: Number,
        description: 'Number of users to skip (default: 0)'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Users retrieved successfully',
        type: admin_users_response_dto_1.AdminUsersResponseDTO
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized - Invalid or missing token'
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Forbidden - User is not an admin'
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUsersController.prototype, "getAllUsers", null);
exports.AdminUsersController = AdminUsersController = __decorate([
    (0, swagger_1.ApiTags)('adminApis'),
    (0, common_1.Controller)('admin/users'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AdminUsersController);


/***/ }),
/* 129 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminUsersResponseDTO = exports.AdminUserListItemDTO = void 0;
const swagger_1 = __webpack_require__(3);
class AdminUserListItemDTO {
}
exports.AdminUserListItemDTO = AdminUserListItemDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID' }),
    __metadata("design:type", String)
], AdminUserListItemDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User email' }),
    __metadata("design:type", String)
], AdminUserListItemDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User name/username' }),
    __metadata("design:type", String)
], AdminUserListItemDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User full name' }),
    __metadata("design:type", String)
], AdminUserListItemDTO.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Phone number' }),
    __metadata("design:type", String)
], AdminUserListItemDTO.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User role', enum: ['normal', 'seller', 'admin'] }),
    __metadata("design:type", String)
], AdminUserListItemDTO.prototype, "userRole", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User status', enum: ['active', 'inactive', 'suspended'] }),
    __metadata("design:type", String)
], AdminUserListItemDTO.prototype, "userStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User level', enum: ['beginner', 'intermediate', 'advanced', 'expert'] }),
    __metadata("design:type", String)
], AdminUserListItemDTO.prototype, "userLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Profile picture URL', required: false }),
    __metadata("design:type", String)
], AdminUserListItemDTO.prototype, "profilePic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Profile picture (legacy field)', required: false }),
    __metadata("design:type", String)
], AdminUserListItemDTO.prototype, "pic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User color' }),
    __metadata("design:type", String)
], AdminUserListItemDTO.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Village' }),
    __metadata("design:type", String)
], AdminUserListItemDTO.prototype, "village", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Country' }),
    __metadata("design:type", String)
], AdminUserListItemDTO.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Home address' }),
    __metadata("design:type", String)
], AdminUserListItemDTO.prototype, "homeAddress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Zipcode' }),
    __metadata("design:type", String)
], AdminUserListItemDTO.prototype, "zipcode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Email verified status' }),
    __metadata("design:type", Boolean)
], AdminUserListItemDTO.prototype, "isEmailVerified", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Two-factor authentication enabled' }),
    __metadata("design:type", Boolean)
], AdminUserListItemDTO.prototype, "isTwoFactorEnabled", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Biometric authentication enabled' }),
    __metadata("design:type", Boolean)
], AdminUserListItemDTO.prototype, "isBiometric", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of sell orders' }),
    __metadata("design:type", Number)
], AdminUserListItemDTO.prototype, "sellOrders", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of buy orders' }),
    __metadata("design:type", Number)
], AdminUserListItemDTO.prototype, "buyOrders", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Creation timestamp' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], AdminUserListItemDTO.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Last update timestamp' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], AdminUserListItemDTO.prototype, "updatedAt", void 0);
class AdminUsersResponseDTO {
}
exports.AdminUsersResponseDTO = AdminUsersResponseDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'List of users', type: [AdminUserListItemDTO] }),
    __metadata("design:type", Array)
], AdminUsersResponseDTO.prototype, "users", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total count of users' }),
    __metadata("design:type", Number)
], AdminUsersResponseDTO.prototype, "total", void 0);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(3);
const app_module_1 = __webpack_require__(4);
async function bootstrap() {
    const port = parseInt(process.env.PORT || '3000', 10);
    const host = process.env.HOST || '0.0.0.0';
    const networkIp = process.env.NETWORK_IP || 'localhost';
    const hasMongoUri = Boolean(process.env.MONGODB_URI);
    console.log(`[BOOT] PORT=${port}`);
    console.log(`[BOOT] MONGODB_URI configured: ${hasMongoUri ? 'YES' : 'NO'}`);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
        whitelist: true,
        forbidNonWhitelisted: false,
        skipMissingProperties: false,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Shop app')
        .setDescription('Shop App APIs')
        .setVersion('1.0')
        .addBearerAuth()
        .addTag('apis')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    const corsOrigins = process.env.CORS_ORIGIN?.split(',') || ['*'];
    if (!corsOrigins.includes('http://localhost:4200') && corsOrigins[0] !== '*') {
        corsOrigins.push('http://localhost:4200');
    }
    app.enableCors({
        origin: corsOrigins,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    });
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

})();

/******/ })()
;