import express from 'express'
import { SearchPatientCon } from '../contollers/PatientSearch.js';



const router = express.Router()

router.route('/').post(SearchPatientCon)

export default router;