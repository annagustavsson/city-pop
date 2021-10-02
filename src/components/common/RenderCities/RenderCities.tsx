import React from 'react'
import { GeoInfo } from "../../../types/types"
import PopulationCard from "../cards/PopulationCard/PopulationCard"
import Card from "../cards/Card/Card"
import styles from "./renderCities.module.scss"

interface Props {
    cityInfo: Array<GeoInfo>
    searchEntry?: String,
    handleClick?: Function,
}

const RenderCities = ({ cityInfo, searchEntry, handleClick }: Props) => {


    return (
        <div className={styles.flexContainer}>
            {searchEntry && <span className={styles.heading}>{searchEntry}</span>}
            {cityInfo && cityInfo.map((city, index) =>
                handleClick ?
                    <div key={index} onClick={() => handleClick(city)}>
                        <Card name={city.name} />
                    </div> :
                    <div key={index}>
                        <PopulationCard population={city.population} />
                    </div>
            )}
        </div>
    )
}

export default RenderCities
