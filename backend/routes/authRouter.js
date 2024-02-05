import express from 'express';
import { SignUp, LogIn, Logout } from '../controllers/authController.js';
import { signupSchema, logInSchema } from '../middlewares/validate-schema.js';
import { validateSchema } from '../schemas/signUp-schema.js';
import isAuth from '../middlewares/isAuth.js';

const router = express.Router();

router.post('/signup', signupSchema, validateSchema, SignUp);
router.post('/login', logInSchema, validateSchema, LogIn);
router.post('/isAuth', isAuth);
router.post('/logout', Logout);

export default router;
