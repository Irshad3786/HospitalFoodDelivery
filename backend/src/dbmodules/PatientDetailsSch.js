import mongoose from "mongoose";

const PatientDetailsSchema = new mongoose.Schema({
    Name:String,
    Diseases:String,
    Allergies:String,
    RoomNumber:Number,
    BedNumber:Number,
    FloorNumber:Number,
    Age:Number,
    PhoneNo:Number,
    EmergencyContact:Number,
    Gender:String,
    timestamp: {
        type: Date,
        default: Date.now
      }


})

const PatientDetailsModel = mongoose.model("PatientDetails",PatientDetailsSchema)

export default PatientDetailsModel;
