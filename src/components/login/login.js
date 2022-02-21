import React, { useState, useContext } from "react";
import styles from "./login.module.css";
import Modal from "../ui/modal";
import Button from "../ui/formButton";
import Loading from "../ui/loading";
import { Error_Toast, Success_Toast } from "../ui/toast/toast";
import { UserContext } from "../../store/user-context";

const Login = props => {
    const [isLoading, setIsLoading] = useState(false);
    const LogCtx = useContext(UserContext);

    const handleLoginForm = async e => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        const dataRes = await props.onData(data);
        const UserInfo = dataRes.data;
        // console.log(JSON.parse(test))
        if (dataRes.status === 200) {
            setIsLoading(false);
            localStorage.setItem("GreehoToken", dataRes.token)
            console.log(dataRes.data, "Testing")
            localStorage.setItem("GreehoUser", JSON.stringify(UserInfo))
            Success_Toast("Login Successfully!");
            LogCtx.setIsLoggedIn();
            LogCtx.setUser(dataRes.data);
            props.onShow();
        } else {
            setIsLoading(false);

            Error_Toast(dataRes.error)
        }
    }
    return (
        <Modal onClose={props.onShow}>
            <h1>Login</h1>
            {isLoading && <Loading />}
            {!isLoading && <form onSubmit={handleLoginForm} className={styles.formInput}>
                <p>Use Name</p>
                <input type="text" name="username" required />
                <p>Password</p>
                <input type="password" name="password" required />
                <Button type="submit">Add User</Button>
            </form>}
        </Modal>
    )
};

export default Login;