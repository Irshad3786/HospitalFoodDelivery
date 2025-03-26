import jwt from 'jsonwebtoken'

export const VerifyDeliveryController = async (req,res) =>{
    const token = req.cookies.DeliveryToken
  
   
    
    try {
        if(!token){
            return res.status(200).json({message:"No Token Found"})
        }

        const authtoken = await jwt.verify(token,process.env.JWTCODE)

        if(!authtoken || !authtoken.Email){
            return res.status(404).json({message:"No Valid Token Found"})
        }
        
        return res.status(200).json({message:"authorized User"})
        

    } catch (error) {
        res.json({ status: false, message: "Invalid token" });
    }

    
}