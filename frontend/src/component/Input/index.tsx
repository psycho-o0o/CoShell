import {
    Wrapper,
    TitleWrap,
    InputWrap,
    StyledInput,
    ToggleVisibleTextButton,
    ShowHelperTextButton,
    HelperWrap,
    ShowRemoveTextButton,
} from "./style"
import { IInputProps } from "./interface"
import Image from "next/image"
import { useState, useCallback } from "react"

export default function Input({
    type,
    title,
    placeHolder,
    isVisibleHelperButton,
    isVisibleShowButton,
    helperText,
}: IInputProps): React.ReactElement {
    const [showText, setShowText] = useState(false)
    const onClickToggleVisibleTextButton = useCallback(() => {
        setShowText((st) => !st)
    }, [])
    return (
        <Wrapper>
            <TitleWrap type={type} isShown={title !== undefined}>
                {title}
            </TitleWrap>
            <InputWrap type={type}>
                <StyledInput
                    placeholder={placeHolder}
                    type={
                        isVisibleShowButton && !showText ? "password" : "text"
                    }
                    disabled={type === "disabled"}
                ></StyledInput>

                {(type === "warning" || type === "help") && (
                    <ShowHelperTextButton
                        type={type}
                        isShown={isVisibleHelperButton !== undefined}
                    >
                        <Image
                            src={`/images/icons/informationCircle${type}.svg`}
                            alt="show Helper Text"
                            width={24}
                            height={24}
                        />
                    </ShowHelperTextButton>
                )}
                <ToggleVisibleTextButton
                    type={type}
                    onClick={onClickToggleVisibleTextButton}
                    isShown={isVisibleShowButton !== undefined}
                >
                    <Image
                        src="/images/icons/eye.svg"
                        alt="show Image"
                        width={24}
                        height={24}
                    />
                </ToggleVisibleTextButton>
                <ShowRemoveTextButton type={type} isShown={type === "typing"}>
                    <Image
                        src={"/images/icons/x2.svg"}
                        alt="remove inputed text"
                        width={18}
                        height={18}
                    />
                </ShowRemoveTextButton>
            </InputWrap>
            <HelperWrap type={type} isShown={helperText !== undefined}>
                {helperText}
            </HelperWrap>
        </Wrapper>
    )
}
