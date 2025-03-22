import express from 'express'
import { UpdatePantryCon } from '../contollers/UpdatePantry.js';



const router = express.Router()

router.route('/').post(UpdatePantryCon)

export default router;