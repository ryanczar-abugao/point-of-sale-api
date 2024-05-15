import { Schema, model } from 'mongoose';

const categorySchema = new Schema({
  category_id: Number,
  name: String,
});

export default model('categories', categorySchema);