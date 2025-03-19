import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connect", conn.connection.host);
  } catch (error) {
    console.log("Error connection to mongodb", error.mongoose);
    process.exit(1);
  }
};
