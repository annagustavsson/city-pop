import React, { useState, useContext } from 'react'
import useApi from "../../../hooks/useCityPopApi"
import { CitySearchContext } from "../../../contexts/CitySearchContext"
import DefaultButton from "../../common/DefaultButton/DefaultButton"
import InputForm from "../../common/InputForm/InputForm";
import RenderCities from "../../common/RenderCities/RenderCities"
import { GeoInfo } from "../../../types/types"
import spinner from "../../../resources/images/spinner.gif"
import styles from "./searchCityPage.module.scss"

// TODO: remove style sheet once form is added

const SearchCityPage = () => {

    const { cities, updateCities } = useContext(CitySearchContext)
    const [searchTerm, updateSearchTerm] = useState("London")
    const [isLoading, setIsLoading] = useState(false);

    const [getData] = useApi();


    const searchCity = async (cityName: string) => {
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
            <InputForm label={"Search city"} handleClick={searchCity} />
            <DefaultButton handleClick={() => searchCity(searchTerm)} title="Search API" />
            {cities ?
                <RenderCities cityInfo={cities} searchEntry={searchTerm} />
                : isLoading && <img src={spinner} alt="loading..." />}
        </div>
    )
}

export default SearchCityPage
