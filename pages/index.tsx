import styled from "styled-components"
import Image from "next/image"
import Button from "@/src/component/Button"

export const Wrapper = styled.div`
  width: 390px;
  padding-bottom: 15px;
`
export const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TopBackgroundWrap = styled.div`
  width: 100%;
  height: 320px;
  position: relative;
`

export const LogoIconWrap = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  margin-top: -50px;
  margin-bottom: 66px;
`
export const LogoTextWrap = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 13px;
`
export const VisionWrap = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 257px;
  flex: 1 0 auto;
`

export const ButtonWrap = styled.div`
  width: 127px;
  height: 48px;
`

export default function Home(): JSX.Element {
  return (
    <Wrapper>
      <Wrap>
        <TopBackgroundWrap>
          <Image
            src="/images/figure/MainPageTopBackground.png"
            alt="top background"
            fill
          />
        </TopBackgroundWrap>
        <LogoIconWrap>
          <Image src="/images/figure/LogoImage.png" alt="logo image" fill />
        </LogoIconWrap>
        <LogoTextWrap>CoShell</LogoTextWrap>
        <VisionWrap>A new way to control your home</VisionWrap>
        <ButtonWrap>
          <Button>GET STARTED</Button>
        </ButtonWrap>
      </Wrap>
    </Wrapper>
  )
}
