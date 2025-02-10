import mongoose from "mongoose";

const OrdersSchema = new mongoose.Schema({
    Shift:String,
    Patient:{
        type:Object,
        required:true

    },
    FoodItem:String,
    SpecificFoodItem:{
        type:String,
        default:'NA'
    },
    Ingredients:{
        type:String,
        default:'NA'
    },
    Pantry:{
        type:Object,
        required:true
    },
    Status:{
        type:String,
        default:'Order Not Accepted'
    },
    timestamp: {
        type: Date,
        default: Date.now
      }


})

const OrdersModel = mongoose.model("Orders",OrdersSchema)

export default OrdersModel;
