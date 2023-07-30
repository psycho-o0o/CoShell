import { createSlice } from "@reduxjs/toolkit"
import { checkThunk, loginThunk, registerThunk } from "./thunk"

export interface IInitialStateProps {
    email: string
    name: string
    birth: string
    jwt: string | null
    error: string | null | unknown
}

const initialState: IInitialStateProps = {
    email: "",
    name: "",
    birth: "",
    jwt: null,
    error: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(loginThunk.fulfilled, (state, action) => {
                console.log("로그인에 성공하였습니다.")
            })
            .addCase(loginThunk.rejected, (state, action) => {
                console.log("로그인에 실패하였습니다.")
            })
            .addCase(loginThunk.pending, (state, action) => {
                console.log("로그인 시도중입니다.")
            })
            .addCase(registerThunk.fulfilled, (state, action) => {
                state.jwt = action.payload.jwt
                state.name = action.meta.arg.name
                state.email = action.meta.arg.email
                localStorage.setItem("jwt", action.payload.jwt)
            })
            .addCase(registerThunk.rejected, (state, action) => {
                state = { ...initialState, error: action.payload }
            })
            .addCase(registerThunk.pending, (state, action) => {
                state.error = null
            })
            .addCase(checkThunk.fulfilled, (state, action) => {
                state.jwt = action.payload.jwt
                state.name = action.payload.name
                state.email = action.payload.email
                if (action.payload.birth) state.birth = action.payload.birth
            })
            .addCase(checkThunk.rejected, (state, action) => {
                state = { ...initialState, error: action.payload }
            })
            .addCase(checkThunk.pending, (state, action) => {}),
})

export const {} = userSlice.actions
export default userSlice.reducer
