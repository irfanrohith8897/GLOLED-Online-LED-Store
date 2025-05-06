import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://gloled:gloled123@cluster0.azm3mwf.mongodb.net/GLOLED"
    )
    .then(() => console.log("DB Connected"));
};


