import express from 'express'
import { LoginDeliveryAccountController } from '../contollers/DeliveryLogin.js';


const router = express.Router()

router.route('/').post(LoginDeliveryAccountController)

export default router;

