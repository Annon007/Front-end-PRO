import React from "react";
import styles from "./loading.module.css";
import loading from "../../icons/images/loading.png"

const Loading=()=>{
    return <div className={styles.loadingContainer}>
        <img src={loading} className={styles.load} alt="loading"/>
    </div>
};
export default Loading;