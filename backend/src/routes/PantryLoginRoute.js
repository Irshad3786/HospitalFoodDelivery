import express from 'express'
import { LoginPantryAccountController } from '../contollers/PantryLogin.js';


const router = express.Router()

router.route('/').post(LoginPantryAccountController)

export default router;

