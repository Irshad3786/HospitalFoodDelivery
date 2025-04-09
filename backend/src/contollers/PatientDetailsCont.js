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
                    PatientDetailsModel.find({})
                            .select('Name Diseases Allergies PhoneNo RoomNumber BedNumber FloorNumber Age Gender')  
                            .then((allPatientData) => {
                                io.emit('patientCreated', allPatientData);
                            })
                            .catch((err) => {
                                console.error("Error fetching patient data for socket emit:", err);
                            });
                    
                    return res.status(201).json({ message: "Patient Account Created Successfully" });
                })
            } 
        })
        .catch((err)=>{
            console.log(err);
            res.status(505).json({message:"Internal Server Error"})
            
        })
}
