import mongoose from "mongoose";

export const connectDB  = async ()=>{
   try {
     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
     console.log(`Mongodb connected successfully ${connectionInstance.connection.host}`)
   } catch (error) {
    console.log(`Failed to connect`)
    process.exit(1)
   }
}