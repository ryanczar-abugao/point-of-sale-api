import { Schema, model } from 'mongoose';

const orderItemSchema = new Schema({
  order_item_id: Number,
  order_id: Number,
  product_id: Number,
  quantity: Number,
  unit_price: Number,
  total_price: Number
});

const orderSchema = new Schema({
  order_id: Number,
  user_id: Number,
  order_datetime: Date,
  total_amount: Number,
  status: String,
  notes: String,
  order_items: [orderItemSchema]
});

export default model('orders', orderSchema);