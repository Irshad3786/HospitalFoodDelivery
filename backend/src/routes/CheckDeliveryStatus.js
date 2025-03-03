import express from 'express'
import { CheckStatusDeliveryControler } from '../contollers/CheckStatus.js';


const router = express.Router()

router.route('/').post(CheckStatusDeliveryControler)

export default router;