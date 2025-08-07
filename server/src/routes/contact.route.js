import { Router } from "express";
import { Contact } from "../models/contact.model.js";
const router = Router();

router.route("/contact").post(async (req, res, next) => {
  try {
    const { username, email, message } = req.body;
    if (!username || !email || !message) {
      const error = new Error("All Fields are required");
      const statusCode = error.statusCode;
      next(error);
      return;
    }
    const contact = Contact.create({
      username,
      email,
      message,
    });

    res.status(200).json({
      message: "sent successfully",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
