import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import userRouter from './routes/user-routes.js'
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors());
app.use("/users",userRouter)
mongoose.connect(`mongodb+srv://sivamani:riddle@cluster0.pu6wp1p.mongodb.net/?retryWrites=true&w=majority`).then(()=>app.listen(4000,()=>console.log("connected to server with database"))).catch(e=>console.log(e));
