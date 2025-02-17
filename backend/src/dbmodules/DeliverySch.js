import mongoose from "mongoose";

const DeliveryAccountSchema = new mongoose.Schema({
    Name:String,
    PhoneNo:Number,
    Location:String,
    EmergencyNo:Number,
    Password:String,
    timestamp: {
        type: Date,
        default: Date.now
      }

})

const DeliveryAccountModel = mongoose.model("DeliveryAccount",DeliveryAccountSchema)

export default DeliveryAccountModel;
