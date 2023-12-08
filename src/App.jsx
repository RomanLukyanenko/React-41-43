import { Header } from "./components/Header";
import { LoginButton } from "./components/LoginButton";
import { Posts } from "./components/Posts";
import { UserProvider } from "./components/UserContext";

export const App = () => {
    return (
        <UserProvider>
            <Header />
            <LoginButton />
            <Posts />
        </UserProvider>
    );
};