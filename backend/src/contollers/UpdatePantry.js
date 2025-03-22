import PantryAccountModel from "../dbmodules/PantrySch.js";
import bcrypt from 'bcrypt'; 

export const UpdatePantryCon = (req,res)=>{
    const {PantryName,ContactInfo,Location,PantryNo,Password} = req.body
    
    
    if (!ContactInfo) {
        return res.status(400).json({ message: "Phone number is required." });
    }

    bcrypt.hash(Password, 10)
    .then((hashPassword)=>{
        PantryAccountModel.findOneAndUpdate({PhoneNo:ContactInfo},{Name: PantryName, PhoneNo: ContactInfo, Location, PantryNo, Password: hashPassword},{ new: true, runValidators: true })
        .then(()=>{

            return res.status(200).json({ message: "Pantry details Updated successfully" });
        })
        .catch(()=>{
            return res.status(404).json({message:"Failed to get Update details"})
        })
    })
    .catch((error)=>{
        return res.status(404).json({message:"Failed to get Update details"})
    })


}
