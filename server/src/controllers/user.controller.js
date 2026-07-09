import User from "../models/User.model.js";
export const registerUser = async (req,res)=>{
    try{
        const { name, email, password } = req.body;

        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required",
            });
        }

        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(409).json({
                success:false,
                message:"User already exists",
            });
        }

        const user = await User.create({
            name,
            email,
            password,
        });

        res.status(201).json({
            success:true,
            message:"User registered successfully",
            user,
        });

        // res.status(201).json({
        // success:true,
        // message:"User Registration API Working ",
    // });
    }catch(error){
        res.status(500).json({
            success:false,
            message: error.message,
        });
    }
};