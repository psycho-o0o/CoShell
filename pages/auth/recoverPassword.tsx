import Link from "next/link"
import styled from "styled-components"
import Button from "@/src/component/Button"
import Input from "@/src/component/Input"
import SignLayout from "@/src/component/Layout/Sign"

const InputWrap = styled.div`
    & > div {
        margin-bottom: 20px;
    }
`

export const BottomWrap = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
`

export const CreateAccountWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    & > a {
        font-size: 14px;
        font-weight: bold;
        color: black;
        text-decoration: none;
    }
    & span {
        color: #34e0a1;
    }
`

const ButtonWrap = styled.div`
    width: 100%;
    height: 48px;
    margin-bottom: 20px;
`

export default function RecoverPassword(): JSX.Element {
    return (
        <SignLayout
            title="RECOVER PASSWORD"
            subTitle="Forgot your password? Don't worry, enter your email to reset your current password."
        >
            <InputWrap>
                <Input placeHolder="Email" />
            </InputWrap>
            <BottomWrap>
                <ButtonWrap>
                    <Button>SUBMIT</Button>
                </ButtonWrap>
                <CreateAccountWrap>
                    <Link href="/signUp">
                        DON&apos;T HAVE AN ACCOUNT? <span>SIGN UP</span>
                    </Link>
                </CreateAccountWrap>
            </BottomWrap>
        </SignLayout>
    )
}
