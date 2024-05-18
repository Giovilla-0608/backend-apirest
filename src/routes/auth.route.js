import { Router } from "express"
import { registro, login, logout, profile } from '../controllers/user.controller.js';
import { authRequired } from '../middlewares/validateToken.js'

const router = Router();

//peticiones
router.post('/register', registro)
router.post('/login', login)
router.post('/logout', logout)
router.get('/profile', authRequired, profile)

export default router;