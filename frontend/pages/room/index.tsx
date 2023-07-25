import DashboardLayout from "@/src/component/Layout/Dashboard"
import RoomCard from "@/src/component/Card/RoomCard"
import PopUp from "@/src/component/PopUp"

import CreateRoom from "@/src/component/PopUp/createRoom"
import SelectBackground from "@/src/component/PopUp/selectBackground"
import AddDevices from "@/src/component/PopUp/addDevices"
import Success from "@/src/component/PopUp/success"

import { useRouter } from "next/router"
import { useState, useEffect, useCallback, useMemo, useRef } from "react"

const popUpComponents = [
    {
        name: "createRoom",
        component: <CreateRoom />,
    },
    {
        name: "selectBackground",
        component: <SelectBackground />,
    },
    {
        name: "addDevices",
        component: <AddDevices />,
    },
    {
        name: "done",
        component: <Success />,
    },
]

export default function RoomPage(): React.ReactElement {
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
        router.push("/room")
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
        <DashboardLayout
            isBlockedScroll={blockScroll}
            onClickCreateButton={onClickCreateButton}
        >
            <>
                <RoomCard backgroundImageName={"cardBackgroundImage1.png"} />
                <RoomCard backgroundImageName={"cardBackgroundImage2.png"} />
                <RoomCard backgroundImageName={"cardBackgroundImage3.png"} />
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
