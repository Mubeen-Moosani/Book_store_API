import "dotenv/config";
import mongoose from "mongoose";
const Connect = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
};

export default Connect;
