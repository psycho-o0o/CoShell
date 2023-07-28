import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { loginThunk, registerThunk } from "./thunk"

export interface IInitialStateProps {
    email: string
    name: string
    birth: string
    error: string | null | unknown
}

const initialState: IInitialStateProps = {
    email: "",
    name: "",
    birth: "",
    error: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        changeName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        changeBirth: (state, action: PayloadAction<string>) => {
            state.birth = action.payload
        },
    },
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
                console.log("회원가입에 성공하였습니다.")
            })
            .addCase(registerThunk.rejected, (state, action) => {
                state.error = action.payload
            })
            .addCase(registerThunk.pending, (state, action) => {
                console.log("회원가입에 시도중입니다.")
                state.error = null
            }),
})

export const { changeEmail, changeName, changeBirth } = userSlice.actions
export default userSlice.reducer
