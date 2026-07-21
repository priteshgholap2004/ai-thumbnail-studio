import  "dotenv/config";
import app from "./app.js"
import connectDB from "./config/db.js";

// dotenv.config();

const PORT = process.env.PORT || 5000;
//connect db
await connectDB(); 

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})