import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    
  "mongodb+srv://irfanrohith8897:%40Irfan438897@cluster0.qyxovqa.mongodb.net/GLOLED?retryWrites=true&w=majority&appName=Cluster0"
  
).then(() => console.log("DB Connected"));
};


