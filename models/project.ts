import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const projectSchema = new Schema({

    name: {
      type: String,
    },
    key: {
      type: String,
    },
    lead: {
      type: String,
    },
    type: {
      type: String,
    },
    checked: {
      type: Boolean,
    },
    columns:{
      type: [String],
    }
});

export const Project = mongoose.model('Project', projectSchema);
