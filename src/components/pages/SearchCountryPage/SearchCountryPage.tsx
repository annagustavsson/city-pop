import React, { useContext, useState } from 'react'
import useApi from "../../../hooks/useCityPopApi"
import { CountrySearchContext } from "../../../contexts/CountrySearchContext"
import { GeoInfo } from "../../../types/types"
import DefaultButton from "../../common/DefaultButton/DefaultButton"
import InputForm from "../../common/InputForm/InputForm";
import RenderCities from "../../common/RenderCities/RenderCities"
import spinner from "../../../resources/images/spinner.gif"
import styles from "./searchCountryPage.module.scss"

// TODO: make loader appear only after search
// TODO: onClick --> display that city

const SearchCountryPage = () => {

    const { cities, updateCities } = useContext(CountrySearchContext)
    const [searchTerm, setSearchTerm] = useState("Sweden")
    const [isLoading, setIsLoading] = useState(false);

    const [getData] = useApi();

    // TODO: click -> go to citypage history.push("/search-city")
    // TODO: remove style sheet once form is added

    const handleClick = (clickedCity: GeoInfo) => {
        let newCityInfo: GeoInfo[] = [clickedCity]
        updateCities(newCityInfo)
    }

    const searchCountry = async (cityName: string) => {
        setIsLoading(true)
        setSearchTerm(cityName)
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
            <DefaultButton handleClick={() => searchCountry(searchTerm)} title="Search API" />
            <InputForm label={"Search country"} handleClick={searchCountry} />
            {cities ?
                <RenderCities handleClick={handleClick} cityInfo={cities} searchEntry={searchTerm} />
                : isLoading && <img src={spinner} alt="loading..." />}
        </div>
    )
}

export default SearchCountryPage
