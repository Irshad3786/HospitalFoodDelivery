import express from 'express'
import { ChangeDeliveryStatusController } from '../contollers/ChangeDeliveryStatusCon.js';


const router = express.Router()

router.route('/').post(ChangeDeliveryStatusController)

export default router;

