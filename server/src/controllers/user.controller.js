export const registerUser = async (req,res)=>{
    res.status(201).json({
        success:true,
        message:"User Registration API Working ",
    });
};