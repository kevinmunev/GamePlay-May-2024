import * as gamesApi from "../../api/games-api.js";
import { useState, useEffect } from "react";
import GamesListItem from "./games-list-item/GamesListItem.jsx";

export default function GamesList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await gamesApi.getAll();
      setGames(result);
    })();
    
  }, []);

  return (
    <section id="catalog-page">
      <h1>All Games</h1>
     
      {games.length > 0 
        ? games.map((game) => <GamesListItem key={game._id} {...game} />)
        : <h3 className="no-articles">No articles yet</h3>
      }
    
    </section>
  );
}
