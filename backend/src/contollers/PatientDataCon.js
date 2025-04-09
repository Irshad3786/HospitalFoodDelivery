import PatientDetailsModel from "../dbmodules/PatientDetailsSch.js"
import { io } from '../index.js';

export const DataVisibleAll = (req,res)=>{

    PatientDetailsModel.find({})
    .then((data)=>{
        console.log(data);
        
        io.emit('patientCreated', data);

        return res.status(200).json({ message: "Patient detailes fetched successfully", data: data});
        
    })
    .catch(()=>{
       return res.status(404).json({message:"Failed to get Patient details"})
    })
}