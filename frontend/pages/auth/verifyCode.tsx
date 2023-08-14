import MoveButton from "@/src/component/Button/MoveButton"
import Input from "@/src/component/Input"
import SignLayout from "@/src/component/Layout/Sign"
import { InputWrap, BottomWrap, ButtonWrap } from "@/styles/auth/verifyCode"

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
