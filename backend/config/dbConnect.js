import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Recap Project Data Base");
  } catch (err) {
    console.log(err);
  }
};

export default ConnectDB;
