import React from 'react'
import styles from "./card.module.scss"

// component for displaying a basic card
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
