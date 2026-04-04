import { Schema, model } from 'mongoose';
import { generateStringId } from 'src/utils/utils';

export const BannerSchema = new Schema(
  {
    _id: { type: String, default: generateStringId },

    /** 'carousel' → shown in home carousel slider
     *  'modal'    → shown as full-screen overlay on home load  */
    type: {
      type: String,
      enum: ['carousel', 'modal'],
      default: 'carousel',
      required: true,
    },

    // ── Shared fields ────────────────────────────────────────────────────────
    title: { type: String, required: true },
    imageUrl: { type: String, default: '' },
    linkType: {
      type: String,
      enum: ['none', 'shop', 'product', 'category', 'url'],
      default: 'none',
    },
    linkId: { type: String, default: null },
    linkUrl: { type: String, default: null },
    sortOrder: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },

    // ── Carousel-only fields ─────────────────────────────────────────────────
    subtitle: { type: String, default: '' },
    discount: { type: String, default: '' },
    description: { type: String, default: '' },
    buttonText: { type: String, default: 'Shop Now' },
    bgColorHex: { type: String, default: '#FFF2EE' },
    gradientStartHex: { type: String, default: '#FFF2EE' },
    gradientEndHex: { type: String, default: '#FFE5DC' },

    // ── Modal-only fields ────────────────────────────────────────────────────
    /** Show this modal once per device install (uses banner id stored in prefs) */
    showOnce: { type: Boolean, default: false },
  },
  {
    collection: 'banners',
    timestamps: true,
  },
);

BannerSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_doc, ret) => {
    delete ret._id;
  },
});

BannerSchema.index({ type: 1, isActive: 1, sortOrder: 1 });

export const BannerModel = model('Banner', BannerSchema);
