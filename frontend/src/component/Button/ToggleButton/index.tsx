import { Wrapper } from "./style"

export interface IToggleButtonProps {
    on?: boolean
}
export default function ToggleButton({ on }: IToggleButtonProps): JSX.Element {
    return (
        <Wrapper on={on}>
            <div />
        </Wrapper>
    )
}
