import Link from "next/link"
import { authUserSession } from "@/libs/auth-libs"

const UserActionButton = async() => {
    const user = await authUserSession()
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return(
            <div className="flex justify-between gap-2 text-color-primary">
                {
                    user ? <Link href="/users/dashboard">Dashboard</Link> : null
                }
                <Link href={actionURL} className="">{actionLabel}</Link>
            </div>
    )
}

export default UserActionButton
