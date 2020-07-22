import { Schema } from 'mongoose';
import { ObjectID, ObjectId } from 'mongodb';

export const ProductSchema = new Schema({
    _id: {
        type: ObjectID,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    pcsAvailable: {
        type: Number,
        required: true
    },
    manufacture: String,
    description: String
});
