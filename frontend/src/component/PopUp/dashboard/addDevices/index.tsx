import { useCallback, useState } from "react"
import { Wrapper, Wrap, DeviceButtonWrap } from "./style"
import { produce } from "immer"
import DeviceButton from "@/src/component/Button/DeviceButton2"

const baseImageUrl = "/images/icons/"

export default function AddDevices(): JSX.Element {
    const [devices, setDevices] = useState([
        {
            name: "공기청정기",
            file: "ac.svg",
            selected: false,
        },
        {
            name: "전구",
            file: "bulb.svg",
            selected: false,
        },
        {
            name: "티비",
            file: "tv.svg",
            selected: false,
        },
        {
            name: "에어컨",
            file: "air.svg",
            selected: false,
        },
        {
            name: "선풍기",
            file: "wind.svg",
            selected: false,
        },
    ])

    const buttonOnClick = useCallback(
        (index: number) => () => {
            setDevices(
                devices.map((dev, id) => ({
                    ...dev,
                    selected: index === id ? !dev.selected : false,
                })),
            )
        },
        [devices],
    )
    return (
        <Wrapper>
            <Wrap>
                {devices.map((device, index) => (
                    <DeviceButtonWrap>
                        <DeviceButton
                            src={baseImageUrl + device.file}
                            onClick={buttonOnClick(index)}
                            selected={device.selected}
                        />
                        <span>{device.name}</span>
                    </DeviceButtonWrap>
                ))}
            </Wrap>
        </Wrapper>
    )
}
