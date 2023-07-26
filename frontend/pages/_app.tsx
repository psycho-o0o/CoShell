import React, { FC } from "react"
import { Provider } from "react-redux"
import { AppProps } from "next/app"
import { wrapper } from "@/src/util/redux/store"

const MyApp: FC<AppProps> = function MyApp({ Component, pageProps }) {
    const { store, props } = wrapper.useWrappedStore(pageProps)

    return (
        <Provider store={store}>
            <Component {...props} />
        </Provider>
    )
}

export default MyApp
