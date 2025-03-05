import DeliveryAccountModel from '../dbmodules/DeliverySch.js';
import OrdersModel from '../dbmodules/OrdersSch.js';
import { io } from '../index.js';

export const DeliveryCompletedControler =  (req,res)=>{
    
        const {_id,deliveryid} = req.body
        
        OrdersModel.deleteOne({_id:_id})
        .then(()=>{

            DeliveryAccountModel.updateOne({ _id: deliveryid }, { $set: { Orders: [] } })
            .then((data)=>{

                OrdersModel.find({})
                .then((finaldataone)=>{
                    io.emit('OrderCreated', finaldataone);

                    DeliveryAccountModel.findOne({_id:deliveryid})
                    .then((data)=>{
                        io.emit('OrderData', data);
                    })

                    OrdersModel.find({})
                    .then((data)=>{
                        io.emit('GetAllOrders', data);
                    })

                })

                if(data){
                    return res.status(200).json({message:"orders deleted",data:data})
                } else {
                    return res.status(404).json({ message: "No orders found" });
                }
            })
        })
        .catch(()=>{
            console.log(err);
            res.status(500).json({message:"Internal Server Error"})
        })
}
