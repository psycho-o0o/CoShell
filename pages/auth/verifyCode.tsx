import styled from "styled-components"
import MoveButton from "@/src/component/Button/MoveButton"
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

export default function Verify(): JSX.Element {
    return (
        <SignLayout
            title="VERIFY CODE"
            subTitle="An authentication code has been sent to your email"
        >
            <InputWrap>
                <Input
                    placeHolder="Enter Code"
                    helperText="Didn't receive a code? Resend"
                />
            </InputWrap>
            <BottomWrap>
                <ButtonWrap>
                    <MoveButton>VERIFY</MoveButton>
                </ButtonWrap>
            </BottomWrap>
        </SignLayout>
    )
}
