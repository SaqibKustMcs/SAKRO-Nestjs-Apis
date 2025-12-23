import * as mongoose from 'mongoose';

export const DeviceSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  },
);

// Compound index for efficient queries
DeviceSchema.index({ userId: 1, lastActive: -1 });
DeviceSchema.index({ userId: 1, deviceId: 1 });

