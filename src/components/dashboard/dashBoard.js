import React, { useContext } from "react";
import Button from "../ui/formButton";
import styles from "./dashboard.module.css";
import { UserContext } from "../../store/user-context";

const Dashboard = () => {
    const LogCtx = useContext(UserContext);
    return <div className={styles.dashboardConatainer}>
        {!LogCtx.isLoggedIn && <p className={styles.defaulText}>Populate this page by Login. 😊</p>}
        {LogCtx.isLoggedIn && <p className={styles.defaulText}>Hi, {LogCtx.userName}!</p>}
        {LogCtx.userType === "ADMIN" && <Button> Greeho Chart</Button>}

    </div>
};

export default Dashboard;