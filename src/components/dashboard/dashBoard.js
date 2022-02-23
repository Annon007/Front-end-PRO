import React, { useContext, useState } from "react";
import Button from "../ui/formButton";
import styles from "./dashboard.module.css";
import { UserContext } from "../../store/user-context";
import UserProfile from "../user-profile/userProfile";
import AllUsers from "../all-users/allUsers";

const Dashboard = () => {
    const LogCtx = useContext(UserContext);
    const [showAllUsers, setShowAllUsers] = useState(false);

    const handelAllUsers = () => {
        setShowAllUsers(!showAllUsers);
    }

    return <div className={styles.dashboardConatainer}>
        {!LogCtx.isLoggedIn && <p className={styles.defaulText}>Populate this page by Login. 😊</p>}
        {LogCtx.isLoggedIn && !LogCtx.showProfile && !showAllUsers && <p className={styles.defaulText}>Hi, {LogCtx.userName}!</p>}
        {LogCtx.userType === "ADMIN" && !LogCtx.showProfile && !showAllUsers && <Button> Greeho Chart</Button>}
        {LogCtx.userType === "ADMIN" && !LogCtx.showProfile && <Button onClick={handelAllUsers}> {showAllUsers ? "Back" : "All Users"} </Button>}
        {LogCtx.showProfile && LogCtx.isLoggedIn && <UserProfile />}
        {showAllUsers && LogCtx.isLoggedIn && !LogCtx.showProfile && <AllUsers />}


    </div>
};

export default Dashboard;