import React from 'react'
import { cardActionAreaClasses } from '@mui/material'
import styles from "./card.module.scss"

interface Props {
    name: String,
    population?: Number,
    countryCode?: String
}

// TODO: if population och countryCode är undefined, ha en annan styling med namnet i mitten

const Card = ({ name, population, countryCode }: Props) => {
    return (
        <div className={styles.card}>
            {name && countryCode && <span>{name}, {countryCode}</span>}
            <span>Population</span>
            <span>{population}</span>
        </div>
    )
}

export default Card
