import { configureStore, ThunkAction } from "@reduxjs/toolkit"
import { Action, combineReducers } from "redux"
import { createWrapper, MakeStore } from "next-redux-wrapper"
import logger from "redux-logger"

import userSlice from "@/src/feature/user/slice"

const reducers = { userSlice }

const makeStore: MakeStore<any> = ({}) =>
    configureStore({
        reducer: combineReducers(reducers),
        devTools: true,
        middleware: (getDefaultMiddleware) =>
            [...getDefaultMiddleware(), process.browser ? logger : null].filter(
                Boolean,
            ) as any,
    })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>
export const wrapper = createWrapper<AppStore>(makeStore, { debug: true })
