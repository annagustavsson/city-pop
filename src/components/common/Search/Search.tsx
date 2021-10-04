import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams } from "react-router-dom";
import InputForm from "../InputForm/InputForm"
import Loader from "../../common/Loader/Loader"
import useApi from "../../../hooks/useCityPopApi"
import { CountrySearchContext } from "../../../contexts/CountrySearchContext"
import { CitySearchContext } from "../../../contexts/CitySearchContext"


const Search = () => {

    const [getData] = useApi();
    let history = useHistory()
    const { id } = useParams<{ id: string }>();
    const [title, setTitle] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { countrySearchupdateCities } = useContext(CountrySearchContext)
    const { citySearchupdateCities } = useContext(CitySearchContext)

    useEffect(() => {
        console.log("this is id:", id)
        setTitle(id)
    }, [])

    const search = async (cityName: string) => {
        try {
            const citiesInfo = await getData(cityName)
            return citiesInfo
        }
        catch (e: any) {
            throw new Error(e)
        }
    }

    const handleClick = async (searchTerm: string) => {
        setIsLoading(true)
        const cities = await search(searchTerm)
        setIsLoading(false)
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
            {isLoading && <Loader />}
        </div>
    )
}

export default Search
