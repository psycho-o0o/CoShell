import { Wrap } from "./style"

export interface IButtonProps {
  children: React.ReactNode
}
export default function Button({ children }: IButtonProps): JSX.Element {
  return <Wrap>{children}</Wrap>
}
