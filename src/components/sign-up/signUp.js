import React, {useState} from "react";
import styles from "./signUp.module.css";
import Modal from "../ui/modal";
import Button from "../ui/formButton";
import Loading from "../ui/loading";
import  ErrorMessage from "../ui/error-message/errorMessage";

const SignUp= props => {
    const [isLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState();
    
    const handleFormData = async e => {
        setIsLoading(true);
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        const dataRes = await props.onData(data);
        if(dataRes.status === 200) {
            setIsLoading(false);
        } else {
            setIsLoading(false);
            setErrMsg(dataRes.error);
        }
    }
    return <>
    {errMsg && <ErrorMessage />}
    <Modal onClose={props.onShow}>
        <h1>Sign Up</h1>
        {isLoading && <Loading/>}
        {!isLoading && <form className={styles.formInput} onSubmit={handleFormData}>
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
        </form>}
        
    </Modal>
    </>
};

export default SignUp;