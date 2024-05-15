import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`[mongodb] connected to host: ${conn.connection.host}`.yellow);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDatabase;