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

export interface ICheckThunkProps {
    jwt: string
}

export const loginThunk = createAsyncThunk(
    "auth/loginThunk",
    async ({ email, password }: ILoginThunkProps, thunkAPI) => {
        try {
            const response = await axiosInstance({
                method: "post",
                url: "/auth/signIn",
                data: {
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

export const checkThunk = createAsyncThunk(
    "auth/checkThunk",
    async ({ jwt }: ICheckThunkProps, thunkAPI) => {
        try {
            const response = await axiosInstance({
                method: "get",
                url: "/auth/check",
                headers: {
                    Authorization: jwt,
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
