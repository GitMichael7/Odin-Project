import React from "react";
import styles from "./navbar.module.css"

const Nav = () => {

    return (
        
        <div class={styles.container}>
        <h2>Random Store</h2>
            <div class={styles.contain}>
        <a href="" className={styles.link}>Home</a>
        <a href="" className={styles.link}>Shopping</a>
        <a href="" className={styles.link}>Cart</a>
            </div>
        </div>
    )
}

export default Nav