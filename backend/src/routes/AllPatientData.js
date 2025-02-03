import express from 'express'
import { DataVisibleAll } from '../contollers/PatientDataCon.js';


const router = express.Router()

router.route('/').get(DataVisibleAll)

export default router;