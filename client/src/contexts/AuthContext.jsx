import { createContext, useState } from "react";

export const AuthContext = createContext({
    userId: "",
    email: "",
    accessToken: "",
    isAuthenticated: "",
    changeAuthState: () => {null},
});


export function AuthContextProvider(props) {
    const [authState, setAuthState] = useState({});

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