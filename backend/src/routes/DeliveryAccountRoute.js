import express from 'express'
import { CreateDeliveryAccountController } from '../contollers/DeliveryAccountCon.js';



const router = express.Router()

router.route('/').post(CreateDeliveryAccountController)

export default router;