import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://sharran_db_user:jxcaPK7SDLdJ1SRW@cluster0.1xekcnq.mongodb.net/food-del");
    console.log("DB connected");
  } catch (error) {
    console.log("DB ERROR:", error);
  }
};

