import styled from "styled-components"
import { IWrapperProps } from "./interface"

export const Wrapper = styled.div<IWrapperProps>`
    padding: 18px 16px;
    box-sizing: border-box;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f7f7f7;
`

export const Wrap = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

export const IConWrapper = styled.div`
    margin-right: 8px;
`

export const IconWrap = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
`

export const SceneNameWrap = styled.div`
    font-size: 16px;
    font-weight: bold;
    display: flex;
    flex: 1 0 auto;
`

export const ToggleWrap = styled.div`
    display: flex;
    justify-content: end;
`
