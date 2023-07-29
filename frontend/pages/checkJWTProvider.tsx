import { AppStore } from "@/src/util/redux/store"
import { NextRouter } from "next/router"
import React, { useEffect, useState } from "react"

export interface IChecckJWTProvider {
    store: AppStore
    router: NextRouter
    children: React.ReactElement
}

export function CheckJWTProvider({
    store,
    router,
    children,
}: IChecckJWTProvider): React.ReactElement {
    const [showChildren, setShowChildren] = useState(false)

    useEffect(() => {
        const state = store.getState()
        let { jwt } = state.user
        const { pathname } = router

        // 새로고침했을 때도 jwt 유지하기
        if (typeof window !== undefined) {
            const localJWT = localStorage.getItem("jwt")

            if (jwt) localStorage.setItem("jwt", jwt)
            else {
                if (localJWT) jwt = localJWT
            }
        }

        // jwt가 없을경우
        if (jwt === null) {
            if (["/", "/auth/signIn", "/auth/signUp"].includes(pathname)) {
                setShowChildren(true)
                return
            } else {
                router.push("/")
                return
            }
        } else {
            // jwt가 있을경우
            // jwt가 유효한 경우
            if (true) {
                setShowChildren(true)
                return
            } else {
                router.push("/auth/login")
                return
            }
        }
        // check

        // check했을 때 jwt가 유효한 경우

        // check했을 때 jwt가 유효하지 않은 경우
    }, [store, router])

    return showChildren ? <>{children}</> : <></>
}
