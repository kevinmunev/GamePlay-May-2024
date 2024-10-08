import * as requester from "../api/requester";

const BASE_URL = "http://localhost:3030/users";

export const login = async (email, password) => {
    const authData = await requester.post(`${BASE_URL}/login`, {
        email,
        password,
    });

    return authData;
};

export const register = async (email, password) => {
    const authData = await requester.post(`${BASE_URL}/register`, {
        email,
        password,
    });

    return authData;
};

export const logout = async () => await requester.get(`${BASE_URL}/logout`);