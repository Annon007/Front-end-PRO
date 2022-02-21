import React, { useContext } from "react";
import styles from "./userProfileCard.module.css";
import Card from "../ui/card";
import UserProfileImage from "../../icons/images/defaultImg.png";

import { UserContext } from "../../store/user-context";

const UserCard = () => {
    const LogCtx = useContext(UserContext);
    const handelLogOut = () => {
        localStorage.removeItem("GreehoToken");
        localStorage.removeItem("GreehoUser");
        LogCtx.setIsLoggedIn();
    }
    return <Card>
        <div className={styles.userCardContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.userProfileImage} src={UserProfileImage} alt="user" />
            </div>
            <p className={styles.profileLinks} >Profile</p>
            <p className={styles.profileLinks} onClick={handelLogOut}>Log out</p>
        </div>
    </Card>
}
export default UserCard;