import ManagerAccountModel from "../dbmodules/ManagerAccountSch.js";

export const CreateManagerAccountController = async (req,res)=>{
    try {
        const {Name,Email,PhoneNo,EmpId,Password} = req.body
        
        console.log(Name,Email,PhoneNo,EmpId,Password);
        

    } catch (error) {
        console.log("Error at" , error);
        
    }
    
}
