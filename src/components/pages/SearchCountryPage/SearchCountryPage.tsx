import React, { useState } from 'react'
import useApi from "../../../hooks/useCityPopApi"
import DefaultButton from "../../common/DefaultButton/DefaultButton"
import RenderCities from "../../common/RenderCities/RenderCities"
import { GeoInfo } from "../../../types/types"

// TODO: make loader appear only after search
// TODO: onClick --> display that city

const SearchCountryPage = () => {

    const [cities, updateCities] = useState<Array<GeoInfo> | null>(null)
    const [searchTerm, updateSearchTerm] = useState("Sweden")

    const [getData] = useApi();


    const handleClick = (clickedCity: GeoInfo) => {
        let newCityInfo: GeoInfo[] = [clickedCity]
        updateCities(newCityInfo)
    }

    const searchCountry = async (cityName: String) => {
        try {
            const citiesInfo = await getData(cityName)
            updateCities(citiesInfo)
        }
        catch (e: any) {
            throw new Error(e)
        }
    }

    return (
        <div>
            SearchCountryPage
            <DefaultButton handleClick={() => searchCountry(searchTerm)} title="Search API" />
            {cities ?
                <RenderCities handleClick={handleClick} cityInfo={cities} searchEntry={searchTerm} />
                : <div style={{ border: "5px solid purple", padding: "20px" }}>Loader placeholder</div>}
        </div>
    )
}

export default SearchCountryPage
