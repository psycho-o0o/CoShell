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
    reducers: {
        resetJwt: (state) => {
            state.jwt = null
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.jwt = action.payload.jwt
                state.name = action.payload.name
                state.email = action.payload.email
                localStorage.setItem("jwt", action.payload.jwt)
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.email = ""
                state.name = ""
                state.birth = ""
                state.jwt = null
                state.error = action.payload
            })
            .addCase(loginThunk.pending, (state) => {
                console.log("로그인 중입니다.")
                state.error = null
            })
            .addCase(registerThunk.fulfilled, (state, action) => {
                state.jwt = action.payload.jwt
                state.name = action.meta.arg.name
                state.email = action.meta.arg.email
                localStorage.setItem("jwt", action.payload.jwt)
            })
            .addCase(registerThunk.rejected, (state, action) => {
                state.email = ""
                state.name = ""
                state.birth = ""
                state.jwt = null
                state.error = action.payload
            })
            .addCase(registerThunk.pending, (state) => {
                console.log("회원가입중입니다.")
                state.error = null
            })
            .addCase(checkThunk.fulfilled, (state, action) => {
                state.jwt = localStorage.getItem("jwt")
                state.name = action.payload.name
                state.email = action.payload.email
                if (action.payload.birth) state.birth = action.payload.birth
            })
            .addCase(checkThunk.rejected, (state, action) => {
                state.email = ""
                state.name = ""
                state.birth = ""
                state.jwt = null
                state.error = action.payload
                localStorage.removeItem("jwt")
            })
            .addCase(checkThunk.pending, (state, action) => {}),
})

export const { resetJwt } = userSlice.actions
export default userSlice.reducer
