import OrdersModel from '../dbmodules/OrdersSch.js';
import { io } from '../index.js';

export const CreateOrderController =  (req,res)=>{
    
        const {Shift,selectedPatient,selectedFood,SpecificItems,AddIngredents,PantrySelected} = req.body
        
        OrdersModel.create({Shift:Shift,Patient:selectedPatient,FoodItem:selectedFood,SpecificFoodItem:SpecificItems,Ingredients:AddIngredents,Pantry:PantrySelected})
        .then(()=>{
            OrdersModel.find({})
            .then((data)=>{
                io.emit('OrderCreated', data);
            })
            .catch((error)=>{
                console.log(error)
            })
            
            return res.status(200).json({message:"Order Placed successfully"})
        })
        .catch((error)=>{
            console.log(error);
            res.status(505).json({message:"Internal Server Error"})
        })
        
}