import DashboardLayout from "@/src/component/Layout/Dashboard"
import DeviceButton from "@/src/component/Button/DeviceButton"
import SceneButton from "@/src/component/Button/SceneButton"
import styled from "styled-components"
import PopUp from "@/src/component/PopUp"
import AddDevices from "@/src/component/PopUp/dashboard/addDevices"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useRouter } from "next/router"
import SelectLocation from "@/src/component/PopUp/dashboard/selectLocation"

export const DeviceButtonWrap = styled.div`
    display: flex;
    flex-direction: row;
    overflow: scroll;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
    &::-webkit-scrollbar {
        display: none;
    }
`
export const SceneButtonWrap = styled.div`
    width: 100%;
    & > div {
        margin-bottom: 12px;
    }
`
export const FrequentlyUsedButtonWrap = styled.div`
    justify-content: space-between;
    h2 {
        width: 100%;
    }
`
export const BigDeviceButtonWrap = styled.div`
    max-width: 100vw;
    display: flex;
    flex-wrap: wrap;
    & > div {
        display: flex;
        flex-basis: 50%;
        margin-bottom: 15px;
    }
`

const popUpComponents = [
    {
        name: "createRoom",
        component: <AddDevices />,
    },
    {
        name: "selectLocation",
        component: <SelectLocation />,
    },
]

export default function DashBoard(): JSX.Element {
    const ref = useRef<HTMLDivElement>(null)
    const router = useRouter()
    const [popUpIndex, setPopUpIndex] = useState(-1)
    const [blockScroll, setBlockScroll] = useState(false)

    const continuePopUpPage = useCallback(() => {
        if (popUpIndex < popUpComponents.length - 1) {
            setPopUpIndex(popUpIndex + 1)
            router.push(`?popUp=${popUpComponents[popUpIndex + 1].name}`)
        }
    }, [router, popUpIndex])

    const backPopUpPage = useCallback(() => {
        if (-1 < popUpIndex) {
            setPopUpIndex(popUpIndex - 1)
            router.back()
        }
    }, [router, popUpIndex])

    const onClickCreateButton = useCallback(() => {
        setPopUpIndex(0)
        router.push(`?popUp=${popUpComponents[0].name}`)
    }, [router])

    const onClickCloseButton = useCallback(() => {
        setPopUpIndex(-1)
        router.push("/dashboard")
    }, [router])

    const PopUpClose = useMemo(
        () => popUpIndex === popUpComponents.length - 1,
        [popUpIndex],
    )

    const PopUpContent = useMemo(() => {
        if (popUpIndex === -1) return <></>
        return popUpComponents[popUpIndex].component
    }, [popUpIndex])

    useEffect(() => {
        if (popUpIndex === -1) setBlockScroll(false)
        else {
            setBlockScroll(true)
            ref.current?.scrollTo(0, 0)
        }
    }, [popUpIndex])

    return (
        <DashboardLayout onClickCreateButton={onClickCreateButton}>
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

                {popUpIndex !== -1 && (
                    <PopUp
                        ref={ref}
                        close={PopUpClose}
                        onClickContinueButton={continuePopUpPage}
                        onClickBackButton={backPopUpPage}
                        onClickCloseButton={onClickCloseButton}
                    >
                        {PopUpContent}
                    </PopUp>
                )}
            </>
        </DashboardLayout>
    )
}
