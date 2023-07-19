import { IMoveButtonProps } from "./interface"
import { Wrap } from "./style"

export default function MoveButton({
    children,
}: IMoveButtonProps): JSX.Element {
    return <Wrap>{children}</Wrap>
}
