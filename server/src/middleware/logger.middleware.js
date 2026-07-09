const logger=(req,res,next)=>{
    console.log("\n========== New Request ==========");
    console.log("Method :",req.method);
    console.log("URL   :",req.url);
    console.log("Time   :",new Date().toLocaleString());
    console.log("=================================\n");
    next();
}
export default logger;