import PantryAccountModel from '../dbmodules/PantrySch.js';
import { io } from '../index.js';

export const PantryDataVisibleAll = (req,res)=>{

    PantryAccountModel.find({})
    .then((data)=>{
        io.emit('PantryCreated', data);

        return res.status(200).json({ message: "Pantry details fetched successfully", data: data});
        
    })
    .catch(()=>{
       return res.status(404).json({message:"Failed to get Patient details"})
    })
}