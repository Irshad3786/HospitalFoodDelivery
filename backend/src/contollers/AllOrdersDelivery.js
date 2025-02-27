import DeliveryAccountModel from '../dbmodules/DeliverySch.js';
import { io } from '../index.js';

export const DeliveryOrdersData = (req,res)=>{

    const {PhoneNo} = req.body

    DeliveryAccountModel.findOne({PhoneNo:Number(PhoneNo)})
    .then((data)=>{
        io.emit('OrderData', data);

        return res.status(200).json({ message: " Orders fetched successfully", data: data});
        
    })
    .catch(()=>{
       return res.status(404).json({message:"Failed to get Order details"})
    })
}