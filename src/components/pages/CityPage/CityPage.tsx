import React, { useContext } from 'react'
import { CityContext } from "../../../contexts/CityContext"
import RenderCities from "../../common/RenderCities/RenderCities"


const CityPage = () => {

    const { cities } = useContext(CityContext)
    return (
        <div>
            <RenderCities cityInfo={cities} />
        </div>
    )
}

export default CityPage
