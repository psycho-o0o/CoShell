import styled from "styled-components"
export const InputWrap = styled.div`
    & > div {
        margin-bottom: 20px;
    }
`

export const BottomWrap = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
`

export const CreateAccountWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    & > a {
        font-size: 14px;
        font-weight: bold;
        color: black;
        text-decoration: none;
    }
    & span {
        color: #34e0a1;
    }
`

export const ButtonWrap = styled.div`
    width: 100%;
    height: 48px;
    margin-bottom: 20px;
`
