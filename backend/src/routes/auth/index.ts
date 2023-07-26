import express, { Router, Request, Response, NextFunction } from "express"
import mongoose from "mongoose"

const router: Router = express.Router()

router.post(
    "/signIn",
    async (req: Request, res: Response, next: NextFunction) => {},
)
router.post(
    "/signUp",
    async (req: Request, res: Response, next: NextFunction) => {},
)
router.post(
    "/check",
    async (req: Request, res: Response, next: NextFunction) => {},
)
