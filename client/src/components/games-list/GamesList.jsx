
import GamesListItem from "./games-list-item/GamesListItem.jsx";
import { useGetAllGames } from "../../hooks/useGames.js";

export default function GamesList() {
    const [games] = useGetAllGames();

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.length > 0 ? (
                games.map((game) => <GamesListItem key={game._id} {...game} />)
            ) : (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    );
}
