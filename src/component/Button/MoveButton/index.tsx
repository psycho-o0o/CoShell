import { IMoveButtonProps } from "./interface"
import { Wrap } from "./style"

export default function MoveButton({
    backgroundColor,
    children,
}: IMoveButtonProps): JSX.Element {
    return <Wrap backgroundColor={backgroundColor}>{children}</Wrap>
}
