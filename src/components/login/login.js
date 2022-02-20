import React from "react";
import styles from "./login.module.css";
import Modal from "../ui/modal";
import Button from "../ui/formButton";

const Login = () => {
    return (
        <Modal>
            <h1>Login</h1>
            <form className={styles.formInput}>
                <p>Use Name</p>
                <input/>
                <p>Password</p>
                <input/>
                <Button type="submit">Add User</Button>
            </form>
        </Modal>
    )
};

export default Login;