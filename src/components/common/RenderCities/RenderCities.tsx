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
                    <div onClick={() => handleClick(city)}>
                        <Card key={index} name={city.name} />
                    </div> :
                    <div>
                        <PopulationCard key={index} population={city.population} />
                    </div>
            )}

        </div>
    )
}

export default RenderCities
