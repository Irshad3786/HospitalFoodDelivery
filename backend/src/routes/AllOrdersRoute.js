import express from 'express'
import { OrdersDataVisibleAll } from '../contollers/AllOrders.js';


const router = express.Router()

router.route('/').get(OrdersDataVisibleAll)

export default router;