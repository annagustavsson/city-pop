import React, { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom";
import PopulationCard from "../../common/cards/PopulationCard/PopulationCard"
import styles from "./citySearchRender.module.scss"
import { CitySearchContext } from "../../../contexts/CitySearchContext"

const CitySearchRender = () => {

    const { id } = useParams<{ id: string }>();
    const { citySearchCities } = useContext(CitySearchContext)
    const [title, setTitle] = useState("")

    useEffect(() => {
        setTitle(id)
    }, [])

    return (
        <div className={styles.flexContainer}>
            {title && <span className={styles.heading}>Showing results for {title}</span>}
            {citySearchCities && citySearchCities.map((city, index) =>
                <div key={index}>
                    <PopulationCard population={city.population} />
                </div>
            )}
        </div>
    )
}

export default CitySearchRender
