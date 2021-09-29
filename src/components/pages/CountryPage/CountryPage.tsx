import React, { useContext } from 'react'
import { CityContext } from "../../../contexts/CityContext"
import RenderCities from "../../common/RenderCities/RenderCities"



const CountryPage = () => {

    const { cities } = useContext(CityContext)

    return (
        <div>
            <RenderCities cityInfo={cities} />
        </div>
    )
}

export default CountryPage
