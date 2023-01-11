import mongoose from 'mongoose';
const { Schema } = mongoose;
const Course = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 255 },
    image: { type: String, maxLength: 255 },
    createDate: { type: Date, default: Date.now },
    description: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Course', Course);
