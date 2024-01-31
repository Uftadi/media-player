import express from 'express';

const router = express.Router();
import { SignUp, LogIn, Logout } from '../controllers/authController.js';
import { signupSchema } from '../middlewares/validate-schema.js';
import { validateSchema } from '../schemas/signUp-schema.js';
import isAuth from '../middlewares/isAuth.js';

router.post('/signup', signupSchema, validateSchema, SignUp);
router.post('/login', LogIn);
router.post('/isAuth', isAuth);
router.post('/logout', Logout);

export default router;
