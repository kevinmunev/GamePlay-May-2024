import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as gamesApi from "../../api/games-api.js";
import commentApi from "../../api/comment-api.js";


export default function GameDetails() {
    const [game, setGame] = useState({});
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const { gameId } = useParams();

    useEffect(() => {
        (async () => {
            const game = await gamesApi.getOne(gameId);

            setGame(game);
        })();
    }, []);
 
    const commentSubmitHandler = async (e) => {
        e.preventDefault();

        const comments = await commentApi.create(gameId, username, comment);  
    };


    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imagUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments for current game (If any) --> */}
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    {/* <!-- Display paragraph: If there are no games in the database --> */}
                    <p className="no-comment">No comments.</p>
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                {/* <div className="buttons">
                <a href="#" className="button">Edit</a>
                <a href="#" className="button">Delete</a>
            </div> */}
            </div>

            {/* <!-- Bonus -->
        <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={commentSubmitHandler}>
                    <input
                        type="text"
                        placeholder="Pesho"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    <input
                        className="btn submit"
                        type="submit"
                    />
                </form>
            </article>
        </section>
    );
}
