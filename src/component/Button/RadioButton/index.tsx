import { Wrapper } from "./style"
import Image from "next/image"

export interface IRadioButtonProps {
    on?: boolean
}
export default function RadioButton({ on }: IRadioButtonProps): JSX.Element {
    return (
        <Wrapper on={on}>
            {on ? (
                <Image
                    src="/images/icons/radioOn"
                    alt="radio button is on"
                    width={32}
                    height={32}
                />
            ) : (
                <Image
                    src="/images/icons/radioOff"
                    alt="radio button is off"
                    width={32}
                    height={32}
                />
            )}
        </Wrapper>
    )
}
