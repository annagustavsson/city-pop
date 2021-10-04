import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from "react-router-dom";
import InputForm from "../InputForm/InputForm"

interface Props {

}

const Search = (props: Props) => {

    let history = useHistory()
    const pathName = location.pathname
    const [title, setTitle] = useState("")

    useEffect(() => {
        // TODO: kan jag göra typ location.pathname och direkt få ut slutnamnet? dvs /country, ellr /city
        if (pathName === "/search/country") {
            setTitle("Country")
        }
        else {
            setTitle("Country")
        }
    }, [])


    const handleClick = () => {
        if (pathName === "/search/country") {
            // set country context
            history.push("/country")
        }
        else {
            // set city context
            history.push("/city")
        }
    }

    return (
        <div>
            <InputForm label={title} handleClick={handleClick} />
        </div>
    )
}

export default Search
