import PatientDetailsModel from "../dbmodules/PatientDetailsSch.js"


export const SearchPatientCon = (req,res)=>{
    const {phoneNo} = req.body
    PatientDetailsModel.findOne({PhoneNo:Number(phoneNo)})
    .then((data)=>{

        return res.status(200).json({ message: "Patient details fetched successfully", data: data});
        
    })
    .catch(()=>{
       return res.status(404).json({message:"Failed to get Patient details"})
    })
}