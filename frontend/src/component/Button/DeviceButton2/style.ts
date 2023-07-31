import styled from "styled-components"

export const Wrapper = styled.div``

interface IWrapProps {
    selected?: boolean
}
export const Wrap = styled.div<IWrapProps>`
    width: 110px;
    height: 110px;
    border-radius: 80px;
    background-color: ${(props) => (props.selected ? "#34E0A1" : "#f7f7f7")};
    display: flex;
    align-items: center;
    justify-content: center;
`
