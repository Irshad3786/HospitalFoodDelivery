import PatientDetailsModel from "../dbmodules/PatientDetailsSch.js"


export const UpdatePatientCon = (req,res)=>{
    const {Name,Diseases,Allergies,RoomNumber,BedNumber,FloorNumber,Age,PhoneNo,EmergencyContact,Gender} = req.body
    PatientDetailsModel.findOneAndUpdate({PhoneNo},{Name,Diseases,Allergies,RoomNumber,BedNumber,FloorNumber,Age,PhoneNo,EmergencyContact,Gender},{ new: true, runValidators: true })
    .then(()=>{

            return res.status(200).json({ message: "Patient details Updated successfully" });
            
    })
    .catch(()=>{
       return res.status(404).json({message:"Failed to get Update details"})
    })
}