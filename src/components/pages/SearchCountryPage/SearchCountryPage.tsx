import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import useApi from "../../../hooks/useCityPopApi"
import { CityContext } from "../../../contexts/CityContext"
import DefaultButton from "../../common/DefaultButton/DefaultButton"

const SearchCountryPage = () => {

    const { updateCities } = useContext(CityContext)

    const [getData] = useApi();
    let history = useHistory()

    const displayCountryPage = () => {
        history.push("/country")
    }

    // TODO flytta logik till hook? och använd för både searchcountry och searchcity
    const searchCountry = async (cityName: String) => {
        try {
            const citiesInfo = await getData(cityName)
            updateCities(citiesInfo)
            displayCountryPage()
        }
        catch (e: any) {
            throw new Error(e)
        }
    }

    return (
        <div>
            SearchCountryPage
            <DefaultButton handleClick={() => searchCountry("Sweden")} title="Search API" />
        </div>
    )
}

export default SearchCountryPage
