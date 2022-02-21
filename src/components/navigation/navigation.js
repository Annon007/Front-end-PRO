import React, { useState, useContext, useEffect } from "react";
import styles from "./navigation.module.css";
import DefaultImg from "../../icons/images/defaultImg.png"

import UserCard from "../cards/user-profile-card";
import Login from "../login/login"
import SignUp from "../sign-up/signUp";
import { UserContext } from "../../store/user-context";

// API
import { SIGN_UP } from "../../api/sign-up-api";
import { LOGIN_API } from "../../api/login-api";
const Navigation = props => {
  const [showLogIn, setShowLogIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const LogCtx = useContext(UserContext);
  const localData = localStorage.getItem("GreehoUser");
  const parseData = JSON.parse(localData);
  useEffect(() => {

    if (localStorage.getItem("GreehoToken")) {
      LogCtx.setIsLoggedIn();
      LogCtx.setUser(parseData);

    }
  }, [])

  const handlLogInModal = () => {
    console.log("Calling")
    setShowLogIn(!showLogIn)
  };
  const handlSignUpModal = () => {
    console.log("Calling")
    setShowSignUp(!showSignUp)
  };
  const getSignUpData = async data => {
    const res = await SIGN_UP(data)

    return res
  };
  const getLoginData = async data => {
    const res = await LOGIN_API(data);

    return res;
  }




  return <div className={styles.navConatainer}>
    {showLogIn && <Login onShow={handlLogInModal} onData={getLoginData} />}
    {showSignUp && <SignUp onShow={handlSignUpModal} onData={getSignUpData} />}
    {!LogCtx.isLoggedIn && <p className={styles.navLinks} onClick={handlLogInModal} >Login</p>}
    {!LogCtx.isLoggedIn && <p className={styles.navLinks} onClick={handlSignUpModal}>Sign Up</p>}

    {LogCtx.isLoggedIn && <img src={DefaultImg} className={styles.userProfileImage} alt="user" />}


    {LogCtx.isLoggedIn && <div className={styles.profileCard}>
      <UserCard />
    </div>}

    {/* {User} */}
  </div>
};

export default Navigation;