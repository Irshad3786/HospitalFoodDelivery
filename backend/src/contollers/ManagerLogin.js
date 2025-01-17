import ManagerAccountModel from "../dbmodules/ManagerAccountSch.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const LoginManagerAccountController =  (req,res)=>{
    
        const {Email,Password} = req.body

        if(!Email || !Password){
            return res.status(409).json({message:"No Email Or Password"})
        }

        ManagerAccountModel.findOne({Email:Email})
        .then((Res)=>{
            if(Res){
                bcrypt.compare(Password,Res.Password)
                .then((data)=>{
                    if(data){
                        const ManagerToken = jwt.sign({Email:Res.Email}, process.env.JWTCODE,{expiresIn:"1d"})
                        
                            if(ManagerToken){
                                 res.cookie("ManagerToken",ManagerToken,{
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
