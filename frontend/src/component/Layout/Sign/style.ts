import styled from "styled-components"

export const Wrapper = styled.div`
    height: 100%;
    padding: 32px 16px;
    display: flex;
    flex-direction: column;
`
export const Wrap = styled.div`
    flex: 1 0 0;
    height: 100%;
    position: relative;
`
export const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 32px;
    & > .text {
        margin-left: 7px;
        font-size: 35px;
        font-weight: bold;
    }
`
export const LogoImageWrap = styled.div`
    width: 41px;
    height: 41px;
    position: relative;
`
export const Title = styled.div`
    & > div:first-child {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    & > div:last-child {
        font-size: 14px;
        margin-bottom: 10px;
    }
    margin-bottom: 20px;
`
export const Content = styled.div``
