import Link from "next/link"
import MoveButton from "@/src/component/Button/MoveButton"
import Input from "@/src/component/Input"
import SignLayout from "@/src/component/Layout/Sign"
import {
    InputWrap,
    BottomWrap,
    ButtonWrap,
    CreateAccountWrap,
} from "@/styles/auth/recoverPassword"

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
                    <MoveButton>SUBMIT</MoveButton>
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
