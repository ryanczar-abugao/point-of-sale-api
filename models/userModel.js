import { Schema, model } from "mongoose";

const userSchema = new Schema({
  user_id: Number,
  username: String,
  password: String,
  email: String,
  role: String,
  last_login_datetime: Date,
  is_active: Boolean
});

export default model('users', userSchema);