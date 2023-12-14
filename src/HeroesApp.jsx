import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouters";

export const HeroesApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}
