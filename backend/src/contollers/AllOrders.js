import OrdersModel from '../dbmodules/OrdersSch.js';
import { io } from '../index.js';

export const OrdersDataVisibleAll = (req,res)=>{

    OrdersModel.find({})
    .then((data)=>{
        io.emit('OrderCreated', data);

        return res.status(200).json({ message: "All Orders fetched successfully", data: data});
        
    })
    .catch(()=>{
       return res.status(404).json({message:"Failed to get Order details"})
    })
}