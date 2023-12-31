import styled from "styled-components"

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 60%);
`
export const Wrap = styled.div`
    position: absolute;
    width: 100%;
    max-height: 60%;
    overflow-y: scroll;
    bottom: 0;
    border-radius: 24px 24px 0px 0px;
    background-color: white;
`

export const Container = styled.div`
    box-sizing: border-box;
    padding: 10px 15px;
`

export const CloseButtonWrap = styled.div`
    display: flex;
    cursor: pointer;
    justify-content: flex-end;
`
export const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
    text-align: center;
`
export const ButtonWrapper = styled.div``

export const ButtonWrap = styled.div`
    height: 48px;
    margin-bottom: 10px;
`
