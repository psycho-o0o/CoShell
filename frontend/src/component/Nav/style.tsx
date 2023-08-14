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
    border-radius: 8px;
    overflow: hidden;

    color: white;

    & > a {
        display: flex;
        flex: 1 0 auto;
        justify-content: center;
        align-items: center;
        padding: 8px 16px;
        font-size: 14px;
        color: white;
        text-decoration: none;
        background-color: #2b2b2b;

        & > div {
            display: flex;
            & > span {
                display: none;
            }
        }
    }

    & > a:nth-child(${(props) => props.currentIndex}) > div {
        & > span {
            display: block;
            margin-left: 4px;
        }
    }
`
