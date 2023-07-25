import {
    Wrapper,
    Wrap,
    Container,
    IconWrap,
    ToggleWrap,
    DeviceWrap,
    IConWrapper,
} from "./style"
import { IDeviceButtonProps } from "./interface"
import Image from "next/image"
import ToggleButton from "../ToggleButton"
import RadioButton from "../RadioButton"

export default function DeviceButton({
    size,
    type,
    isClicked,
}: IDeviceButtonProps): JSX.Element {
    return (
        <Wrapper>
            <Wrap size={size} isClicked={isClicked}>
                <Container size={size}>
                    <IConWrapper>
                        <IconWrap size={size}>
                            <Image
                                src="/images/icons/tv.svg"
                                alt="tv icon"
                                width={15}
                                height={15}
                            />
                        </IconWrap>
                    </IConWrapper>

                    {size !== "small" && type === "toggle" && (
                        <ToggleWrap>
                            <ToggleButton on={isClicked} />
                        </ToggleWrap>
                    )}
                    {type === "radio" && <RadioButton on={isClicked} />}
                    <DeviceWrap>
                        <div className="name">Smart TV</div>
                        {type === "toggle" && (
                            <div className="num">2 Active</div>
                        )}
                    </DeviceWrap>
                </Container>
            </Wrap>
        </Wrapper>
    )
}
