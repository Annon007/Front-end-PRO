import React from "react";
import styles from "./formButton.module.css";

const Button = props => {
    return <button className={props?.disabled ? `${styles.invalid}` : `${styles.button}`} disabled={props?.disabled || false} type={props.type || "button"} onClick={props.onClick}>{props.children}</button>
}
export default Button;