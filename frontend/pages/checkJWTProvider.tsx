import { AppStore } from "@/src/util/redux/store"
import { NextRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { checkThunk } from "@/src/feature/user/thunk"

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
            const localStorageJWT = localStorage.getItem("jwt")

            if (localStorageJWT && !jwt) {
                store.dispatch(checkThunk({ jwt: localStorageJWT }))
            } else if (!localStorageJWT && jwt) {
                localStorage.setItem("jwt", jwt)
            } else if (!localStorageJWT && !jwt) {
                if (["/", "/auth/signIn", "/auth/signUp"].includes(pathname)) {
                    setShowChildren(true)
                    return
                } else {
                    router.push("/")
                    return
                }
            }
        }
    }, [store, router])

    return showChildren ? <>{children}</> : <></>
}
