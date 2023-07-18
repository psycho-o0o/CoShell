import styled from "styled-components"

export const InputWrap = styled.div`
  & > div {
    margin-bottom: 20px;
  }
`

export const ButtonWrap = styled.div`
  width: 100%;
  height: 48px;
  margin-bottom: 20px;
`

export const OrWrap = styled.div`
  display: flex;
  align-items: center;
  & > span:nth-child(2) {
    padding: 0 10px;
  }
  & > span:nth-child(2n-1) {
    flex: 1 0 auto;
    height: 1px;
    background-color: #eaeaea;
  }
`
