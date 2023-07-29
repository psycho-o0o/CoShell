import UserSchema from "@/db/model/user"
import express, { Router, Request, Response, NextFunction } from "express"
import mongoose from "mongoose"
import { generateToken } from "@/util/jwt"

const authRouter: Router = express.Router()

export interface MongoError {
    name: string
    code: number
}

authRouter.post(
    "/signIn",
    async (req: Request, res: Response, next: NextFunction) => {},
)
authRouter.post(
    "/signUp",
    async (req: Request, res: Response, next: NextFunction) => {
        const { name, email, password } = req.body

        if (email === "") {
            return res.status(401).send("email is empty")
        } else if (name === "") {
            return res.status(401).send("name is empty")
        } else if (password === "") {
            return res.status(401).send("password is empty")
        }

        const userModel = mongoose.model("User", UserSchema)

        try {
            await new userModel({
                name: name,
                email: email,
                password: password,
            }).save()
            const jwt = generateToken({
                name: name,
                email: email,
            })
            return res.status(200).send({
                jwt,
            })
        } catch (err: any | MongoError) {
            if (err.name === "MongoServerError" && err.code === 11000) {
                return res.status(401).send("user already exists.")
            } else {
                console.log(err)
            }
        }
    },
)
authRouter.post(
    "/check",
    async (req: Request, res: Response, next: NextFunction) => {},
)

export default authRouter
