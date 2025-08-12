import { Router } from "express";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = Router();


//authentication 
router.route('/user').get(async(req,res,next)=>{
try {
  const token = req.header("Authorization")
  if(!token){
    return res.status(401).json({
      message:"unauthorized HTTP,Token not provided"
    })
  }
    const jwtToken = token.replace("Bearer","").trim()
 const isverified = jwt.verify(jwtToken,process.env.SECRET_KEY)
  const userData = await User.findOne({email : isverified.email}).select("-password -phone")

  res.json({
    userData,
    Message:"data sent"
  })
} catch (error) {
  next(error)
}
})

//register
router.route("/register").post(async (req, res, next) => {
  const { username, email, password, avatar,phone } =  req.body;
  // console.log(req.body);
  if (!email || !username || !password ||!phone) {
    next(new Error("All fields are required"));
    return;
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      phone
    });
  return  res.status(201).json({
      message: "user is created succerssfully",
    });
  } catch (error) {
    next(error);
  }
});

// login
router.route("/login").post(async (req, res, next) => {
  const { email, password } = await req.body;
  const user = await User.findOne({
    email,
  });
  if (!user) {
    const error = new Error("Invalid credentials");
    error.statusCode = 400;
    next(error);
    return;
  }
  const matched = await bcrypt.compare(password, user.password);

  if (!matched) {
    const error = new Error("Invalid credentials");
    error.statusCode = 400;
    next(error);
    return;
  }
  const token = jwt.sign(
    {
      id: user._id,
      email:user.email,
      username:user.username,
      isAdmin:user.isAdmin
    },
    process.env.SECRET_KEY,
    {
      expiresIn: process.env.TOKEN_EXPIRY,
    }
  );

return  res.json({ token, message: "login successfull", id: user._id });
});



export default router;
