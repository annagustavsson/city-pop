import React from 'react'
import {Button} from "@mui/material";

interface Props {
    handleClick: Function
    title: String
    route?: String
}

const DefaultButton = ({handleClick, title, route}: Props) => {
    return (
        <Button onClick={route? () => handleClick(route) : () => handleClick()} variant="outlined">{title}</Button>
    )
}

export default DefaultButton
