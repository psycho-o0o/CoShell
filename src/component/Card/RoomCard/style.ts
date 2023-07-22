import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
`
export const Wrap = styled.div`
    border-radius: 16px;
    overflow: hidden;
`

export interface IRoomBackgroundProps {
    backgroundImageName: string
}
export const RoomBackground = styled.div<IRoomBackgroundProps>`
    padding: 16px;
    height: 160px;
    background-size: cover;
    background-position: 50% 50%;
    background-image: ${(props) =>
        "url(/images/figure/" + props.backgroundImageName + ")"};
    box-shadow: -1px 20px 115px 0px rgba(0, 0, 0, 0.51) inset;
    -webkit-box-shadow: -1px 20px 115px 0px rgba(0, 0, 0, 0.51) inset;
    -moz-box-shadow: -1px 20px 115px 0px rgba(0, 0, 0, 0.51) inset;
`
export const RoomNameWrap = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: white;
    margin-bottom: 1px;
`
export const DeviceActiveWrap = styled.div`
    font-size: 17px;
    color: white;
`
export const DeviceIconWrapper = styled.div`
    height: 64px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;
    background-color: #f7f7f7;
`
export const DeviceIconWrap = styled.div`
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 50%;
    margin-right: 14px;
`
