
import React from "react";
import ReactDom from "react-dom";

import styles from "./modal.module.css";
import { Close } from "../../icons/icons";
const BackDrop=props=>{
    return <div onClick={props.onClose} className={styles.backdrop}></div>
}
const ModalOverlay=props=>{
    return <div className={styles.modal}>
        <div onClick={props.onClose}>
            {Close}
        </div>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>
}
const Modal=props=>{
    return <>
    {ReactDom.createPortal(<BackDrop onClose={props.onClose}/>, document.getElementById("overlay")) }
    {ReactDom.createPortal(<ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,document.getElementById("overlay"))}
    </>
}
export default Modal;