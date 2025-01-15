import express from 'express'
import { CreateManagerAccountController } from '../contollers/ManagerAccountCont.js';



const router = express.Router()

router.route('/').post(CreateManagerAccountController)

export default router;