import { model, Schema } from 'mongoose';
import { generateStringId } from 'src/utils/utils';
import { Message } from 'src/interface/chat/chat.interface';

export const MessageSchema = new Schema(
  {
    _id: { type: String, default: generateStringId },
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
      duration: { type: Number, default: 0 }, // for voice/video messages
      thumbnail: { type: String, default: '' } // for video/image messages
    }
  },
  {
    collection: 'messages',
    timestamps: true,
  },
);

let Message: any;
try {
  Message = model('Message');
} catch (e) {
  Message = model('Message', MessageSchema);
}

MessageSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

// Indexes for efficient queries
MessageSchema.index({ chatRoomId: 1, createdAt: -1 });
MessageSchema.index({ senderId: 1, createdAt: -1 });
MessageSchema.index({ receiverId: 1, isRead: 1 });
MessageSchema.index({ chatRoomId: 1, isDeleted: 1 });

export { Message };
