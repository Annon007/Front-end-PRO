import React from "react";

export const UserContext = React.createContext({
    userType: "",
    userName: "",
    isLoggedIn: false,
    showProfile: false,
    userDetails: undefined,
    setUser: () => { },
    setIsLoggedIn: () => { },
    setShowProfile: () => { },
});