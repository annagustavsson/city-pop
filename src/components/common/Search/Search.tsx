import React, { useState, useEffect, useContext } from 'react'
import { useLocation, useHistory, useParams } from "react-router-dom";
//import { BrowserRouter as Router, Route, RouteComponentProps, useHistory } from 'react-router-dom';
import InputForm from "../InputForm/InputForm"
import useApi from "../../../hooks/useCityPopApi"
import { CountrySearchContext } from "../../../contexts/CountrySearchContext"
import { CitySearchContext } from "../../../contexts/CitySearchContext"


const Search = () => {

    const [getData] = useApi();
    let history = useHistory()
    const { id } = useParams<{ id: string }>();
    const [title, setTitle] = useState("")

    const { countrySearchCities, countrySearchupdateCities } = useContext(CountrySearchContext)
    const { citySearchCities, citySearchupdateCities } = useContext(CitySearchContext)

    useEffect(() => {
        console.log("this is id:", id)
        setTitle(id)
    }, [])

    const search = async (cityName: string) => {
        // TODO state for loader
        try {
            const citiesInfo = await getData(cityName)
            return citiesInfo
        }
        catch (e: any) {
            throw new Error(e)
        }
    }

    const handleClick = async (searchTerm: string) => {
        const cities = await search(searchTerm)
        if (title === "country") {
            countrySearchupdateCities(cities)
            history.push("/country")
        }
        else {
            citySearchupdateCities(cities)
            history.push("/city")
        }
    }

    return (
        <div>
            <InputForm label={`search ${title}`} handleClick={handleClick} />
        </div>
    )
}

export default Search
