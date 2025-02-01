import PatientDetailsModel from '../dbmodules/PatientDetailsSch.js';
import { io } from '../index.js';

export const CreatePatientDetailsController =  (req,res)=>{
    
        const {Name,Diseases,Allergies,RoomNumber,BedNumber,FloorNumber,Age,PhoneNo,EmergencyContact,Gender} = req.body
        PatientDetailsModel.findOne({PhoneNo}) 
        .then((PatientData) => {
            if (PatientData) {
                return res.status(409).json({ message: " PhoneNo already exists" });
            }else{
                return PatientDetailsModel.create({Name,Diseases,Allergies,RoomNumber,BedNumber,FloorNumber,Age,PhoneNo,EmergencyContact,Gender})
                .then((patientDetails)=>{
                    res.status(201).json({message:"Patient Account Created Successfully"})
                    const AllPatientData = PatientDetailsModel.find({})
                    io.emit('patientCreated',AllPatientData);
                })
            } 
        })
        .catch((err)=>{
            console.log(err);
            res.status(505).json({message:"Internal Server Error"})
            
        })
}
