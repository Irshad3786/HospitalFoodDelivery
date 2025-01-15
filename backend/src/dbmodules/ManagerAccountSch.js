import mongoose from "mongoose";

const ManagerAccountSchema = new mongoose.Schema({
    Name:String,
    Email:String,
    PhoneNo:String,
    EmpId:String,
    Password:String,
    timestamp: {
        type: Date,
        default: Date.now
      }


})

const ManagerAccountModel = mongoose.model("ManagerAccount",ManagerAccountSchema)

export default ManagerAccountModel;
