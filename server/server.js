import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import userRouter from './src/routes/user.route.js'
import contactRouter from './src/routes/contact.route.js'
import serviceRouter from './src/routes/service.route.js'
import adminRouter from './src/routes/admin.route.js'
import contactDataRouter from './src/routes/contacts.route.js'
import { connectDB } from './src/db/index.js'
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1',userRouter)
app.use('/api/v1',contactRouter)
app.use('/api/v1',serviceRouter)
app.use('/api/v1',adminRouter)
app.use('/api/v1',contactDataRouter)


connectDB()

app.use((err,req,res,next)=>{
   console.error(err.stack)
   const statusCode = err.statusCode || 500

   res.status(statusCode).json({
    message:err.message
   })
})

app.use("*",(req,res)=>{
    res.status(404).json({
        message:"Route not found"
    })
})

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`)
})