import PantryAccountModel from "../dbmodules/PantrySch.js";


export const SearchPantryCon = (req,res)=>{
    const {phoneNo} = req.body
    PantryAccountModel.findOne({PhoneNo:Number(phoneNo)})
    .then((data)=>{

        return res.status(200).json({ message: "Pantry details fetched successfully", data: data});
        
    })
    .catch(()=>{
       return res.status(404).json({message:"Failed to get Patient details"})
    })
}