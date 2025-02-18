import express from 'express'
import { DeliveryDataAll } from '../contollers/ALLDeliveryData.js';


const router = express.Router()

router.route('/').get(DeliveryDataAll)

export default router;