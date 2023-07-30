import { Wrapper, Wrap, SuccessImageWrap, TextWrapper } from "./style"
import Image from "next/image"

export default function Success() {
    return (
        <Wrapper>
            <Wrap>
                <SuccessImageWrap>
                    <Image
                        src="/images/figure/success.png"
                        alt="success"
                        width={80}
                        height={80}
                    />
                </SuccessImageWrap>
                <TextWrapper>Tv Lounge Added</TextWrapper>
            </Wrap>
        </Wrapper>
    )
}
