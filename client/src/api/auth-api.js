import * as requester from "../api/requester";

const BASE_URL = "http://localhost:3030/users";


export const login = async (email, password) => {
    const result = await requester.post(`${BASE_URL}/login`, {
        email,
        password,
    });

    return result;
};
