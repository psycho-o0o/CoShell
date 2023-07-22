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
        <DashboardLayout>
            <>
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
                    <BigDeviceButtonWrap>
                        <DeviceButton size="big" isClicked />
                        <DeviceButton size="big" isClicked />
                        <DeviceButton size="big" isClicked />

                        <DeviceButton size="big" isClicked />
                        <DeviceButton size="big" isClicked />

                        <DeviceButton size="big" isClicked />
                        <DeviceButton size="big" isClicked />

                        <DeviceButton size="big" isClicked />
                        <DeviceButton size="big" isClicked />

                        <DeviceButton size="big" isClicked />
                    </BigDeviceButtonWrap>
                </FrequentlyUsedButtonWrap>
            </>
        </DashboardLayout>
    )
}
