import DashboardLayout from "@/src/component/Layout/Dashboard"
import RoomCard from "@/src/component/Card/RoomCard"
import PopUp from "@/src/component/PopUp"

import CreateRoom from "@/src/component/PopUp/createRoom"

import { useRouter } from "next/router"
import { useState, useCallback, useMemo } from "react"

export default function RoomPage(): React.ReactElement {
    const router = useRouter()
    const [popUpIndex, setPopUpIndex] = useState(-1)
    const popUpComponents = [
        {
            name: "createRoom",
            component: <CreateRoom />,
        },
        {
            name: "selectBackground",
            component: <CreateRoom />,
        },
        {
            name: "addDevices",
            component: <CreateRoom />,
        },
        {
            name: "done",
            component: <CreateRoom />,
        },
    ]

    const continuePopUpPage = useCallback(() => {
        if (popUpIndex < popUpComponents.length - 1) {
            setPopUpIndex(popUpIndex + 1)
            router.push(`?popUp=${popUpComponents[popUpIndex + 1].name}`)
        }
    }, [popUpIndex])

    const backPopUpPage = useCallback(() => {
        if (-1 < popUpIndex) {
            setPopUpIndex(popUpIndex - 1)
            router.back()
        }
    }, [popUpIndex])

    const onClickCreateButton = useCallback(() => {
        setPopUpIndex(0)
        router.push(`?popUp=${popUpComponents[0].name}`)
    }, [])

    const onClickCloseButton = useCallback(() => {
        setPopUpIndex(-1)
        router.push("/room")
    }, [])

    const PopUpContent = useMemo(() => {
        if (popUpIndex) return <></>
        return popUpComponents[popUpIndex].component
    }, [popUpIndex])

    return (
        <DashboardLayout onClickCreateButton={onClickCreateButton}>
            <>
                <RoomCard backgroundImageName={"cardBackgroundImage1.png"} />
                <RoomCard backgroundImageName={"cardBackgroundImage2.png"} />
                <RoomCard backgroundImageName={"cardBackgroundImage3.png"} />
                {popUpIndex !== -1 && (
                    <PopUp
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
