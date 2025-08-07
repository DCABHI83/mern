import { Router } from "express";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
const router = Router();

router.route("/users").get(async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
         return res.status(401).json({
        message: "unauthorized HTTP,Token not provided",
      });
    }

    const jwtToken = token.replace("Bearer", "").trim();
    const isVerified = jwt.verify(jwtToken, process.env.SECRET_KEY);
   
    const users = await User.find().select("-password");
    if (isVerified.isAdmin) {
      res.status(200).json({
        message: "Admin verified",
        users,
      });
    } else {
      return res.status(403).json({
        message: "Access denied. User is not an admin",
      });
    }
  } catch (error) {
    next(error);
  }
});

router.route("/users/delete/:id").delete(async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({
        message: "unauthorized HTTP,Token not provided",
      });
    }
    const jwtToken = token.replace("Bearer", "").trim();
    const isverified = jwt.verify(jwtToken, process.env.SECRET_KEY);
    if (!isverified.isAdmin) {
      return res.status(403).json({
        message: "Access Denied,Unauthorized access",
      });
    }
    const id = req.params.id;
    const deletedUser = await User.deleteOne({ _id: id });
    if (deletedUser.deletedCount === 0) {
      return res.status(404).json({
        message: "User not Found",
      });
    } else {
      return res.status(200).json({
        message: "USer deleted Successfully",
        deletedUser,
      });
    }
  } catch (error) {
    next(error);
  }
});



//update user

router.route("/admin/update/:id").patch(async (req, res, next) => {
 try {
     const token = req.header("Authorization");
     const jwtToken = token.replace("Bearer","").trim();
     const isverified = jwt.verify(jwtToken, process.env.SECRET_KEY);
     if (!isverified.isAdmin) {
       return res.status(403).json({
         message: "Unauthorized Access",
       });
     }
     const id = req.params.id;
     const updatedUserData = req.body;
     const updateUser = await User.updateOne(
       {
         _id: id,
       },
       {
         $set: updatedUserData,
       }
     );

     return res.status(200).json({
        message:"User updated Successfully",
        updateUser
     })
 } catch (error) {
    next(error)
 }

});

export default router;
