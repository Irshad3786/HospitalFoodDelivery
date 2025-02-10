import express from 'express'
import { CreateOrderController } from '../contollers/OrdersCon.js';


const router = express.Router()

router.route('/').post(CreateOrderController)

export default router;