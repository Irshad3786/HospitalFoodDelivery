import express from 'express'
import { VeriftPantryController } from '../contollers/VerifyPantry.js';



const router = express.Router()

router.route('/').get(VeriftPantryController)

export default router;