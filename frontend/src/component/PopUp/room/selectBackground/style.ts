import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`
export const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    padding: 5px;
    box-sizing: border-box;
`
export const ImageWrap = styled.div`
    flex: 1 0 45%;
    height: 120px;
    position: relative;

    & > img:last-child {
        padding: 5px;
        box-sizing: border-box;
        border-radius: 12px;
        background-position: 50% 50%;
    }
`

export const SelectedButton = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 1000;
`
