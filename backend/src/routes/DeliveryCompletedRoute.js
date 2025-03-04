import express from 'express'
import { DeliveryCompletedControler } from '../contollers/DeliveryCompletedCon.js';



const router = express.Router()

router.route('/').post(DeliveryCompletedControler)

export default router;