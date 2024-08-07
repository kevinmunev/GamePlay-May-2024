import { createContext } from "react";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext({
    userId: "",
    email: "",
    accessToken: "",
    isAuthenticated: "",
    changeAuthState: () => {null},
});


export function AuthContextProvider(props) {
    const [authState, setAuthState] = usePersistedState('auth',{});

    const changeAuthState = (authData) => {
        localStorage.setItem("accessToken", authData.accessToken);

        setAuthState(authData);
    };
    const contextData = {
        userId: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState,
    };
    
    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
}