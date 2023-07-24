import Image from "next/image"
import MoveButton from "@/src/component/Button/MoveButton"
import {
    Wrapper,
    Wrap,
    Container,
    CloseButtonWrap,
    Title,
    ButtonWrapper,
    ButtonWrap,
} from "./style"
import { ForwardedRef, forwardRef } from "react"

export interface IPopUpProps {
    onClickContinueButton: () => void
    onClickBackButton: () => void
    onClickCloseButton: () => void
    children: React.ReactElement
}
export default forwardRef(function PopUp(
    {
        onClickContinueButton,
        onClickBackButton,
        onClickCloseButton,
        children,
    }: IPopUpProps,
    ref: ForwardedRef<HTMLDivElement>,
): React.ReactElement {
    return (
        <Wrapper>
            <Wrap ref={ref}>
                <Container>
                    <CloseButtonWrap onClick={onClickCloseButton}>
                        <Image
                            src="/images/icons/x.svg"
                            alt="close pop up"
                            width={24}
                            height={24}
                        />
                    </CloseButtonWrap>
                    <Title>Room Name</Title>
                    {children}
                    <ButtonWrapper>
                        <ButtonWrap>
                            <MoveButton
                                onClick={onClickContinueButton}
                                backgroundColor="green"
                            >
                                Continue
                            </MoveButton>
                        </ButtonWrap>
                        <ButtonWrap>
                            <MoveButton
                                onClick={onClickBackButton}
                                backgroundColor="white"
                            >
                                Back
                            </MoveButton>
                        </ButtonWrap>
                    </ButtonWrapper>
                </Container>
            </Wrap>
        </Wrapper>
    )
})
