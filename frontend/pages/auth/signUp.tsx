import Link from "next/link"
import { useCallback } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import MoveButton from "@/src/component/Button/MoveButton"
import Input from "@/src/component/Input"
import SignLayout from "@/src/component/Layout/Sign"
import OAuthButton from "@/src/feature/OAuthButton/Container"
import { useAppSelector, useAppDispatch } from "@/hook/redux"
import { registerThunk } from "@/src/feature/user/thunk"
import {
    InputWrap,
    TermsWrap,
    ButtonWrap,
    OrWrap,
    LinkWrap,
} from "@/styles/auth/signUp"

const OAuthArr = [
    {
        type: "SignUp",
        site: "Google",
    },
    {
        type: "SignUp",
        site: "Apple",
    },
]

export interface IInputsProps {
    name: string
    email: string
    password: string
}

export default function SignUp(): JSX.Element {
    const { register, handleSubmit } = useForm<IInputsProps>()
    const dispatch = useAppDispatch()
    const onSubmit: SubmitHandler<IInputsProps> = useCallback(
        ({ name, email, password }) => {
            dispatch(registerThunk({ name, email, password }))
        },
        [],
    )
    return (
        <SignLayout
            title="SIGN UP"
            subTitle="Looks like you don’t have an account. Let’s create a new account for you."
        >
            <InputWrap>
                <Input placeHolder="Name" registerProps={register("name")} />
                <Input placeHolder="Email" registerProps={register("email")} />
                <Input
                    placeHolder="Password"
                    isVisibleShowButton
                    registerProps={register("password")}
                />
            </InputWrap>
            <TermsWrap>
                By selecting Create Account below, I agree to{" "}
                <span>Terms of Service & Privacy Policy</span>
            </TermsWrap>
            <ButtonWrap>
                <MoveButton
                    type="submit"
                    backgroundColor="green"
                    onClick={handleSubmit(onSubmit)}
                >
                    CREATE ACCOUNT
                </MoveButton>
            </ButtonWrap>
            <OrWrap>
                <span />
                <span>OR</span>
                <span />
            </OrWrap>
            {OAuthArr.map((OAuth) => (
                <OAuthButton key={OAuth.site} OAuth={OAuth} />
            ))}
            <LinkWrap>
                <Link href={"/auth/signIn"}>SIGN IN</Link>
            </LinkWrap>
            <LinkWrap>
                <Link href={"/dashboard"}>CONTINUE AS A GUEST</Link>
            </LinkWrap>
        </SignLayout>
    )
}
