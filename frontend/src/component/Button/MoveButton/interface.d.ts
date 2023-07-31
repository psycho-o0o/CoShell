export interface IMoveButtonProps {
    type?: "button" | "submit" | "reset"
    onClick: () => void
    backgroundColor: string
    children: string
}
