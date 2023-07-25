import {
    Wrapper,
    Wrap,
    TitleWrap,
    PreviousPageMoveIconWrap,
    RoomNameWrap,
    DeviceButttonWrap,
} from "./style"
import DeviceButton from "@/src/component/Button/DeviceButton"
import Image from "next/image"

export default function DeviceLayout(): React.ReactElement {
    return (
        <Wrapper>
            <Wrap>
                <TitleWrap>
                    <PreviousPageMoveIconWrap>
                        <Image
                            src="/images/icons/leftArrow.svg"
                            alt="go Previous Page"
                            width={32}
                            height={32}
                        />
                    </PreviousPageMoveIconWrap>
                    <RoomNameWrap>Living Room</RoomNameWrap>
                </TitleWrap>
                <DeviceButttonWrap>
                    <DeviceButton size="big" />
                </DeviceButttonWrap>
            </Wrap>
        </Wrapper>
    )
}
