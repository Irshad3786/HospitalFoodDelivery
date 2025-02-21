import express from 'express'
import { AddOrdersData } from '../contollers/AddOrdersCon.js';


const router = express.Router()

router.route('/').post(AddOrdersData)

export default router;