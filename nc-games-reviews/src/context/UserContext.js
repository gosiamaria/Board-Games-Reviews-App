import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});

    const isLoggedIn = !!currentUser.username;

    const logout = () => {
        setCurrentUser({});
    };

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, isLoggedIn, logout }}>
            {children}
        </UserContext.Provider>
    );
};