import express from 'express'
import { CreatePantryAccountController } from '../contollers/PantryAccountCon.js';



const router = express.Router()

router.route('/').post(CreatePantryAccountController)

export default router;