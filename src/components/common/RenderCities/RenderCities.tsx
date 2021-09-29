import React from 'react'
import { GeoInfo } from "../../../types/types"
import Card from "../../common/Card/Card"
import styles from "./renderCities.module.scss"

interface Props {
    cityInfo: Array<GeoInfo>
    searchEntry?: String,
    handleClick?: Function,
}

const RenderCities = ({ cityInfo, searchEntry, handleClick }: Props) => {


    return (
        <div className={styles.flexContainer}>
            {!cityInfo ? <div>no city info:(</div> : <div>we have cityinfo</div>}
            {searchEntry && <span>{searchEntry}</span>}

            {cityInfo && cityInfo.map((city, index) =>

                handleClick ?
                    <div onClick={() => handleClick(city)}>
                        <Card key={index} name={city.name} population={city.population} countryCode={city.countryCode} />
                    </div> :
                    <div>
                        <Card key={index} name={city.name} population={city.population} countryCode={city.countryCode} />
                    </div>
            )}

        </div>
    )
}

export default RenderCities
