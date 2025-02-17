import DeliveryAccountModel from '../dbmodules/DeliverySch.js';
import bcrypt from 'bcrypt';
import { io } from '../index.js';

export const CreateDeliveryAccountController = (req, res) => {
    const { Name, ContactInfo, Location, EmergencyNo, Password } = req.body;

    if (res.headersSent) {
        return;
    }

    
    DeliveryAccountModel.findOne({ 
        $or: [{ PhoneNo: ContactInfo }, { EmergencyNo: EmergencyNo }] 
    })
    .then((existingPantry) => {
        if (existingPantry) {
            return res.status(409).json({ message: "EmergencyNo or Phone No already exists" });
        }
        
        return bcrypt.hash(Password, 10);
        
        
    })
    .then((hashedPassword) => {

        if (!hashedPassword){
            return;
        } 
        
        return DeliveryAccountModel.create({ 
            Name: Name, 
            PhoneNo: ContactInfo, 
            Location, 
            EmergencyNo, 
            Password: hashedPassword 
        });
    })
    .then(() => {
     
        return DeliveryAccountModel.find({}).select('Name PhoneNo Location EmergencyNo');
    })
    .then((pantryData) => {
        // io.emit('PantryCreated', pantryData);

        if (!res.headersSent) {
        res.status(201).json({ message: "Delivery Account Created Successfully" });
        }
    })
    .catch((err) => {
        console.error(err);
        if (!res.headersSent) {
        res.status(505).json({ message: "Internal Server Error" });
        }
    });
};
