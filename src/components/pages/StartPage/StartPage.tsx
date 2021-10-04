import React from 'react'
import { useHistory } from "react-router-dom";
import DefaultButton from "../../common/DefaultButton/DefaultButton"
import styles from "./startPage.module.scss"

interface Props {

}

const StartPage = (props: Props) => {

    let history = useHistory()

    const goToPage = (route: String) => {
        history.push(`/search/${route}`)
    }

    return (
        <div className={styles.container}>
            <div className={styles.buttonContainer}>
                <DefaultButton handleClick={goToPage} title="search country" route={"country"} />
            </div>
            <div className={styles.buttonContainer}>
                <DefaultButton handleClick={goToPage} title="search city" route={"city"} />
            </div>

        </div>
    )
}

export default StartPage
