import {
    sign,
    SignOptions,
    verify,
    VerifyOptions,
    Jwt,
    JwtPayload,
} from "jsonwebtoken"
import * as fs from "fs"
import * as path from "path"

export interface IPayloadProps {
    name: string
    email: string
    birth?: string
}

export function generateToken(payload: IPayloadProps) {
    const privateKey = fs.readFileSync(
        path.join(__dirname, "./../../private.key"),
    )
    const signInOptions: SignOptions = {
        algorithm: "RS256",
        expiresIn: "1h",
    }
    return sign(
        payload,
        { key: privateKey, passphrase: "coshell" },
        signInOptions,
    )
}

export function validateToken(
    token: string,
): Promise<Jwt | JwtPayload | string | undefined> {
    const publicKey = fs.readFileSync(
        path.join(__dirname, "./../../public.key"),
    )

    const verifyOptions: VerifyOptions = {
        algorithms: ["RS256"],
    }

    return new Promise((resolve, reject) => {
        verify(token, publicKey, verifyOptions, (error, decoded) => {
            if (error) return reject(error)

            resolve(decoded)
        })
    })
}
