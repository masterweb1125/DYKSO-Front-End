import bcrypt from "bcryptjs";
import { userModel } from "../model/user.model.js";
import jwt from "jsonwebtoken";

import { SignIn_validate, SignUp_validate } from "../Schema_validation/auth.validation.js";
import dotenv from "dotenv";
dotenv.config();


export const SignUp = async (
 req, res
) => {
  // first we need to validate the data before saving it in DB
  const { error } = SignUp_validate(req.body);
  if (error) return res.send(error.details[0].message);

  console.log(req.body);
  const { name, email, password } = req.body;
  // encrypt password by using bcrypt algorithm
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  try {
    const verifyEmail = await userModel.findOne({ email });

    //checking EMAIL VALIDATION / DUPLICATION
    if (!verifyEmail) {
      const createUser = new userModel({
          name: name,
          email: email,
        password: hash,
      });
      await createUser.save();
      const token = jwt.sign(
        {
          name: name,
          email: email,
        },
        "token_secret_key"
      );
      res.status(200).json({success: true, status: 200, data: createUser, token: token});
    } else {
      res.status(400).json({success: false, status: 400, data: "email address has already registered!" }); send();
    }
  } catch (err) {
    // next(err);
    res.status(500).json({
      status: 500,
      success: false,
      message: err,
    });
  }
};

// ----- sign in -----
export const SignIn = async (
 req, res
) => {
  // first we need to validate the data before saving it in DB
  const { error } = SignIn_validate(req.body);
  if (error) return res.status(400).json({message: error.details[0].message, success: false, status: 400});
  console.log(req.body);
  try {
    const User= await userModel.findOne({ email: req.body.email });
    if (!User)
      return res.status(404).json({
        status: 404,
        success: false,
        message: "User is not found!",
      });
    //   now checking password
    const isCorrect = await bcrypt.compare(
      req.body.password,
      User.password
    );
    // if the password is wrong.
    if (!isCorrect)
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Password is incorrect",
      });

    
    const token = jwt.sign(
      {
        id: User._id,
        name: User.name,
        email: User.email,
      },
      "token_secret_key"
    );

    const { password, ...detail } = User._doc;
    res
      .status(200)
      .json({
        success: true,
        status: 200,
        data: detail,
        token: token,
      });
  } catch (error) {
    next(error);
  }
};


