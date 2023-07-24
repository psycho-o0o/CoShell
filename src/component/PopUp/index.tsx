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
    close?: boolean
    onClickContinueButton: () => void
    onClickBackButton: () => void
    onClickCloseButton: () => void
    children: React.ReactElement
}
export default forwardRef(function PopUp(
    {
        close,
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
                                onClick={
                                    close
                                        ? onClickCloseButton
                                        : onClickContinueButton
                                }
                                backgroundColor="green"
                            >
                                {close ? "Done" : "Continue"}
                            </MoveButton>
                        </ButtonWrap>
                        {!close && (
                            <ButtonWrap>
                                <MoveButton
                                    onClick={onClickBackButton}
                                    backgroundColor="white"
                                >
                                    Back
                                </MoveButton>
                            </ButtonWrap>
                        )}
                    </ButtonWrapper>
                </Container>
            </Wrap>
        </Wrapper>
    )
})
