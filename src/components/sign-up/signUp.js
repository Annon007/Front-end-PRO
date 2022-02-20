import React from "react";
import styles from "./signUp.module.css";
import Modal from "../ui/modal";
import Button from "../ui/formButton";

const SignUp= props => {
    const handleFormData = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        props.onData(data)
    }
    return <Modal onClose={props.onShow}>
        <h1>Sign Up</h1>
        <form className={styles.formInput} onSubmit={handleFormData}>
            <p>UseR Name</p>
            <input type="text" name="username" required/>
            <p>Email</p>
            <input type="email" name="email" required/>
            <p>Mobile</p>
            <input type="text" name="mobile" required/>
            <p>Password</p>
            <input type="password" name="password" required/>
            <p>Confirm Password</p>
            <input type="password" name="confirmPassword" required/>
            <Button type="submit">Sign Up</Button>
        </form>
    </Modal>
};

export default SignUp;