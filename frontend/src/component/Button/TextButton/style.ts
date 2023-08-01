import styled from "styled-components"

export interface IWrapProps {
    selected: boolean
}

export const Wrapper = styled.div``

export const Wrap = styled.div<IWrapProps>`
    padding: 8px 12px;
    font-size: 14px;
    border-radius: 8px;
    margin: 5px;
    cursor: pointer;
    background-color: ${(props) => (props.selected ? "#34E0A1" : "#F7F7F7")};

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
`
