import express from 'express'
import { UpdateDeliveryDetailsCon } from '../contollers/DeliveryDetailsUpdate.js';



const router = express.Router()

router.route('/').post(UpdateDeliveryDetailsCon)

export default router;