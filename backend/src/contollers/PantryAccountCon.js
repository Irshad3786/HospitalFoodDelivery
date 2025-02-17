import PantryAccountModel from '../dbmodules/PantrySch.js';
import bcrypt from 'bcrypt';
import { io } from '../index.js';

export const CreatePantryAccountController = (req, res) => {
    const { PantryName, ContactInfo, Location, PantryNo, Password } = req.body;


    if (res.headersSent) {
        return; 
    }
    
    PantryAccountModel.findOne({ 
        $or: [{ PhoneNo: ContactInfo }, { PantryNo: PantryNo }] 
    })
    .then((existingPantry) => {
        if (existingPantry) {
            return res.status(409).json({ message: "Pantry No or Phone No already exists" });
        }

        
        return bcrypt.hash(Password, 10);
    })
    .then((hashedPassword) => {
        if (!hashedPassword){
            return;
        } 
        return PantryAccountModel.create({ 
            Name: PantryName, 
            PhoneNo: ContactInfo, 
            Location, 
            PantryNo, 
            Password: hashedPassword 
        });
    })
    .then(() => {
     
        return PantryAccountModel.find({}).select('Name PhoneNo Location PantryNo');
    })
    .then((pantryData) => {
        io.emit('PantryCreated', pantryData);

        if (!res.headersSent) {
        res.status(201).json({ message: "Pantry Account Created Successfully" });
        }
    })
    .catch((err) => {
        console.error(err);
        if (!res.headersSent) {
        res.status(505).json({ message: "Internal Server Error" });
        }
    });
};
