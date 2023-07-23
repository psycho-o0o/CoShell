import { IMoveButtonProps } from "./interface"
import { Wrap } from "./style"

export default function MoveButton({
    onClick,
    backgroundColor,
    children,
}: IMoveButtonProps): JSX.Element {
    return (
        <Wrap onClick={onClick} backgroundColor={backgroundColor}>
            {children}
        </Wrap>
    )
}
