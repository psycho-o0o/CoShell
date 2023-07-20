import styled from "styled-components"

export interface IWrapperProps {
    type: "on" | "off"
}
export const Wrapper = styled.div<IWrapperProps>`
    width: 40px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: ${(props) => (props.type === "off" ? "start" : "end")};
    background-color: ${(props) =>
        props.type === "off" ? "black" : "#34E0A1"};

    & > div {
        width: 18px;
        height: 18px;
        border-radius: 9px;
        border: 1px solid
            ${(props) => (props.type === "off" ? "black" : "#34E0A1")};
        background-color: white;
    }
`
