import mongoose from "mongoose";

const PantryAccountSchema = new mongoose.Schema({
    Name:String,
    PhoneNo:Number,
    Location:String,
    PantryNo:Number,
    Password:String,
    timestamp: {
        type: Date,
        default: Date.now
      }

})

const PantryAccountModel = mongoose.model("PantryAccount",PantryAccountSchema)

export default PantryAccountModel;
