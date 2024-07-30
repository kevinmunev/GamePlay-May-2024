import { createContext } from "react";

export const AuthContext = createContext({
    email: "",
    accessToken: "",
    isAuthenticated: "",
    changeAuthState: () => {null},
});
