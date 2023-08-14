import MoveButton from "@/src/component/Button/MoveButton"
import Input from "@/src/component/Input"
import SignLayout from "@/src/component/Layout/Sign"
import { InputWrap, ButtonWrap, BottomWrap } from "@/styles/auth/changePassword"

export default function ChangePassword(): JSX.Element {
    return (
        <SignLayout
            title="CHANGE PASSWORD"
            subTitle="Create a new strong password that you don't use before"
        >
            <InputWrap>
                <Input placeHolder="Create Password" />
                <Input
                    placeHolder="Confirm Password"
                    helperText="At least 8 characters"
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
