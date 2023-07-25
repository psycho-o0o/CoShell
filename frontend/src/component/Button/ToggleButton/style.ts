import styled from "styled-components"

export interface IWrapperProps {
    on?: boolean
}
export const Wrapper = styled.div<IWrapperProps>`
    width: 40px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: ${(props) => (props.on ? "end" : "start")};
    background-color: ${(props) => (props.on ? "#34E0A1" : "black")};

    & > div {
        width: 18px;
        height: 18px;
        border-radius: 9px;
        border: 1px solid ${(props) => (props.on ? "#34E0A1" : "black")};
        background-color: white;
    }
`
