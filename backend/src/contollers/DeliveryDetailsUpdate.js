import DeliveryAccountModel from '../dbmodules/DeliverySch.js';
import bcrypt from 'bcrypt'; 

export const UpdateDeliveryDetailsCon = (req,res)=>{
    const {Name,ContactInfo,Location,EmergencyNo,Password} = req.body
    
    
    if (!ContactInfo) {
        return res.status(400).json({ message: "Phone number is required." });
    }

    bcrypt.hash(Password, 10)
    .then((hashPassword)=>{
        DeliveryAccountModel.findOneAndUpdate({PhoneNo:ContactInfo},{Name: Name, PhoneNo: ContactInfo, Location:Location, EmergencyNo:EmergencyNo, Password: hashPassword},{ new: true, runValidators: true })
        .then(()=>{

            return res.status(200).json({ message: "Delivery details Updated successfully" });
        })
        .catch(()=>{
            return res.status(404).json({message:"Failed to get Update details"})
        })
    })
    .catch((error)=>{
        return res.status(404).json({message:"Failed to get Update details"})
    })


}
