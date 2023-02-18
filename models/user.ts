import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
   /* required: true,*/
  },
  surname: {
    type: String,
   /* required: true,*/
  },
  projects:{
    type: [String],
    default:[]
  }
});

export const User = mongoose.model('User', userSchema);
/*module.exports = User;*/
