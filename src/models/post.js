import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const PostSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        id: {
            type: String,
            unique: true,
            required: true,
        },
        content: {
            type: String
        }
    },
    {
        collection: 'posts',
    }
);

PostSchema.plugin(timestamps);

PostSchema.index({ createdAt: 1, updatedAt: 1 });

export const Post = mongoose.model('Post', PostSchema);
export const PostTC = composeWithMongoose(Post);