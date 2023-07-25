import Image from "next/image"
import { useRouter } from "next/router"
import MoveButton from "@/src/component/Button/MoveButton"
import { useCallback } from "react"
import {
    Wrapper,
    Wrap,
    TopBackgroundWrap,
    LogoIconWrap,
    LogoTextWrap,
    VisionWrap,
    ButtonWrap,
} from "@/styles"

export default function Home(): JSX.Element {
    const router = useRouter()
    const onClick = useCallback(() => {
        if (localStorage.getItem("jwt")) {
            router.push("/dashboard")
            return
        }
        router.push("/auth/signIn")
    }, [])

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
                    <Image
                        src="/images/figure/LogoImage.png"
                        alt="logo image"
                        fill
                    />
                </LogoIconWrap>
                <LogoTextWrap>CoShell</LogoTextWrap>
                <VisionWrap>A new way to control your home</VisionWrap>
                <ButtonWrap>
                    <MoveButton onClick={onClick} backgroundColor="green">
                        GET STARTED
                    </MoveButton>
                </ButtonWrap>
            </Wrap>
        </Wrapper>
    )
}
