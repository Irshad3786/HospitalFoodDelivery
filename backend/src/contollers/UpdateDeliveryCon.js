import DeliveryAccountModel from "../dbmodules/DeliverySch.js";


export const SearchDeliveryCon = (req,res)=>{
    const {phoneNo} = req.body
    DeliveryAccountModel.findOne({PhoneNo:Number(phoneNo)})
    .then((data)=>{

        return res.status(200).json({ message: "Delivery details fetched successfully", data: data});
        
    })
    .catch(()=>{
       return res.status(404).json({message:"Failed to get Delivery details"})
    })
}

