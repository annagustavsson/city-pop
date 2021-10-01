import React, { useState } from "react";
import { TextField } from "@mui/material";

interface Props {
    label: String,
    handleClick: Function,
}

export const InputForm = ({ label, handleClick }: Props) => {
    const [textValue, setTextValue] = useState<string>("");

    return (
        <form noValidate autoComplete="off">
            <TextField
                id="outlined-basic"
                label={label}
                variant="outlined"
                value={textValue}
            />
        </form>
    );
};

export default InputForm;