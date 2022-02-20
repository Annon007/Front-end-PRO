import React, { useState } from "react";
import styles from "./navigation.module.css";
import DefaultImg from "../../icons/images/defaultImg.png"

import UserCard from "../cards/user-profile-card";
import Login from "../login/login"
import SignUp from "../sign-up/signUp"

// API
import { SIGN_UP } from "../../api/sign-up-api";
const Navigation = props => {
    const [showLogIn, setShowLogIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const handlLogInModal = () => {
      console.log("Calling")
      setShowLogIn(!showLogIn)
    };
    const handlSignUpModal = () => {
      console.log("Calling")
      setShowSignUp(!showSignUp)
    };
    const getSignUpData = async data =>{
        const res = await SIGN_UP(data)
        console.log(res)
        return res
    };




    return <div className={styles.navConatainer}>
        {showLogIn && <Login onShow={handlLogInModal} />}
        {showSignUp && <SignUp onShow={handlSignUpModal} onData={getSignUpData}/>}
        <p className={styles.navLinks} onClick={handlLogInModal} >Login</p>
        <p className={styles.navLinks} onClick={handlSignUpModal}>Sign Up</p>
        <img src={DefaultImg} className={styles.userProfileImage} alt="user"/>
        <div className={styles.profileCard}>
            <UserCard/>
        </div>
        {/* {User} */}
    </div>
};

export default Navigation;