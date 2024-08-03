import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import GamesList from "./components/games-list/GamesList";
import GameCreate from "./components/game-create/GameCreate";
import GameDetails from "./components/game-details/GameDetails";
import { AuthContext } from "./contexts/AuthContext";

function App() {
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
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/games" element={<GamesList />} />
                        <Route
                            path="/games/:gameId/details"
                            element={<GameDetails />}
                        />
                        <Route path="/games/create" element={<GameCreate />} />
                    </Routes>
                </main>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
