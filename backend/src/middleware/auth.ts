import { Request, Response, NextFunction } from "express"
import { validateToken } from "@/util/jwt"
import { Jwt, JwtPayload } from "jsonwebtoken"

export const authorize =
    (allowedAccessTypes: string[]) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            let jwt = req.headers.authorization

            if (!jwt) return res.status(401).send("Invalid Token")

            if (jwt.toLowerCase().startsWith("bearer"))
                jwt = jwt.slice("bearer".length).trim()

            const decodedToken = await validateToken(jwt)

            next(decodedToken)
        } catch (error: any) {
            if (error.name === "TokenExpiredError")
                return res.status(401).send("Expired Token")
            else {
                res.status(500).send("unknown authorization Error")
            }
        }
    }
