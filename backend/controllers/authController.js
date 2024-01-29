import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import userModel from '../models/userModel.js';

//Sign Up
export const SignUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(req.body);

  try {
    const saltedHashedPassword = await bcrypt.hash(password, 14);
    const newUser = await userModel.create({
      firstName,
      lastName,
      email,
      password: saltedHashedPassword,
    });

    res.status(201).send({ success: true, insertedData: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, error: error.message });
  }
};

//Log In
/**
 * @param {import('express').Request} req - The request object.
 * @param {import('express').Response} res - The response object.
 */
export const LogIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const loggedUser = await userModel.findOne({ email: email });

    if (!loggedUser) {
      return res.send({
        success: false,
        error: 'User/Password Combination not found',
      });
    }

    const isCorrectPassword = await bcrypt.compare(
      password,
      loggedUser.password
    );

    if (!isCorrectPassword) {
      return res.send({
        success: false,
        error: 'User/Password Combination not found',
      });
    }

    const expiresInMs = 24 * 60 * 60 * 1000;

    const expiresInDate = new Date(Date.now() + expiresInMs);

    const token = jwt.sign({ userId: loggedUser._id }, process.env.JWT_SECRET, {
      expiresIn: expiresInMs,
    });

    const cookieOptions = {
      httpOnly: true,
      maxAge: expiresInMs,
    };

    res.cookie('jwt', token, cookieOptions);

    const options = {
      maxAge: expiresInMs,
    };
    const payload = {
      expires: expiresInDate.toISOString(),
      userID: loggedUser._id,
    };
    res.cookie('JWTinfo', payload, options);

    return res.send({
      success: true,
      msg: `User ${loggedUser._id} logged in`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, error: error.message });
  }
};
