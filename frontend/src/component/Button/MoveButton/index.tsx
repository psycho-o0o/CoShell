import { IMoveButtonProps } from "./interface"
import { Wrap } from "./style"

export default function MoveButton({
    type,
    onClick,
    backgroundColor,
    children,
}: IMoveButtonProps): JSX.Element {
    return (
        <Wrap onClick={onClick} backgroundColor={backgroundColor} type={type}>
            {children}
        </Wrap>
    )
}
