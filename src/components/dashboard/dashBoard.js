import React, { useContext, useState } from "react";
import Button from "../ui/formButton";
import styles from "./dashboard.module.css";
import { UserContext } from "../../store/user-context";
import UserProfile from "../user-profile/userProfile";

const Dashboard = () => {
    const LogCtx = useContext(UserContext);


    return <div className={styles.dashboardConatainer}>
        {!LogCtx.isLoggedIn && <p className={styles.defaulText}>Populate this page by Login. 😊</p>}
        {LogCtx.isLoggedIn && !LogCtx.showProfile && <p className={styles.defaulText}>Hi, {LogCtx.userName}!</p>}
        {LogCtx.userType === "ADMIN" && !LogCtx.showProfile && <Button> Greeho Chart</Button>}
        {LogCtx.showProfile && LogCtx.isLoggedIn && <UserProfile />}


    </div>
};

export default Dashboard;