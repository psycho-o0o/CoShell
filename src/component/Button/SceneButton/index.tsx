import ToggleButton from "../ToggleButton"
import { ISceneButtonProps } from "./interface"
import {
    Wrapper,
    Wrap,
    IconWrap,
    SceneNameWrap,
    ToggleWrap,
    IConWrapper,
} from "./style"
import Image from "next/image"

export default function SceneButton({
    isClicked,
}: ISceneButtonProps): JSX.Element {
    return (
        <Wrapper isClicked={isClicked}>
            <Wrap>
                <IConWrapper>
                    <IconWrap>
                        <Image
                            src="/images/icons/tv.svg"
                            alt="tv icon"
                            width={15}
                            height={15}
                        />
                    </IconWrap>
                </IConWrapper>
                <SceneNameWrap>Morning Scene</SceneNameWrap>

                <ToggleWrap>
                    <ToggleButton type={isClicked ? "on" : "off"} />
                </ToggleWrap>
            </Wrap>
        </Wrapper>
    )
}
