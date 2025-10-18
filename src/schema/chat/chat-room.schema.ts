import { model, Schema } from 'mongoose';
import { generateStringId } from 'src/utils/utils';
import { ChatRoom } from 'src/interface/chat/chat.interface';

export const ChatRoomSchema = new Schema(
  {
    _id: { type: String, default: generateStringId },
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
  },
  {
    collection: 'chatrooms',
    timestamps: true,
  },
);

let ChatRoom: any;
try {
  ChatRoom = model('ChatRoom');
} catch (e) {
  ChatRoom = model('ChatRoom', ChatRoomSchema);
}

ChatRoomSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

// Compound indexes for efficient queries
ChatRoomSchema.index({ buyerId: 1, sellerId: 1, shopId: 1 }, { unique: true });
ChatRoomSchema.index({ buyerId: 1, updatedAt: -1 });
ChatRoomSchema.index({ sellerId: 1, updatedAt: -1 });
ChatRoomSchema.index({ shopId: 1 });

export { ChatRoom };
