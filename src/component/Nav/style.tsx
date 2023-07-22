import styled from "styled-components"

export const Wrapper = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
`
export interface IWrapProps {
    currentIndex: number
}

export const Wrap = styled.div<IWrapProps>`
    display: flex;

    justify-content: center;
    align-items: center;
    background-color: black;
    border-radius: 16px;

    color: white;

    & > div {
        display: flex;
        flex: 1 0 auto;
        justify-content: center;
        align-items: center;
        padding: 8px 16px;
        border-radius: 8px;
        font-size: 14px;
        & > span {
            display: none;
        }
    }

    & > div:nth-child(${(props) => props.currentIndex}) {
        background-color: #2b2b2b;
        & > span {
            display: block;
            margin-left: 4px;
        }
    }
`
