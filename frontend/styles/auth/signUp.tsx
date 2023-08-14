import styled from "styled-components"
export const InputWrap = styled.div`
    & > div {
        margin-bottom: 20px;
    }
`

export const TermsWrap = styled.div`
    padding: 10px;
    color: #4a4863;
    margin-bottom: 20px;
    font-size: 14px;
    & > span {
        color: black;
        font-weight: bold;
    }
`

export const ButtonWrap = styled.div`
    width: 100%;
    height: 48px;
    margin-bottom: 20px;
    cursor: pointer;
`

export const OrWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    & > span:nth-child(2) {
        padding: 0 10px;
    }
    & > span:nth-child(2n-1) {
        flex: 1 0 auto;
        height: 1px;
        background-color: #eaeaea;
    }
`
export const LinkWrap = styled.div`
    margin-top: 20px;
    font-size: 14px;
    text-align: center;
    padding: 20px;
    & > a {
        text-decoration: none;
        color: black;
        font-weight: bold;
    }
`
