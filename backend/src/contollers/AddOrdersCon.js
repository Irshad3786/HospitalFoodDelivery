import DeliveryAccountModel from "../dbmodules/DeliverySch.js";
import OrdersModel from "../dbmodules/OrdersSch.js";

import { io } from '../index.js';

export const AddOrdersData = (req,res)=>{

    const {Delivery,orders} = req.body;

    

    DeliveryAccountModel.findOne({PhoneNo:Delivery.PhoneNo})
    .then((data)=>{
        if(data){
            DeliveryAccountModel.updateOne(
                { PhoneNo: Delivery.PhoneNo },
                { $push: { Orders: orders } } 
              )
            DeliveryAccountModel.updateOne({PhoneNo:Delivery.PhoneNo},{"$set": {"Status": "Unavailable"}})
            .then(()=>{
                DeliveryAccountModel.find({})
                .then((finaldata)=>{
                    io.emit('DeliveryCreated', finaldata);
                    OrdersModel.updateMany({_id:orders._id},{"$set": {"DeliveryName": Delivery.Name,"DeliveryPhoneNo": Delivery.PhoneNo}})
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