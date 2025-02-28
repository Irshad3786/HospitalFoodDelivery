import OrdersModel from '../dbmodules/OrdersSch.js';
import { io } from '../index.js';

export const ChangeDeliveryStatusController =  (req,res)=>{
    
        const {_id} = req.body

        OrdersModel.updateOne({_id:_id},{"$set": {"Status": "Order accepted, out for delivery."}})
        .then((data)=>{

            if(data){
                OrdersModel.find({})
                .then((dataval)=>{
                    io.emit('OrderCreated', dataval);
                })
                .catch((error)=>{
                    console.log(error);
                })
                
                return res.status(505).json({message:"Order Status Changed Successfully"})
            }
        })
        .catch(()=>{
            console.log(err);
            res.status(505).json({message:"Internal Server Error"})
        })
}
