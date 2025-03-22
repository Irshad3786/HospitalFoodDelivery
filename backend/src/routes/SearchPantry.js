import express from 'express'
import { SearchPantryCon } from '../contollers/SearchPantry.js';



const router = express.Router()

router.route('/').post(SearchPantryCon)

export default router;