import mongoose from "mongoose";
import { type } from "os";

const DeliveryAccountSchema = new mongoose.Schema({
    Name:String,
    PhoneNo:Number,
    Location:String,
    EmergencyNo:Number,
    Password:String,
    Status:{
      type:String,
      default:"Available"
    },
    Orders: [{
      type: Object,
      default:{Message:"no Orders"}
  }],
    timestamp: {
        type: Date,
        default: Date.now
      }

})

const DeliveryAccountModel = mongoose.model("DeliveryAccount",DeliveryAccountSchema)

export default DeliveryAccountModel;
