import dotenv from "dotenv";
import app from "./app.js"
import connectDB from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
// console.log(process.env.APP_NAME);
//connect db
await connectDB(); //connecte db befoer starting server if db fails server nerver startts

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})