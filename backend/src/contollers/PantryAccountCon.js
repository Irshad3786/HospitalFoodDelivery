import PantryAccountModel from '../dbmodules/PantrySch.js';
import bcrypt from 'bcrypt'

export const CreatePantryAccountController =  (req,res)=>{
        
    
        const {PantryName,ContactInfo,Location,PantryNo,Password} = req.body
        
        PantryAccountModel.findOne({ $or:[{ PhoneNo: ContactInfo },{PantryNo}]}) 
        .then((PantryData) => {
            if (PantryData) {
                return res.status(409).json({ message: "Pantry No or Phone No already exists" });
            }
                bcrypt.hash(Password,10)
                .then((HashPassword)=>{
                        return PantryAccountModel.create({PantryName,ContactInfo,Location,PantryNo,Password:HashPassword})
                    })
                    .then(()=>{
                        res.status(201).json({message:"Pantry Account Created Successfully"})
                    })
                })
        .catch((err)=>{
            console.log(err);
            res.status(505).json({message:"Internal Server Error"})
            
        })
        
}
