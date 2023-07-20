import {
    Wrapper,
    Wrap,
    TitleWrap,
    PlusButtonWrap,
    DeviceButtonWrap,
    SceneButtonWrap,
    FrequentlyUsedButtonWrap,
} from "./style"
import Image from "next/image"
import DeviceButton from "@/src/component/Button/DeviceButton"
import SceneButton from "@/src/component/Button/SceneButton"

export default function DashBoard(): JSX.Element {
    return (
        <Wrapper>
            <Wrap>
                <TitleWrap>
                    <h1>My Home</h1>
                    <PlusButtonWrap>
                        <Image
                            src="/images/icons/plus.svg"
                            alt="add enviroment"
                            width={27}
                            height={27}
                        />
                    </PlusButtonWrap>
                </TitleWrap>
                <DeviceButtonWrap>
                    <DeviceButton size="small" isClicked />
                    <DeviceButton size="small" />
                    <DeviceButton size="small" />
                </DeviceButtonWrap>
                <SceneButtonWrap>
                    <h2>Scenes</h2>
                    <SceneButton isClicked />
                    <SceneButton />
                    <SceneButton />
                </SceneButtonWrap>
                <FrequentlyUsedButtonWrap>
                    <h2>Frequently Used</h2>
                    <DeviceButton size="big" isClicked />
                    <DeviceButton size="big" isClicked />
                    <DeviceButton size="big" />
                    <DeviceButton size="big" />
                    <DeviceButton size="big" />
                </FrequentlyUsedButtonWrap>
            </Wrap>
        </Wrapper>
    )
}
