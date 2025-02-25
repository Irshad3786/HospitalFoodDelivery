import DeliveryAccountModel from "../dbmodules/DeliverySch.js";
import OrdersModel from "../dbmodules/OrdersSch.js";

import { io } from '../index.js';

export const AddOrdersData = (req,res)=>{

    const {Delivery,orders} = req.body;

    

    DeliveryAccountModel.findOne({PhoneNo:Delivery.PhoneNo})
    .then((data)=>{
        if(data){
            return DeliveryAccountModel.updateOne({ PhoneNo: Delivery.PhoneNo },{ $push: { Orders: orders } } )
            .then(()=>{
               return DeliveryAccountModel.updateOne({PhoneNo:Delivery.PhoneNo},{"$set": {"Status": "Unavailable"}})
            })
            .then(()=>{
               return  DeliveryAccountModel.find({})
                .then((finaldata)=>{
                    io.emit('DeliveryCreated', finaldata);
                    return  OrdersModel.updateMany({_id:orders._id},{"$set": {"DeliveryName": Delivery.Name,"DeliveryPhoneNo": Delivery.PhoneNo}})
                    .then(()=>{
                        return OrdersModel.updateOne({_id:orders._id},{"$set": {"Status": "Yet to Deliver"}})
                    })
                    .then(()=>{
                        OrdersModel.find({})
                        .then((data)=>{
                            io.emit('OrderCreated', data);
                        })
                        return  res.status(200).json({ message: 'Orders added successfully' });
                    })
                    
                })
                
            })
        }
    })
    .catch((err)=>{
        console.log(err);
        return res.status(505).json({message:"Internal Server Error"})
    })
    

}