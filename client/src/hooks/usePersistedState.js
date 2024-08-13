import { useState } from "react";

export default function usePersistedState(key, initialValue) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);

        if (!persistedState) {
            return typeof initialValue === "function"
                ? initialValue()
                : initialValue;
        }

        const authData = JSON.parse(persistedState);

        return authData;
    });

    const updateState = (value) => {
        const newState = typeof value === "function" ? value(state) : value;

        localStorage.setItem(key, JSON.stringify(newState));

        setState(newState);
    };

    return [state, updateState];
}
