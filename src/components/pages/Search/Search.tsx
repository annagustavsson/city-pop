import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams } from "react-router-dom";
import InputForm from "../../common/InputForm/InputForm"
import Loader from "../../common/Loader/Loader"
import useApi from "../../../hooks/useCityPopApi"
import { CountrySearchContext } from "../../../contexts/CountrySearchContext"
import { CitySearchContext } from "../../../contexts/CitySearchContext"
import styles from "./search.module.scss"


const Search = () => {

    const [getData] = useApi();
    let history = useHistory()
    const { id } = useParams<{ id: string }>();
    const [title, setTitle] = useState("")
    const [heading, setHeading] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [textValue, setTextValue] = useState("")
    const { countrySearchupdateCities } = useContext(CountrySearchContext)
    const { citySearchupdateCities } = useContext(CitySearchContext)

    useEffect(() => {
        // uses the url param to know if it's on search country or search city page
        setTitle(id)
    }, [heading])

    const search = async (cityName: string) => {
        // calls the api hook
        try {
            const citiesInfo = await getData(cityName)
            return citiesInfo
        }
        catch (e: any) {
            throw new Error(e)
        }
    }

    const handleTextChange = (e: any) => {
        // changes the value in input form field
        const search = e.target.value;
        setTextValue(search)
    }

    const handleClick = async (searchTerm: string) => {
        // handles press on submit in input field

        setIsLoading(true)
        const cities = await search(searchTerm)
        setIsLoading(false)

        // if type string, we have no results
        if (typeof cities[0] === 'string') {
            setHeading(cities[0])
            setTextValue("")
        } else {
            if (title === "country") {
                countrySearchupdateCities(cities)
                history.push(`/${title}/${searchTerm}`)
            }
            else {
                citySearchupdateCities(cities)
                history.push(`/${title}/${searchTerm}`)
            }
        }

    }
    return (
        <div className={styles.flexContainer}>
            <div className={styles.heading}>{heading}</div>
            <InputForm label={`search ${title}`} handleClick={handleClick} textValue={textValue} handleTextChange={handleTextChange} />
            <div>{isLoading && <Loader />}</div>
        </div>
    )
}

export default Search
