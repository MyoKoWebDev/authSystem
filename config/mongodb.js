import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongodb connect success : ${conn.connection.host}`);
  } catch (error) {
    console.log(`mongodb connect error : ${error.message}`);
  }
};

export default connectDB;
