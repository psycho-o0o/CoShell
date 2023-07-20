import SceneButton from "@/src/component/Button/SceneButton"

export default function DashBoard(): JSX.Element {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <SceneButton isClicked />
        </div>
    )
}
