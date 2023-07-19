import Link from "next/link"
import styled from "styled-components"
import MoveButton from "@/src/component/Button/MoveButton"
import Input from "@/src/component/Input"
import SignLayout from "@/src/component/Layout/Sign"
import OAuthButton from "@/src/feature/OAuthButton/Container"

const InputWrap = styled.div`
    & > div {
        margin-bottom: 20px;
    }
`

const ButtonWrap = styled.div`
    width: 100%;
    height: 48px;
    margin-bottom: 20px;
`

const OrWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    & > span:nth-child(2) {
        padding: 0 10px;
    }
    & > span:nth-child(2n-1) {
        flex: 1 0 auto;
        height: 1px;
        background-color: #eaeaea;
    }
`
const GuestLinkWrap = styled.div`
    margin-top: 20px;
    font-size: 14px;
    text-align: center;
    padding: 20px;
    & > a {
        text-decoration: none;
        color: black;
        font-weight: bold;
    }
`

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
    return (
        <SignLayout title="SIGN IN" subTitle="Have a Nice Day!">
            <InputWrap>
                <Input placeHolder="Email" />
                <Input placeHolder="Password" isVisibleShowButton />
            </InputWrap>
            <ButtonWrap>
                <MoveButton>SignUp</MoveButton>
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
