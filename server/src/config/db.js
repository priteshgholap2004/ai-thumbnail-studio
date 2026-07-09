import mongoose from "mongoose";
const connectDB= async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected Successfully");
    }
    catch(error){
        console.error("MongoDB connection failed");
        console.error(error.message);
        
        //stops app if monog not connect
        process.exit(1);
    }
}

export default connectDB;