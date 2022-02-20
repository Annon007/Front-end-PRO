import React from "react";

import styles from "./errorMessage.module.css";

const ErrorMessage = props => {
    return <div >
        <ul>
            <li className={styles.errorConatiner}>Hii</li>
            <li className={styles.errorConatiner}>Hello</li>
            <li className={styles.errorConatiner}>Bye</li>
        {/* {props.msg.map = el => <li className={styles.errorConatiner}>{el}</li>} */}
        </ul>
    </div>
};

export default ErrorMessage;