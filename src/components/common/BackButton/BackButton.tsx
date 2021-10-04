import React from 'react'
import { Button } from "@mui/material";

interface Props {
    handleClick: () => void
    title: String
}

const BackButton = ({ handleClick, title }: Props) => {
    return (
        <Button onClick={() => handleClick()} variant="outlined">{title}</Button>
    )
}

export default BackButton
