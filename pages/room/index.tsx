import DashboardLayout from "@/src/component/Layout/Dashboard"
import RoomCard from "@/src/component/Card/RoomCard"
export default function RoomPage(): React.ReactElement {
    return (
        <DashboardLayout>
            <>
                <RoomCard backgroundImageName={"cardBackgroundImage1.png"} />
                <RoomCard backgroundImageName={"cardBackgroundImage2.png"} />
                <RoomCard backgroundImageName={"cardBackgroundImage3.png"} />
            </>
        </DashboardLayout>
    )
}
