import OrdersModel from '../dbmodules/OrdersSch.js';
import { io } from '../index.js';

export const GetALLOrdersController =  (req,res)=>{
    
        const {PhoneNo} = req.body

        OrdersModel.find({"Pantry.PhoneNo":Number(PhoneNo)})
        .then((data)=>{
            io.emit('GetAllOrders', data);
        })
        .catch(()=>{
            console.log(err);
            res.status(505).json({message:"Internal Server Error"})
        })
}
