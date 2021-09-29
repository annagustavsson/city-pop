import React, { useState } from 'react'
import useApi from "../../../hooks/useCityPopApi"
import DefaultButton from "../../common/DefaultButton/DefaultButton"
import RenderCities from "../../common/RenderCities/RenderCities"
import { GeoInfo } from "../../../types/types"


// TODO: make loader appear only after search

const SearchCityPage = () => {

    const [cities, updateCities] = useState<Array<GeoInfo> | null>(null)
    const [searchTerm, updateSearchTerm] = useState("London")

    const [getData] = useApi();


    const searchCity = async (cityName: String) => {
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
            SearchCityPage
            <DefaultButton handleClick={() => searchCity(searchTerm)} title="Search API" />
            {cities ?
                <RenderCities cityInfo={cities} searchEntry={searchTerm} />
                : <div style={{ border: "2px solid purple" }}>Loader placeholder</div>}
        </div>
    )
}

export default SearchCityPage
