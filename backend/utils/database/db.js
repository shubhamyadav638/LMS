import mongoose from "mongoose";
import "dotenv/config";

const connString = process.env.DB;

const connectDB = async () => {
  try {
    await mongoose.connect(connString);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectDB;
