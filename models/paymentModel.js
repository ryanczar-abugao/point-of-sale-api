import { Schema, model } from 'mongoose';

const paymentSchema = new Schema({
  payment_id: Number,
  order_id: Number,
  amount: Number,
  payment_datetime: Date,
  method: String
});

export default model('payments', paymentSchema);