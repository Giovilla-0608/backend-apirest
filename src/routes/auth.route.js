import { Router } from "express"
import { register, login, logout, profile } from '../controllers/user.controller.js';
import { authRequired } from '../middlewares/validateToken.js'
import {validateSchema} from '../middlewares/validatorMiddleware.js'
import { loginSchema, registerSchema } from "../schemas/user.schema.js";

const router = Router();

//peticiones
router.post('/register', validateSchema(registerSchema), register)
router.post('/login', validateSchema(loginSchema), login)
router.post('/logout', logout)
router.get('/profile',authRequired ,profile)

export default router;