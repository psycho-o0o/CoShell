import { Wrapper, Wrap, TitleWrap, PlusButtonWrap } from "./style"
import Nav from "@/src/component/Nav"
import Image from "next/image"
export interface IDashboardLayoutProps {
    isBlockedScroll?: boolean
    onClickCreateButton: () => void
    children: React.ReactElement
}

export default function DashboardLayout({
    isBlockedScroll,
    onClickCreateButton,
    children,
}: IDashboardLayoutProps): JSX.Element {
    return (
        <Wrapper isBlockedScroll={isBlockedScroll}>
            <Wrap>
                <TitleWrap>
                    <h1>My Home</h1>
                    <PlusButtonWrap onClick={onClickCreateButton}>
                        <Image
                            src="/images/icons/plus.svg"
                            alt="add enviroment"
                            width={27}
                            height={27}
                        />
                    </PlusButtonWrap>
                </TitleWrap>
                {children}
                <Nav />
            </Wrap>
        </Wrapper>
    )
}
