import express from 'express';

const router = express.Router();
import { SignUp, LogIn } from '../controllers/authController.js';

router.post('/signup', SignUp);
router.post('/login', LogIn);

export default router;
