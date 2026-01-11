import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import MessageRouter from './routes/MessageRouter'
const app = express()
app.use(express.json())
app.use(cors({
    origin:"*",
    methods: ["GET","POST",'DELETE','PUT'],
    credentials:true
}))
app.use(cookieParser())
app.use("/api",MessageRouter)
const PORT:number = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})