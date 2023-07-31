import { Wrapper, Wrap } from "./style"
import Image from "next/image"
export interface IDeviceButtonProps {
    src: string
    onClick: () => void
    selected: boolean
}
export default function DeviceButton({
    onClick,
    src,
    selected,
}: IDeviceButtonProps): JSX.Element {
    return (
        <Wrapper onClick={onClick}>
            <Wrap selected={selected}>
                <Image
                    alt="device icon"
                    width={68.75}
                    height={68.75}
                    src={src}
                />
            </Wrap>
        </Wrapper>
    )
}
