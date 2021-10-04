import React, { useState, useEffect } from 'react'
import { useLocation, useHistory, useParams } from "react-router-dom";
//import { BrowserRouter as Router, Route, RouteComponentProps, useHistory } from 'react-router-dom';
import InputForm from "../InputForm/InputForm"


const Search = () => {

    let history = useHistory()
    const { id } = useParams<{ id: string }>();
    const [title, setTitle] = useState("")


    useEffect(() => {
        // TODO: kan jag göra typ location.pathname och direkt få ut slutnamnet? dvs /country, ellr /city
        console.log("this is id:", id)
        setTitle(id)
    }, [])

    const handleClick = () => {
        if (title === "country") {
            // call api
            // set country context
            history.push("/country")
        }
        else {
            // call api
            // set city context
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
