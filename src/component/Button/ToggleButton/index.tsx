import { Wrapper } from "./style"

export interface IToggleButtonProps {
    type: "on" | "off"
}
export default function ToggleButton({
    type,
}: IToggleButtonProps): JSX.Element {
    return (
        <Wrapper type={type}>
            <div />
        </Wrapper>
    )
}
