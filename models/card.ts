import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const cardSchema = new Schema({

    id: {
      type: Number,
    },
    text: {
      type: String,
    },
});

export const Card = mongoose.model('Card', cardSchema);
