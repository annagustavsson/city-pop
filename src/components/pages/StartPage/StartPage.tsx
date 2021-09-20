import React from 'react'
import {useHistory} from "react-router-dom";
import DefaultButton from "../../common/DefaultButton/DefaultButton"
import styles from "./startPage.module.scss"

interface Props {
    
}

const StartPage = (props: Props) => {

let history = useHistory()

const goToPage = (route: String) => {
    history.push(`/${route}`)
}

    return (
        <div className={styles.container}>
            <DefaultButton handleClick={goToPage} title= "search smh" route={"search-country"}/>
            <DefaultButton handleClick={goToPage} title= "search smh else" route={"search-city"}/>
        </div>
    )
}

export default StartPage
