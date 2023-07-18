import { Wrapper, Wrap, LogoWrap, TextWrap } from "./style"
import Image from "next/image"

export interface IOauthButtonProps {
    type: string
    site: string
}

export default function OAuthButton({
    type,
    site,
}: IOauthButtonProps): JSX.Element {
    return (
        <Wrapper>
            <Wrap>
                <LogoWrap>
                    <Image
                        src={`/images/icons/${site}.svg`}
                        alt={`${site} logo`}
                        width={24}
                        height={24}
                    ></Image>
                </LogoWrap>
                <TextWrap>
                    {type} with {site}
                </TextWrap>
            </Wrap>
        </Wrapper>
    )
}
