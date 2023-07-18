import {
    Wrapper,
    TitleWrap,
    InputWrap,
    StyledInput,
    ShowVisibleTextButton,
    ShowHelperTextButton,
    HelperWrap,
} from "./style"
import { IInputProps } from "./interface"
import Image from "next/image"

export default function Input({
    type,
    title,
    placeHolder,
    isVisibleHelperButton,
    isVisibleShowButton,
    helperText,
}: IInputProps): React.ReactElement {
    return (
        <Wrapper>
            <TitleWrap type={type} isShown={title !== undefined}>
                {title}
            </TitleWrap>
            <InputWrap type={type}>
                <StyledInput
                    placeholder={placeHolder}
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
                <ShowVisibleTextButton
                    type={type}
                    isShown={isVisibleShowButton !== undefined}
                >
                    <Image
                        src="/images/icons/eye.svg"
                        alt="show Image"
                        width={24}
                        height={24}
                    />
                </ShowVisibleTextButton>
            </InputWrap>
            <HelperWrap type={type} isShown={helperText !== undefined}>
                {helperText}
            </HelperWrap>
        </Wrapper>
    )
}
