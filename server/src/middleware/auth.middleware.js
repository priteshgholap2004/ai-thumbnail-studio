import jwt from "jsonwebtoken";

const authMiddleware =(req,res,next)=>{
    //Read token form cookie
    const token = req.cookies.token;;

    //if token exisst
    if(!token){
        return res.status(401).json({
            success: false,
            message:"Unauthorized - No token found",
        });
    }
    try{
        //verify jwt
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        req.user=decoded;
    
        next();
    }catch{
        return res.status(401).json({
            success:false,
            message:"Invalid Token",
        });
    }
};
export default authMiddleware;