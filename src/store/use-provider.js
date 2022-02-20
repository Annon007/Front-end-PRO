import React, { useReducer, useState } from "react";
import { UserContext } from "./user-context";

const userReducer = (state, action) => {
    if (action.type === "CHECK_USER") {
        return { userType: action.value.userType, userName: action.value.username }
    }
    return { userType: "", userName: "" }
}

const UserProvider = props => {
    const [userState, dispatchUser] = useReducer(userReducer, { userType: "", userName: "" });
    const [log, setLog] = useState(false);
    const handleUser = (user) => {
        dispatchUser({ type: "CHECK_USER", value: user })
    }
    const handelLog = () => {
        setLog(!log);
    }
    const initialValue = {
        userType: userState.userType,
        userName: userState.userName,
        setUser: handleUser,
        isLoggedIn: log,
        setIsLoggedIn: handelLog
    }
    return <UserContext.Provider value={initialValue}>
        {props.children}
    </UserContext.Provider>
}
export default UserProvider;