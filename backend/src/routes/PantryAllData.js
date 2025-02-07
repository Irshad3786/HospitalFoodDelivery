import express from 'express'
import { PantryDataVisibleAll } from '../contollers/PantryData.js';


const router = express.Router()

router.route('/').get(PantryDataVisibleAll)

export default router;