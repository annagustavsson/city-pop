import React from 'react'
import styles from "./populationCard.module.scss"

interface Props {
    name?: String,
    population?: Number,
    countryCode?: String
    citySearch?: Boolean,
}

// TODO: if population och countryCode är undefined, ha en annan styling med namnet i mitten

const PopulationCard = ({ name, population, countryCode }: Props) => {
    return (
        <div className={styles.card}>
            <div>
                {name && <span>{name}</span>}
                {countryCode && <span>, {countryCode}</span>}
            </div>
            <span>Population</span>
            {population && <span className={styles.heading}>{population}</span>}
        </div>
    )
}

export default PopulationCard
