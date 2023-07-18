import Button from "@/src/component/Button"
import { InputWrap, ButtonWrap, OrWrap } from "./style"
import Input from "@/src/component/Input"
import SignLayout from "@/src/component/Layout/Sign"

export default function Login(): JSX.Element {
  return (
    <SignLayout
      title="SIGN IN"
      subTitle="Looks like you don't have an account. Let's create a new account for you."
    >
      <InputWrap>
        <Input placeHolder="Email" />
        <Input placeHolder="Password" isVisibleShowButton />
      </InputWrap>
      <ButtonWrap>
        <Button>Login</Button>
      </ButtonWrap>
      <OrWrap>
        <span />
        <span>OR</span>
        <span />
      </OrWrap>
    </SignLayout>
  )
}
