import { Wrapper, Wrap, Logo, LogoImageWrap, Title } from "./style"
import Image from "next/image"

export interface ISignLayoutProps {
    title: string
    subTitle: string
    children: React.ReactNode
}

export default function SignLayout({
    title,
    subTitle,
    children,
}: ISignLayoutProps): JSX.Element {
    return (
        <Wrapper>
            <Wrap>
                <Logo>
                    <LogoImageWrap>
                        <Image
                            alt="logo Image"
                            src="/images/figure/LogoImage.png"
                            width={41}
                            height={41}
                        />
                    </LogoImageWrap>
                    <span className="text">CoShell</span>
                </Logo>
                <Title>
                    <div>{title}</div>
                    <div>{subTitle}</div>
                </Title>
                {children}
            </Wrap>
        </Wrapper>
    )
}
