import mongoose from "mongoose";
const Connect = async () => {
  console.log(process.env.MONGODB_URL);
  await mongoose.connect(process.env.MONGODB_URL);
};

export default Connect;
