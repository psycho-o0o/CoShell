import React, { useEffect, useState } from "react"
import { checkThunk } from "@/src/feature/user/thunk"
import { useAppDispatch, useAppSelector } from "@/hook/redux"
import { useRouter } from "next/router"
import { resetJwt, resetError } from "@/src/feature/user/slice"

export interface IChecckJWTProvider {
    children: React.ReactElement
}

export function CheckJWTProvider({
    children,
}: IChecckJWTProvider): React.ReactElement {
    const { jwt, error } = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()
    const router = useRouter()

    const [showChildren, setShowChildren] = useState(false)

    useEffect(() => {
        const { pathname } = router

        // 새로고침했을 때도 jwt 유지하기
        if (typeof window !== undefined) {
            const localStorageJWT = localStorage.getItem("jwt")

            if (error) {
                if (error === "token was expired") {
                    alert("인증이 만료되었습니다.")
                    dispatch(resetJwt())
                    dispatch(resetError())
                    router.push("/auth/signIn")
                    return
                }
            }

            if (localStorage && jwt) {
                if (["/auth/signIn", "/auth/signUp"].includes(pathname)) {
                    router.push("/dashboard")
                    return
                } else {
                    setShowChildren(true)
                }
            } else if (localStorageJWT && !jwt) {
                dispatch(checkThunk({ jwt: localStorageJWT }))
            } else if (!localStorageJWT && jwt) {
                localStorage.setItem("jwt", jwt)
            } else if (!localStorageJWT && !jwt) {
                if (["/", "/auth/signIn", "/auth/signUp"].includes(pathname)) {
                    setShowChildren(true)
                    return
                } else {
                    router.push("/auth/signIn")
                    return
                }
            }
        }
    }, [jwt, error, dispatch, router])

    return showChildren ? <>{children}</> : <></>
}
