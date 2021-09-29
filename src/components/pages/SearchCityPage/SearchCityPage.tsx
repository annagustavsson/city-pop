import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import { CityContext } from "../../../contexts/CityContext"
import styles from "./searchCityPage.module.scss"
import useApi from "../../../hooks/useCityPopApi"
import DefaultButton from "../../common/DefaultButton/DefaultButton"


const SearchCityPage = () => {
    let history = useHistory()

    const { updateCities } = useContext(CityContext)

    const [getData] = useApi();

    const displayCityPage = () => {
        history.push("/city")
    }

    const searchCity = async (cityName: String) => {
        try {
            const citiesInfo = await getData(cityName)
            updateCities(citiesInfo)
            displayCityPage()
        }
        catch (e: any) {
            throw new Error(e)
        }
    }

    return (
        <div className={styles.flexContainer}>
            SearchCityPage
            <DefaultButton handleClick={() => searchCity("london")} title="Search API" />
        </div>
    )
}

export default SearchCityPage
