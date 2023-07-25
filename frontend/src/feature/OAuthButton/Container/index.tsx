import OAuthButton from "../Component"
import { useMemo } from "react"

export interface IOauthButtonContainerProps {
    OAuth: {
        type: string
        site: string
    }
}

export default function OAuthButtonContainer({
    OAuth,
}: IOauthButtonContainerProps): JSX.Element {
    // const googleSignIn = useCallback(() => {}, [])
    // const googleSignUp = useCallback(() => {}, [])
    // const appleSignIn = useCallback(() => {}, [])
    // const appleSignUp = useCallback(() => {}, [])

    const alteredType = useMemo(() => {
        if (OAuth.type === "SignIn") return "Sign In"
        return "Sign Up"
    }, [OAuth])

    return (
        <>
            <OAuthButton type={alteredType} site={OAuth.site} />
        </>
    )
}
