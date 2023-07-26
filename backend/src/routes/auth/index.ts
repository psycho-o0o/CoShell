import express, { Router, Request, Response, NextFunction } from "express"
import mongoose from "mongoose"

const AuthRouter: Router = express.Router()

AuthRouter.post(
    "/signIn",
    async (req: Request, res: Response, next: NextFunction) => {},
)
AuthRouter.post(
    "/signUp",
    async (req: Request, res: Response, next: NextFunction) => {},
)
AuthRouter.post(
    "/check",
    async (req: Request, res: Response, next: NextFunction) => {},
)

export default AuthRouter
