import express from 'express'
import { LoginManagerAccountController } from '../contollers/ManagerLogin.js';


const router = express.Router()

router.route('/').post(LoginManagerAccountController)

export default router;