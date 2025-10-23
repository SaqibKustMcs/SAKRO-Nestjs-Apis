import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { generateStringId } from 'src/utils/utils';

export type postDocument = HydratedDocument<Post>;

@Schema({ _id: false })
export class PostOption {
  @Prop({ type: String, default: generateStringId })
  id: string;

  @Prop({ type: String, required: true })
  text: string;

  @Prop({ type: [String], default: [] })
  votes: string[]; // Array of user IDs who voted for this option
}

export const PostOptionSchema = SchemaFactory.createForClass(PostOption);

@Schema()
export class Post {
  @Prop({ type: String, default: generateStringId })
  id: string;

  @Prop({ type: String, required: true, ref: 'User' })
  userId: string;

  @Prop({ type: String, required: true, ref: 'Village' })
  villageId: string;

  @Prop({ 
    type: String, 
    required: true, 
    enum: ['text', 'image', 'video', 'question'] 
  })
  type: 'text' | 'image' | 'video' | 'question';

  @Prop({ type: String, default: '' })
  text: string;

  @Prop({ type: String, default: '' })
  mediaUrl: string;

  @Prop({ 
    type: String, 
    enum: ['image', 'video'], 
    default: undefined,
    required: false 
  })
  mediaType?: 'image' | 'video';

  @Prop({ type: String, default: '' })
  question: string;

  @Prop({ type: [PostOptionSchema], default: [] })
  options: PostOption[];

  @Prop({ type: Number, default: 0 })
  totalVotes: number;

  @Prop({ type: Boolean, default: false })
  isDeleted: boolean;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);

PostSchema.set('timestamps', true);
PostSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});

// Add indexes for better performance
PostSchema.index({ userId: 1 });
PostSchema.index({ villageId: 1 });
PostSchema.index({ type: 1 });
PostSchema.index({ createdAt: -1 });
PostSchema.index({ isDeleted: 1 });

