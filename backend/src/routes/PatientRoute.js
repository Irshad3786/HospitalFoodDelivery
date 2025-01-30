import express from 'express'
import { CreatePatientDetailsController } from '../contollers/PatientDetailsCont.js';



const router = express.Router()

router.route('/').post(CreatePatientDetailsController)

export default router;