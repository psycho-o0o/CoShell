import Link from "next/link"
import { useCallback } from "react"
import MoveButton from "@/src/component/Button/MoveButton"
import Input from "@/src/component/Input"
import SignLayout from "@/src/component/Layout/Sign"
import OAuthButton from "@/src/feature/OAuthButton/Container"
import {
    InputWrap,
    ButtonWrap,
    OrWrap,
    GuestLinkWrap,
} from "@/styles/auth/signIn"

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

export default function SignIn(): JSX.Element {
    const onClickMoveButton = useCallback(() => {
        console.log("login")
    }, [])

    return (
        <SignLayout
            title="SIGN IN"
            subTitle="Do you want to manipulate your devices? Let's do it"
        >
            <InputWrap>
                <Input placeHolder="Email" />
                <Input placeHolder="Password" isVisibleShowButton />
            </InputWrap>
            <ButtonWrap>
                <MoveButton backgroundColor="green" onClick={onClickMoveButton}>
                    LOGIN
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
            <GuestLinkWrap>
                <Link href={"/dashboard"}>CONTINUE AS A GUEST</Link>
            </GuestLinkWrap>
        </SignLayout>
    )
}
