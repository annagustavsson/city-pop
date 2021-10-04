import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams } from "react-router-dom";
import InputForm from "../InputForm/InputForm"
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
    const [isCleared, setIsCleared] = useState(false)
    const { countrySearchupdateCities } = useContext(CountrySearchContext)
    const { citySearchupdateCities } = useContext(CitySearchContext)

    useEffect(() => {
        console.log("this is id:", id)
        setTitle(id)
    }, [heading])

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

        // if type string, we have no results
        if (typeof cities[0] === 'string') {
            setHeading(cities[0])
            setIsCleared(true)
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
            <InputForm isCleared={isCleared} label={`search ${title}`} handleClick={handleClick} />
            <div>{isLoading && <Loader />}</div>
        </div>
    )
}

export default Search
