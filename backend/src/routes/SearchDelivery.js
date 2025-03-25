import express from 'express'
import { SearchDeliveryCon } from '../contollers/UpdateDeliveryCon.js';



const router = express.Router()

router.route('/').post(SearchDeliveryCon)

export default router;