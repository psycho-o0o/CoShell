import styled from "styled-components"

export interface IWrapperProps {
    on?: boolean
}
export const Wrapper = styled.div<IWrapperProps>`
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
