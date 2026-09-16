import { useAuthStore } from "../store/authStore"
import AccessDenied from "./AccessDenied"

export default function ProtectedRoute({ children }) {

    const token = useAuthStore((state) => state.token)
    if (!token) {
        return (
            <>
                <AccessDenied />
            </>
        )
    }
    return children
}
