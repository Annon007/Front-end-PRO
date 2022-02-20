import React from "react";
import styles from "./userProfileCard.module.css";
import Card from "../ui/card";
import UserProfileImage from "../../icons/images/defaultImg.png"

const UserCard = () => {
    return<Card>
        <div className={styles.userCardContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.userProfileImage}src={UserProfileImage} alt="user"/>
            </div>
            <p className={styles.profileLinks} >Profile</p>
            <p className={styles.profileLinks}>Log out</p>
        </div>
    </Card>
}
export default UserCard;