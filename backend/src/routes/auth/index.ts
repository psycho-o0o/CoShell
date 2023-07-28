import express, { Router, Request, Response, NextFunction } from "express"

const authRouter: Router = express.Router()

authRouter.post(
    "/signIn",
    async (req: Request, res: Response, next: NextFunction) => {},
)
authRouter.post(
    "/signUp",
    async (req: Request, res: Response, next: NextFunction) => {
        const { name, email, password } = req.body
        console.log(req.body)

        if (email === "") {
            res.status(400).send("email is empty")
        } else if (name === "") {
            res.status(400).send("name is empty")
        } else if (password === "") {
            res.status(400).send("password is empty")
        } else {
            res.sendStatus(200)
        }
    },
)
authRouter.post(
    "/check",
    async (req: Request, res: Response, next: NextFunction) => {},
)

export default authRouter
