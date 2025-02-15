import OrdersModel from '../dbmodules/OrdersSch.js';
import { io } from '../index.js';

export const GetALLOrdersController =  (req,res)=>{
    
        const {PhoneNo} = req.body

        OrdersModel.find({"Pantry.PhoneNo":Number(PhoneNo)})
        .then((data)=>{
            if(data){
                return res.status(200).json({message:"orders found",data:data})
            } else {
                return res.status(404).json({ message: "No orders found" });
            }
        })
        .catch(()=>{
            console.log(err);
            res.status(505).json({message:"Internal Server Error"})
        })
}
