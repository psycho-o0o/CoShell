import styled from "styled-components"

export const Wrapper = styled.div``
export const Wrap = styled.div`
    padding: 16px;
`
export const TitleWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const PlusButtonWrap = styled.div``
export const DeviceButtonWrap = styled.div`
    display: flex;
    flex-direction: row;
    overflow: scroll;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
    &::-webkit-scrollbar {
        display: none;
    }
    & > div {
        margin: 0px 10px;
    }
    & > div:first-child,
    & > div:last-child {
        margin: 0;
    }
`
export const SceneButtonWrap = styled.div`
    & > div {
        margin-bottom: 12px;
    }
`
export const FrequentlyUsedButtonWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    h2 {
        width: 100%;
    }
    & > div {
        width: 48%;
        margin-bottom: 15px;
    }
`
