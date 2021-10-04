import React from 'react'
import { useHistory } from "react-router-dom";
import logo from "../../../resources/images/citypop-logo.png"
import styles from "./jumboTron.module.scss"


const JumboTron = () => {

    let history = useHistory()

    const handleClick = () => {
        history.push("/")
    }

    return (
        <div onClick={handleClick} className={styles.flexContainer}>
            <img src={logo}></img>
            <span className={styles.heading}>CityPop</span>
        </div>
    )
}

export default JumboTron
