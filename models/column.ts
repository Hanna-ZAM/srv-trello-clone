import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const columnSchema = new Schema({
    id: {
      type: Number,
    },
    title: {
      type: String,
    },
    cards:{
      type: [String],
      default:[]
    }
});

export const Column = mongoose.model('Column', columnSchema);
