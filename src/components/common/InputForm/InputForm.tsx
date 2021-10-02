import React, { useState } from "react";
import { TextField } from "@mui/material";

interface Props {
    label: String,
    handleClick: Function,
}

export const InputForm = ({ label, handleClick }: Props) => {
    const [textValue, setTextValue] = useState<string>("");

    // TODO prevent default

    const handleSubmit = (e: any) => {
        e.preventDefault();
        handleClick(textValue)
    }

    const handleChange = (e: any) => {
        const search = e.target.value;
        setTextValue(search)
    }

    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField
                id="outlined-basic"
                label={label}
                variant="outlined"
                value={textValue}
                onChange={handleChange}
            />
            <input type="submit" value="Search" />
        </form>
    );
};

export default InputForm;