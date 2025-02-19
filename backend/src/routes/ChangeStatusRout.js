import express from 'express'
import { ChangeOrderStatusController } from '../contollers/ChangeOrderStatus.js';


const router = express.Router()

router.route('/').post(ChangeOrderStatusController)

export default router;