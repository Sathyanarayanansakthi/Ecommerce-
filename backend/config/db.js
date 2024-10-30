import mongoose from "mongoose";

export const connectDB=async ()=>{ //async funtion named it as connectDB
    try {
        const conn= await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log(`error :${error.message}`)
        process.exit(1) 
        //0 is sucess 1 is faliure
    }
}