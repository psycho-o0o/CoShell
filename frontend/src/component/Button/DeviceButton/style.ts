import styled, { css } from "styled-components"
import { IConWrapProps, IWrapProps, IContainerProps } from "./interface"

export const Wrapper = styled.div`
    padding: 0px 5px;
    box-sizing: border-box;
`

export const Wrap = styled.div<IWrapProps>`
    padding: 0px 8px;
    height: 50px;
    min-width: 120px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f7f7f7;
    box-sizing: border-box;

    background-color: ${(props) =>
        props.isClicked && props.size === "small" ? "#34E0A1" : "#f7f7f7"};
    ${(props) =>
        props.size === "big" &&
        css`
            width: 100%;
            padding: 16px;
            height: 116px;
            box-sizing: border-box;
        `};
`
export const Container = styled.div<IContainerProps>`
    display: flex;

    ${(props) =>
        props.size === "big" &&
        css`
            width: 100%;
            flex-wrap: wrap;
            justify-content: space-between;

            & > div {
                margin: 0;
                flex: 1 0 50%;
                margin-bottom: 16px;
            }
            & > div:last-child {
                flex: 1 0 0;
                margin-bottom: 0px;
            }
        `}
`

export const IConWrapper = styled.div`
    margin-right: 8px;
`

export const IconWrap = styled.div<IConWrapProps>`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) =>
        props.size === "big" &&
        css`
            width: 32px;
            height: 32px;

            & img {
                width: 20px !important;
                height: 20px !important;
            }
        `}
`
export const ToggleWrap = styled.div`
    display: flex;
    justify-content: end;
`
export const DeviceWrap = styled.div`
    & > .name {
        font-size: 14px;
        font-weight: bold;
    }
    & > .num {
        font-size: 11px;
    }
`
