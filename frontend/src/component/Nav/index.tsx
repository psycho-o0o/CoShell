import Link from "next/link"
import { Wrapper, Wrap } from "./style"
import Image from "next/image"
import { useRouter } from "next/router"
import { useMemo } from "react"

export default function Nav(): React.ReactElement {
    const router = useRouter()

    const currentIndex = useMemo(() => {
        console.log(router.pathname)
        if (router.pathname === "/dashboard") return 1
        else if (router.pathname === "/room") return 2
        else if (router.pathname === "/profile") return 3
        else return 4
    }, [router])
    return (
        <Wrapper>
            <Wrap currentIndex={currentIndex}>
                <Link href="/dashboard">
                    <div>
                        <Image
                            src="/images/icons/dashboard.svg"
                            alt="dashboard"
                            width={24}
                            height={24}
                        />
                        <span>Dashboard</span>
                    </div>
                </Link>
                <Link href="/room">
                    <div>
                        <Image
                            src="/images/icons/door.svg"
                            alt="rooms"
                            width={24}
                            height={24}
                        />
                        <span>Rooms</span>
                    </div>
                </Link>
                <Link href="/profile">
                    <div>
                        <Image
                            src="/images/icons/user.svg"
                            alt="profile"
                            width={24}
                            height={24}
                        />
                        <span>Profile</span>
                    </div>
                </Link>
            </Wrap>
        </Wrapper>
    )
}
