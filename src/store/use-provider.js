import React, { useReducer, useState } from "react";
import { UserContext } from "./user-context";

const userReducer = (state, action) => {
    if (action.type === "CHECK_USER") {
        return { userType: action.value.userType, userName: action.value.username, user: action.value }
    }
    return { userType: "", userName: "", user: undefined }
}

const UserProvider = props => {
    const [userState, dispatchUser] = useReducer(userReducer, { userType: "", userName: "", user: undefined });
    const [log, setLog] = useState(false);
    const [profile, setProfile] = useState(false);
    const handleUser = (user) => {
        dispatchUser({ type: "CHECK_USER", value: user })
    }
    const handelLog = () => {
        setLog(!log);
    }
    const handelProfile = () => {
        setProfile(!profile);
    }
    const initialValue = {
        userType: userState.userType,
        userName: userState.userName,
        setUser: handleUser,
        isLoggedIn: log,
        setIsLoggedIn: handelLog,
        setShowProfile: handelProfile,
        showProfile: profile,
        userDetails: userState.user
    }
    return <UserContext.Provider value={initialValue}>
        {props.children}
    </UserContext.Provider>
}
export default UserProvider;