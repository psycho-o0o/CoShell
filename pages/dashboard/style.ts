import styled from "styled-components"

export const DeviceButtonWrap = styled.div`
    display: flex;
    flex-direction: row;
    overflow: scroll;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
    &::-webkit-scrollbar {
        display: none;
    }
`
export const SceneButtonWrap = styled.div`
    width: 100%;
    & > div {
        margin-bottom: 12px;
    }
`
export const FrequentlyUsedButtonWrap = styled.div`
    justify-content: space-between;
    h2 {
        width: 100%;
    }
`
export const BigDeviceButtonWrap = styled.div`
    max-width: 100vw;
    display: flex;
    flex-wrap: wrap;
    & > div {
        display: flex;
        flex-basis: 50%;
        margin-bottom: 15px;
    }
`
