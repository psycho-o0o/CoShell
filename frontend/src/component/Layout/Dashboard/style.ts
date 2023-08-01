import styled, { css } from "styled-components"
export interface IWrapperProps {
    isBlockedScroll?: boolean
}
export const Wrapper = styled.div<IWrapperProps>`
    position: relative;
    ${(props) =>
        props.isBlockedScroll &&
        css`
            height: 100vh;
            overflow-y: hidden;
        `}
`
export const Wrap = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 16px;
`
export const TitleWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const PlusButtonWrap = styled.div`
    cursor: pointer;
`
