import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import GamesList from "./components/games-list/GamesList";
import GameCreate from "./components/game-create/GameCreate";
import GameDetails from "./components/game-details/GameDetails";

function App() {
    return (
        <AuthContextProvider>
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
        </AuthContextProvider>
    );
}

export default App;
