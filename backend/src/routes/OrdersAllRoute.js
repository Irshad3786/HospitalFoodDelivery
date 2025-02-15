import express from 'express'
import { GetALLOrdersController } from '../contollers/GetAllOrdersCon.js';


const router = express.Router()

router.route('/').post(GetALLOrdersController)

export default router;