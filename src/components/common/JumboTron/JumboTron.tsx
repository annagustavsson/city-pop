import React from 'react'
import logo from "../../../resources/images/citypop-logo.png"
import styles from "./jumboTron.module.scss"


const JumboTron = () => {
    return (
        <div className={styles.flexContainer}>
            <img src={logo}></img>
            <span className={styles.heading}>CityPop</span>
        </div>
    )
}

export default JumboTron
