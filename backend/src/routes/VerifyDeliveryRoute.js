import express from 'express'
import { VerifyDeliveryController } from '../contollers/VerifyDeliveryCon.js';



const router = express.Router()

router.route('/').get(VerifyDeliveryController)

export default router;