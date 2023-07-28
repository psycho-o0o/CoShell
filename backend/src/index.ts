import express, { Express } from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import authRouter from "@/routes/auth"

dotenv.config()

const app: Express = express()
const port = process.env.PORT

const corsOptions = {
    origin: "*",
    credential: true,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/auth", authRouter)

const connectDB = async () => {
    const database = "CoShell"
    try {
        await mongoose.connect(
            `mongodb://${process.env.DB_ADDR}/${database}` as string,
        )
        console.log("MongoDB Connected")
    } catch (e) {
        console.log("Failed to Connect to MongoDB", e)
    }
}

connectDB()

app.listen(port, () => {
    try {
        console.log(`[server] : Server is running at https:${port}`)
    } catch (e) {
        console.log(e)
    }
})
