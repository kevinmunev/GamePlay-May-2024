import { useEffect, useState } from "react";

import * as gamesApi from "../../api/games-api.js";

import LatestGames from "../latest-games/LatestGames.jsx";

export default function Home() {
    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await gamesApi.getAll();
            console.log(result)
            const games = result.reverse().slice(0, 3);

            setLatestGames(games);
        })();
    },[]);

    return (
        <section id="welcome-world">

        <div className="welcome-message">
            <h2>ALL new games are</h2>
            <h3>Only in GamesPlay</h3>
        </div>
        <img src="./images/four_slider_img01.png" alt="hero"/>

        <div id="home-page">
            <h1>Latest Games</h1>

           {latestGames.length > 0 
             ? latestGames.map( (game) => <LatestGames key={game._id} {...game}/>)
             : <p className="no-articles">No games yet</p>
            }

        </div>
    </section>
    )
}