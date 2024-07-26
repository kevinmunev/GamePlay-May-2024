import * as request from "./requester"
const GAMES_URL = "http://localhost:3030/jsonstore/games";

const create = async (commentId, username, text) => {
   const response = await request
   .post(`${GAMES_URL}/${commentId}/comments`, { username, text });
    
   return response;
}

const getAll = async (gameId) => {
    const response = await request.get(`${GAMES_URL}/${gameId}/comments`);

    const comments = Object.values(response);
    return comments;
}

export default {
    create,
}