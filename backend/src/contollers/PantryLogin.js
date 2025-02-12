import PantryAccountModel from '../dbmodules/PantrySch.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const LoginPantryAccountController =  (req,res)=>{
    
        const {PhoneNo,Password} = req.body

        if(!PhoneNo || !Password){
            return res.status(409).json({message:"No Email Or Password"})
        }

        PantryAccountModel.findOne({PhoneNo:PhoneNo})
        .then((Res)=>{
            if(Res){
                bcrypt.compare(Password,Res.Password)
                .then((data)=>{
                    if(data){
                        const PantryToken = jwt.sign({PhoneNo:Res.PhoneNo}, process.env.JWTCODE,{expiresIn:"1d"})
                        
                            if(PantryToken){
                                 res.cookie("PantryToken",PantryToken,{
                                    httpOnly: true,
                                    secure: process.env.NODE_ENV === "production",
                                    sameSite: "None",
                                    maxAge: 24 * 60 * 60 * 1000
                                })
                            
                                return res.status(200).json({message:"User Authenticated"})
                            }
                        
                    }else{
                        return res.status(200).json({message:"Password Incorrect"})
                    }
                })
            }else{
                return res.status(200).json({message:"No User Found "})
            }
        })
        .catch((error)=>{
            if(error){
                return res.status(404).json({message:"Internal Server Error"})
            }
        })
        

}
