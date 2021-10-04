import React, { useState, useEffect, useContext } from 'react'
import { useParams, useHistory } from "react-router-dom";
import { GeoInfo } from "../../../types/types"
import Card from "../cards/Card/Card"
import styles from "./countrySearchRender.module.scss"
import { CitySearchContext } from "../../../contexts/CitySearchContext"
import { CountrySearchContext } from "../../../contexts/CountrySearchContext"

const CountrySearchRender = () => {

    const { id } = useParams<{ id: string }>();
    let history = useHistory()
    const { citySearchupdateCities } = useContext(CitySearchContext)
    const { countrySearchCities } = useContext(CountrySearchContext)
    const [title, setTitle] = useState("")

    useEffect(() => {
        setTitle(id)
    }, [])

    const handleClick = (city: GeoInfo) => {
        citySearchupdateCities([city])
        const name = city.name
        history.push(`/city/${name.toLowerCase()}`)
    }

    return (
        <div className={styles.flexContainer}>
            {title && <span className={styles.heading}>{title}</span>}
            {countrySearchCities && countrySearchCities.map((city, index) =>
                <div key={index} onClick={() => handleClick(city)}>
                    <Card name={city.name} />
                </div>
            )}
        </div>
    )
}

export default CountrySearchRender
