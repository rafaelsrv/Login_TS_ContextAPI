import { useContext } from "react";
import { Login } from "../../pages/login";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);// mds

    if (!auth.user) {
       

        return <Login />;
    }

    return children;
}