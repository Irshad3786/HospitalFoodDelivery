import express from 'express'
import { UpdatePatientCon } from '../contollers/UpdatePatientDetailsCon.js';



const router = express.Router()

router.route('/').post(UpdatePatientCon)

export default router;