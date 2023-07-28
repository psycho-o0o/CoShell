import axios from "@/src/util/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export interface ILoginThunkProps {
    email: string
    password: string
}

export const loginThunk = createAsyncThunk(
    "auth/loginThunk",
    async ({ email, password }: ILoginThunkProps, thunkAPI) => {
        const response = await axios({
            method: "post",
            url: "/auth/signIn",
            data: {
                email: email,
                password: password,
            },
        })

        if (response.status === 401) {
            console.log("로그인을 실패하였습니다.")
            return thunkAPI.rejectWithValue("fail")
        }

        return response.data
    },
)
