import * as request from "./requester"
const GAMES_URL = "http://localhost:3030/jsonstore/games";

const create = async (commentId, username, text) => {
   const response = await request
   .post(`${GAMES_URL}/${commentId}/comments`, { username, text });

   const comments = Object.values(response);
   
   return comments;
    
}

export default {
    create,
}