import { Request, Response, NextFunction } from "express"
import { validateToken } from "@/util/jwt"

export const authorize = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        let jwt = req.headers.authorization

        if (!jwt) return res.status(401).send("Invalid Token")

        if (jwt.toLowerCase().startsWith("bearer"))
            jwt = jwt.slice("bearer".length).trim()

        const decodedToken = await validateToken(jwt)
        req.body.token = decodedToken

        next()
    } catch (error: any) {
        if (error.name === "TokenExpiredError") {
            req.body.token = error.name
            next()
        } else {
            console.log(error)
            res.status(500).send("unknown authorization Error")
        }
    }
}
