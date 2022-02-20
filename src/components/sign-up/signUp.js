import React from "react";
import styles from "./signUp.module.css";
import Modal from "../ui/modal";
import Button from "../ui/formButton";

const SignUp= props => {
    return <Modal onClose={props.onShow}>
        <h1>Sign Up</h1>
        <form className={styles.formInput}>
            <p>UseR Name</p>
            <input type="text" required/>
            <p>Email</p>
            <input type="email" required/>
            <p>Mobile</p>
            <input type="text" required/>
            <p>Password</p>
            <input type="password" required/>
            <p>Confirm Password</p>
            <input type="password" required/>
            <Button type="submit">Sign Up</Button>
        </form>
    </Modal>
};

export default SignUp;