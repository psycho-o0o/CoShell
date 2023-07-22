import {
    Wrapper,
    Wrap,
    RoomBackground,
    RoomNameWrap,
    DeviceActiveWrap,
    DeviceIconWrapper,
    DeviceIconWrap,
} from "./style"
import Image from "next/image"
export interface IRoomCardProps {
    backgroundImageName: string
}

export default function RoomCard({
    backgroundImageName,
}: IRoomCardProps): React.ReactElement {
    return (
        <Wrapper>
            <Wrap>
                <RoomBackground backgroundImageName={backgroundImageName}>
                    <RoomNameWrap>Living Room</RoomNameWrap>
                    <DeviceActiveWrap>3/3 is on</DeviceActiveWrap>
                </RoomBackground>
                <DeviceIconWrapper>
                    <DeviceIconWrap>
                        <Image
                            src="/images/icons/tv.svg"
                            alt="tv"
                            width={20}
                            height={20}
                        />
                    </DeviceIconWrap>
                    <DeviceIconWrap>
                        <Image
                            src="/images/icons/air.svg"
                            alt="air cleaner"
                            width={20}
                            height={20}
                        />
                    </DeviceIconWrap>
                    <DeviceIconWrap>
                        <Image
                            src="/images/icons/ac.svg"
                            alt="air conditional"
                            width={20}
                            height={20}
                        />
                    </DeviceIconWrap>
                    <DeviceIconWrap>
                        <Image
                            src="/images/icons/bulb.svg"
                            alt="bulb"
                            width={20}
                            height={20}
                        />
                    </DeviceIconWrap>
                </DeviceIconWrapper>
            </Wrap>
        </Wrapper>
    )
}
