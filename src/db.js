import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL);
    console.log('db connected');
  } catch (error) {
    console.error("error in connecting ",error);
    return
  }
};

export default connectDB;
