import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  product_id: Number,
  name: String,
  description: String,
  category_id: Number,
  price: Number,
  quantity: Number,
  image_url: String
});

export default model('products', productSchema);