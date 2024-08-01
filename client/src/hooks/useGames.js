import { useState, useEffect } from "react";

import * as gamesApi from "../api/games-api";

export function useGetAllGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await gamesApi.getAll();
            setGames(result);
        })();
    }, []);

    return [games, setGames];
}

export function useGetOneGames(gameId) {
    const [game, setGame] = useState({});

    useEffect(() => {
        (async () => {
            const game = await gamesApi.getOne(gameId);

            setGame(game);
        })();
    }, [gameId]);

    return [game, setGame];
}

export function useCreateGame() {
    const gameCreateHandler = async (gameData) => gamesApi.create(gameData);
    
    return gameCreateHandler;
}
