import Input from "@/src/component/Input"

export default function CreateRoom(): JSX.Element {
    return (
        <div style={{ marginBottom: "50px" }}>
            <Input placeHolder="Room Name" type="typing" />
        </div>
    )
}
