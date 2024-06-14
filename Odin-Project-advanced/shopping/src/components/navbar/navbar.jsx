import React from "react";
import styles from "./navbar.module.css"
import {Link} from "react-router-dom"

const Nav = () => {

    return (
        
        <div class={styles.container}>
        <h2>Random Store</h2>
            <div class={styles.contain}>
        <Link to="/home" className={styles.link}>Home</Link>
        <Link to="/shopping" className={styles.link}>Shopping</Link>
        <Link to="/shoppingCart" className={styles.link}>Cart</Link>
            </div>
        </div>
    )
}

export default Nav

