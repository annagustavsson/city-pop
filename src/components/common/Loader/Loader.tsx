import React from 'react'
import spinner from "../../../resources/images/spinner.gif"

// component for displaying a spinner gif

export const Loader = () => {
    return (
        <img src={spinner} alt="loading..." />
    )
}

export default Loader
