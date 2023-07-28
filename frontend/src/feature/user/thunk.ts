import axiosInstance from "@/src/util/axios"
import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { AxiosError } from "axios"

export interface ILoginThunkProps {
    email: string
    password: string
}

export interface IRegisterThunkProps {
    name: string
    email: string
    password: string
}

export const loginThunk = createAsyncThunk(
    "auth/loginThunk",
    async ({ email, password }: ILoginThunkProps, thunkAPI) => {
        const response = await axiosInstance({
            method: "post",
            url: "/auth/signIn",
            data: {
                email: email,
                password: password,
            },
        })

        if (response.status === 400) {
            console.log("로그인을 실패하였습니다.")
            return thunkAPI.rejectWithValue(response.data)
        }

        return response.data
    },
)

export const registerThunk = createAsyncThunk(
    "auth/registerThunk",
    async ({ name, email, password }: IRegisterThunkProps, thunkAPI) => {
        try {
            const response = await axiosInstance({
                method: "post",
                url: "/auth/signUp",
                data: {
                    name: name,
                    email: email,
                    password: password,
                },
            })
            return response.data
        } catch (err: unknown | AxiosError) {
            if (axios.isAxiosError(err) && err.response) {
                return thunkAPI.rejectWithValue(err.response?.data)
            } else {
                return thunkAPI.rejectWithValue(err)
            }
        }
    },
)