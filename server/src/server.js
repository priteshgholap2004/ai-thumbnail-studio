import dotenv from "dotenv";
import app from "./app.js"
const PORT = process.env.PORT || 5000;

dotenv.config();

console.log(process.env.APP_NAME);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})