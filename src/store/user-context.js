import React from "react";

export const UserContext = React.createContext({
    userType: "",
    userName: "",
    isLoggedIn: false,
    setUser: () => { },
    setIsLoggedIn: () => { },
});