import Link from "next/link"
import { useCallback, useMemo } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import MoveButton from "@/src/component/Button/MoveButton"
import Input from "@/src/component/Input"
import SignLayout from "@/src/component/Layout/Sign"
import OAuthButton from "@/src/feature/OAuthButton/Container"
import {
    InputWrap,
    ButtonWrap,
    ErrorWrap,
    OrWrap,
    GuestLinkWrap,
} from "@/styles/auth/signIn"
import { useAppSelector, useAppDispatch } from "@/hook/redux"
import { loginThunk } from "@/src/feature/user/thunk"

const OAuthArr = [
    {
        type: "SignIn",
        site: "Google",
    },
    {
        type: "SignIn",
        site: "Apple",
    },
]

export interface IInputsProps {
    email: string
    password: string
}

export default function SignIn(): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IInputsProps>()
    const { error } = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()
    const onSubmit: SubmitHandler<IInputsProps> = useCallback(
        ({ email, password }) => {
            dispatch(loginThunk({ email, password }))
        },
        [],
    )

    const errorText = useMemo(() => {
        if (error === "there is no user") {
            return "사용자가 존재하지 않습니다."
        } else if (error === "password is invalid") {
            return "패스워드를 틀리셨습니다."
        }
    }, [error])

    return (
        <SignLayout
            title="SIGN IN"
            subTitle="Do you want to manipulate your devices? Let's do it"
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputWrap>
                    <Input
                        placeHolder="Email"
                        registerProps={register("email")}
                    />
                    <Input
                        placeHolder="Password"
                        isVisibleShowButton
                        registerProps={register("password")}
                    />
                </InputWrap>
                <ErrorWrap>{errorText}</ErrorWrap>
                <ButtonWrap>
                    <MoveButton
                        backgroundColor="green"
                        onClick={handleSubmit(onSubmit)}
                    >
                        LOGIN
                    </MoveButton>
                </ButtonWrap>
            </form>

            <OrWrap>
                <span />
                <span>OR</span>
                <span />
            </OrWrap>
            {OAuthArr.map((OAuth) => (
                <OAuthButton key={OAuth.site} OAuth={OAuth} />
            ))}
            <GuestLinkWrap>
                <Link href={"/dashboard"}>CONTINUE AS A GUEST</Link>
            </GuestLinkWrap>
        </SignLayout>
    )
}
