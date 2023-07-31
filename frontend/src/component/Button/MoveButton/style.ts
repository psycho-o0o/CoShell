import styled, { css } from "styled-components"

export interface IWrapProps {
    backgroundColor: string
}

export const Wrap = styled.button<IWrapProps>`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    font-size: 14px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    ${(props) => {
        if (props.backgroundColor === "green")
            return css`
                color: #101010;
                background-color: #34e0a1;
            `
        else if (props.backgroundColor === "white")
            return css`
                color: #34e0a1;
                background-color: #f8f8f8;
            `
    }}
`
