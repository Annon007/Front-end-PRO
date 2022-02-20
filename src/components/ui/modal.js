
import React from "react";
import ReactDom from "react-dom";

import styles from "./modal.module.css";
const BackDrop=props=>{
    return <div  className={styles.backdrop}></div>
}
const ModalOverlay=props=>{
    return <div className={styles.modal}>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>
}
const Modal=props=>{
    return <>
    {ReactDom.createPortal(<BackDrop/>, document.getElementById("overlay")) }
    {ReactDom.createPortal(<ModalOverlay >{props.children}</ModalOverlay>,document.getElementById("overlay"))}
    </>
}
export default Modal;