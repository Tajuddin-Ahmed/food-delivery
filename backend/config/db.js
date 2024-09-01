import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://tajchemnitzase:tajchemnitz714@cluster0.4gz6j.mongodb.net/food-db"
    )
    .then(() => console.log("DB connected"));
};
