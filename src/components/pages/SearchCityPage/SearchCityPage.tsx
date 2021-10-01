import React, { useState } from 'react'
import useApi from "../../../hooks/useCityPopApi"
import DefaultButton from "../../common/DefaultButton/DefaultButton"
import RenderCities from "../../common/RenderCities/RenderCities"
import { GeoInfo } from "../../../types/types"
import spinner from "../../../resources/images/spinner.gif"
import styles from "./searchCityPage.module.scss"

// TODO: remove style sheet once form is added

const SearchCityPage = () => {

    const [cities, updateCities] = useState<Array<GeoInfo> | null>(null)
    const [searchTerm, updateSearchTerm] = useState("London")
    const [isLoading, setIsLoading] = useState(false);

    const [getData] = useApi();


    const searchCity = async (cityName: String) => {
        setIsLoading(true)
        try {
            const citiesInfo = await getData(cityName)
            updateCities(citiesInfo)
            setIsLoading(false)
        }
        catch (e: any) {
            throw new Error(e)
        }
    }

    return (
        <div className={styles.searchContainer}>
            <DefaultButton handleClick={() => searchCity(searchTerm)} title="Search API" />
            {cities ?
                <RenderCities cityInfo={cities} searchEntry={searchTerm} />
                : isLoading && <img src={spinner} alt="loading..." />}
        </div>
    )
}

export default SearchCityPage
