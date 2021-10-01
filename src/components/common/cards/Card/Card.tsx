import React from 'react'
import { cardActionAreaClasses } from '@mui/material'
import styles from "./card.module.scss"

interface Props {
    name: String,
}

const Card = ({ name }: Props) => {
    return (
        <div className={styles.card}>
            {name && <span>{name}</span>}
        </div>
    )
}

export default Card
