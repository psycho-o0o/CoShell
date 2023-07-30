import React, { FC } from "react"
import { Provider } from "react-redux"
import { AppProps } from "next/app"
import { wrapper } from "@/src/util/redux/store"
import { CheckJWTProvider } from "./checkJWTProvider"
import { useRouter } from "next/router"

const MyApp: FC<AppProps> = function MyApp({ Component, pageProps }) {
    const { store, props } = wrapper.useWrappedStore(pageProps)
    const router = useRouter()

    return (
        <Provider store={store}>
            <CheckJWTProvider>
                <Component {...props} />
            </CheckJWTProvider>
        </Provider>
    )
}

export default MyApp
