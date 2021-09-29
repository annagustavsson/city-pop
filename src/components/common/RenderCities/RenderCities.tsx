import React from 'react'
import { GeoInfo } from "../../../types/types"
import Card from "../../common/Card/Card"
import styles from "./renderCities.module.scss"

interface Props {
    cityInfo: Array<GeoInfo>
    searchEntry?: String,
}

const RenderCities = ({ cityInfo, searchEntry }: Props) => {
    return (
        <div className={styles.flexContainer}>
            {searchEntry && <span>{searchEntry}</span>}
            {cityInfo && cityInfo.map((city, index) =>
                <Card key={index} name={city.name} population={city.population} countryCode={city.countryCode} />
            )}
        </div>
    )
}

export default RenderCities
