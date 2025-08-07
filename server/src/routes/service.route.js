import { Router } from "express";
import { Service } from "../models/services.model.js";

const router = Router()
router.route("/service").get(async (req,res,next)=>{
    try {
     const response = await Service.find()
     if(!response){
      return  res.status(404).json({
            message:"No Service found"
        })
     }

     res.status(200).json({
        msg:response
     })
    } catch (error) {
     next(error)   
    }
})








export default router