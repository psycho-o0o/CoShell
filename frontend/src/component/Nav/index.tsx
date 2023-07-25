import { Wrapper, Wrap } from "./style"
import Image from "next/image"

export default function Nav(): React.ReactElement {
    return (
        <Wrapper>
            <Wrap currentIndex={1}>
                <div>
                    <Image
                        src="/images/icons/dashboard.svg"
                        alt="dashboard"
                        width={24}
                        height={24}
                    />
                    <span>Dashboard</span>
                </div>
                <div>
                    <Image
                        src="/images/icons/door.svg"
                        alt="rooms"
                        width={24}
                        height={24}
                    />
                    <span>Rooms</span>
                </div>
                <div>
                    <Image
                        src="/images/icons/user.svg"
                        alt="profile"
                        width={24}
                        height={24}
                    />
                    <span>Profile</span>
                </div>
            </Wrap>
        </Wrapper>
    )
}
