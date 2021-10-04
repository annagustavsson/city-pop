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
        <div className={styles.jumbotron}>
            <div className={styles.flexContainer}>
                <div onClick={handleClick} className={styles.logoContainer}>
                    <img src={logo}></img>
                    <span className={styles.heading}>CityPop</span>
                </div>
            </div>
        </div>
    )
}

export default JumboTron
