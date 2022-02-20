import React from "react";
import styles from "./navigation.module.css";
import DefaultImg from "../../icons/images/defaultImg.png"

import UserCard from "../cards/user-profile-card";

const Navigation = () => {
    return <div className={styles.navConatainer}>
        <p className={styles.navLinks}>Login</p>
        <p className={styles.navLinks}>Sign Up</p>
        <img src={DefaultImg} className={styles.userProfileImage} alt="user"/>
        <div className={styles.profileCard}>
            <UserCard/>
        </div>
        {/* {User} */}
    </div>
};

export default Navigation;