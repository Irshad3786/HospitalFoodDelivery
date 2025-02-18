import DeliveryAccountModel from '../dbmodules/DeliverySch.js';
import { io } from '../index.js';

export const DeliveryDataAll = (req,res)=>{

    DeliveryAccountModel.find({})
    .then((data)=>{
        io.emit('DeliveryCreated', data);

        return res.status(200).json({ message: "Delivery details fetched successfully", data: data});
        
    })
    .catch(()=>{
       return res.status(404).json({message:"Failed to get Patient details"})
    })
}