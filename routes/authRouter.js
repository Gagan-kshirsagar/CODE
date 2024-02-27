// import { Router } from "express";

// import { register } from '../controller/AuthController.js'

// const router = Router()

// router.post('/register',register)

// // router.post('/login',login)

// export default router


import { Router } from 'express';
import { register, login, logout } from '../controller/AuthController.js';
import { validateLoginInput, validateRegisterInput } from '../middleware/validationMiddleware.js';
const router = Router();

router.post('/register', validateRegisterInput, register);
router.post('/login', validateLoginInput, login);
router.get('/logout', logout)

export default router;