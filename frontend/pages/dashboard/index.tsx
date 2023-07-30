import {
    DeviceButtonWrap,
    SceneButtonWrap,
    FrequentlyUsedButtonWrap,
    BigDeviceButtonWrap,
} from "./style"
import DashboardLayout from "@/src/component/Layout/Dashboard"
import DeviceButton from "@/src/component/Button/DeviceButton"
import SceneButton from "@/src/component/Button/SceneButton"

export default function DashBoard(): JSX.Element {
    return (
        <DashboardLayout onClickCreateButton={() => console.log(11)}>
            <>
                <DeviceButtonWrap>
                    <DeviceButton type="toggle" size="small" isClicked />
                    <DeviceButton type="toggle" size="small" />
                    <DeviceButton type="toggle" size="small" />
                </DeviceButtonWrap>
                <SceneButtonWrap>
                    <h2>Scenes</h2>
                    <SceneButton isClicked />
                    <SceneButton />
                    <SceneButton />
                </SceneButtonWrap>
                <FrequentlyUsedButtonWrap>
                    <h2>Frequently Used</h2>
                    <BigDeviceButtonWrap>
                        <DeviceButton type="toggle" size="big" isClicked />
                        <DeviceButton type="toggle" size="big" isClicked />
                        <DeviceButton type="toggle" size="big" isClicked />
                    </BigDeviceButtonWrap>
                </FrequentlyUsedButtonWrap>
            </>
        </DashboardLayout>
    )
}
