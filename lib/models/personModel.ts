import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PersonSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String,
        required: 'Enter an email address'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});