import React, {useReducer} from "react";
import { UserContext } from "./user-context";
import { useReducer } from "react";

const userReducer = (state, action) => {
    
}

const UserProvider = props => {
    const [userState, dispatchUser] = useReducer(userReducer, {userType:""})
    const handleUser =(user)=>{
        
    }
    const initialValue = {
        userType:"",
        setUser: handleUser
    }
    return <UserContext.Provider value={initialValue}>
        {props.children}
    </UserContext.Provider>
}
export default UserProvider;