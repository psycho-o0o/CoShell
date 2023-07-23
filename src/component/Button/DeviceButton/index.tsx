import ToggleButton from "../ToggleButton"
import { IDeviceButtonProps } from "./interface"
import {
    Wrapper,
    Wrap,
    Container,
    IconWrap,
    ToggleWrap,
    DeviceWrap,
    IConWrapper,
} from "./style"
import Image from "next/image"

export default function DeviceButton({
    size,
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

                    {size !== "small" && (
                        <ToggleWrap>
                            <ToggleButton on={isClicked} />
                        </ToggleWrap>
                    )}
                    <DeviceWrap>
                        <div className="name">Smart TV</div>
                        <div className="num">2 Active</div>
                    </DeviceWrap>
                </Container>
            </Wrap>
        </Wrapper>
    )
}
