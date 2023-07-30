import UserSchema from "@/db/model/user"
import express, { Router, Request, Response, NextFunction } from "express"
import mongoose from "mongoose"
import { generateToken } from "@/util/jwt"
import { authorize } from "@/middleware/auth"
import { comparePassword, makeHashPassword } from "@/util/password"

const authRouter: Router = express.Router()

export interface MongoError {
    name: string
    code: number
}

authRouter.post("/signIn", async (req: Request, res: Response) => {
    const { email, password } = req.body

    if (email === "") {
        return res.status(401).send("email is empty")
    } else if (password === "") {
        return res.status(401).send("password is empty")
    }

    const userModel = mongoose.model("User", UserSchema)

    try {
        const user = await userModel.findOne({ email })

        if (user) {
            const payload = {
                name: user.name,
                email: user.email,
                birth: user.birth ?? undefined,
            }
            if (comparePassword(password, user.password)) {
                return res.status(200).send({
                    ...payload,
                    jwt: generateToken(payload),
                })
            } else {
                return res.status(401).send("password is invalid")
            }
        } else {
            console.log(1)
            return res.status(401).send("there is no user")
        }
    } catch (e) {
        console.log(e)
    }
})
authRouter.post("/signUp", async (req: Request, res: Response) => {
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
            password: makeHashPassword(password),
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
})

interface ITokenProps {
    name: string
    email: string
    birth?: string
    iat: number
    exp: number
}

authRouter.get("/check", authorize, async (req: Request, res: Response) => {
    const token = req.body.token as ITokenProps | string

    if (token === "TokenExpiredError") {
        return res.status(401).send("token was expired")
    }

    if (typeof token !== "string") {
        res.send({
            name: token.name,
            email: token.email,
            birth: token.birth && null,
        })
    }
})

export default authRouter
