import React from "react";
import Button from "../ui/formButton";
import styles from "./dashboard.module.css";

const Dashboard = () => {
    return <div className={styles.dashboardConatainer}>
    <p className={styles.defaulText}>Populate this page by Login. 😊</p>
    <p className={styles.defaulText}>Hi, User!</p>

    <Button> Greeho Chart</Button>
    </div>
};

export default Dashboard;