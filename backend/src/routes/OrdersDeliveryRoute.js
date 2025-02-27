import express from 'express'
import { DeliveryOrdersData } from '../contollers/AllOrdersDelivery.js'



const router = express.Router()

router.route('/').post(DeliveryOrdersData)

export default router;