import * as mongoose from 'mongoose';

export const LoginHistorySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false, // Allow null for failed logins where user doesn't exist
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
  },
  {
    timestamps: true,
  },
);

// Compound indexes for efficient queries
LoginHistorySchema.index({ userId: 1, loginAt: -1 });
LoginHistorySchema.index({ userId: 1, status: 1, loginAt: -1 });
LoginHistorySchema.index({ loginAt: -1 });

// TTL index - automatically delete records older than 90 days
LoginHistorySchema.index({ createdAt: 1 }, { expireAfterSeconds: 7776000 }); // 90 days

