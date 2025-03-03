import OrdersModel from '../dbmodules/OrdersSch.js';


export const CheckStatusDeliveryControler =  (req,res)=>{
    
        const {idData} = req.body

        

        OrdersModel.findOne({_id:idData})
        .then((finaldata)=>{
            if(finaldata){
                res.status(200).json({message:"data get successfully",data:finaldata})
            }
        })
        .catch(()=>{
            console.log(err);
            res.status(505).json({message:"Internal Server Error"})
        })
}
