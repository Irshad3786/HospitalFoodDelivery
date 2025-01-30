import ManagerAccountModel from "../dbmodules/ManagerAccountSch.js";
import bcrypt from 'bcrypt'

export const CreateManagerAccountController =  (req,res)=>{
    
        const {Name,Email,PhoneNo,EmpId,Password} = req.body

        const lowerCaseEmail = Email.toLowerCase();
        ManagerAccountModel.findOne({ $or:[{ Email: lowerCaseEmail },{PhoneNo}]}) 
        .then((managerData) => {
            if (managerData) {
                return res.status(409).json({ message: "Email or Phone already exists" });
            }
                bcrypt.hash(Password,10)
                .then((HashPassword)=>{
                        return ManagerAccountModel.create({Name,Email,PhoneNo,EmpId,Password:HashPassword})
                    })
                    .then(()=>{
                        res.status(201).json({message:"Manager Account Created Successfully"})
                    })

                })
        .catch((err)=>{
            console.log(err);
            res.status(505).json({message:"Internal Server Error"})
            
        })
        
}
