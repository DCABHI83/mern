import { Router } from "express";
import { Contact } from "../models/contact.model.js";
import jwt from "jsonwebtoken";
const router = Router();

router.route("/contacts").get(async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({
        message: "unauthorized HTTP,Token not provided",
      });
    } else {
      const jwtToken = token.replace("Bearer", "").trim();
      const isVerified = jwt.verify(jwtToken, process.env.SECRET_KEY);
      if (isVerified) {
        const userContacts = await Contact.find();
        if (!userContacts || userContacts.length === 0) {
          return res.status(404).json({
            message: "No data found",
          });
        }
        return res.status(200).json({
          userContacts,
        });
      }
    }
  } catch (error) {
    next(error);
  }
});

router.route("/admin/contacts/:id").delete(async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({
        message: "unauthorized HTTP,Token not provided",
      });
    }
    const jwtToken = token.replace("Bearer", "").trim();
    const isVerified = jwt.verify(jwtToken, process.env.SECRET_KEY);
    if (!isVerified) {
      return res.status(403).json({
        message: "Access Denied,Unauthorized access",
      });
    }
    const id = req.params.id;
    //  console.log(id)
    const userContact = await Contact.deleteOne({ _id: id });
    if (userContact.deletedCount === 0) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }
    res.status(200).json({
      message: "message deleted successfully",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
