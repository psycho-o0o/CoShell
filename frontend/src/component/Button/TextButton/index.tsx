import { Wrapper, Wrap } from "./style"

interface ITextButtonProps {
    onClick: () => void
    selected: boolean
    children: string
}
export default function TextButton({
    onClick,
    selected,
    children,
}: ITextButtonProps): JSX.Element {
    return (
        <Wrapper onClick={onClick}>
            <Wrap onSelect={(e) => console.log(e)} selected={selected}>
                {children}
            </Wrap>
        </Wrapper>
    )
}
