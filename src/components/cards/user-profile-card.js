import React, { useContext } from "react";
import styles from "./userProfileCard.module.css";
import Card from "../ui/card";
import UserProfileImage from "../../icons/images/defaultImg.png";

import { UserContext } from "../../store/user-context";
import { USER_DETAILS } from "../../api/user-details-api";
import { Error_Toast, Success_Toast } from "../ui/toast/toast";

const UserCard = () => {
    const LogCtx = useContext(UserContext);
    const handelLogOut = () => {
        localStorage.removeItem("GreehoToken");
        localStorage.removeItem("GreehoUser");
        LogCtx.setShowProfile(false);
        LogCtx.setUser();
        LogCtx.setIsLoggedIn();
    }
    const handelProfile = async () => {
        const details = await USER_DETAILS();
        if (details.status === 200) {
            LogCtx.setUser(details.data);
            LogCtx.setShowProfile(true);
            Success_Toast(details.msg)
        } else {
            Error_Toast(details.error)
        }
    }
    return <Card>
        <div className={styles.userCardContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.userProfileImage} src={LogCtx.userDetails?.profilePicture ? `https://exam.greeho.com/api/files/${LogCtx.userDetails.profilePicture}` : UserProfileImage} alt="user" />
            </div>
            <p className={styles.profileLinks} onClick={handelProfile} >Profile</p>
            <p className={styles.profileLinks} onClick={handelLogOut}>Log out</p>
        </div>
    </Card>
}
export default UserCard;