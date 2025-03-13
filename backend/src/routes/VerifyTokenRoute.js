import express from 'express'
import { VeriftManagerController } from '../contollers/VerifyManager.js';



const router = express.Router()

router.route('/').get(VeriftManagerController)

export default router;