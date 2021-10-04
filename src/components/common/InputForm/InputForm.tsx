import React, { useState } from "react";
import { TextField } from "@mui/material";
import styles from "./inputForm.module.scss"

interface Props {
    label: String,
    handleClick: Function,
}

export const InputForm = ({ label, handleClick }: Props) => {
    const [textValue, setTextValue] = useState<string>("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        handleClick(textValue)
    }

    const handleChange = (e: any) => {
        const search = e.target.value;
        setTextValue(search)
    }

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField className={styles.textField}
                id="outlined-basic"
                label={label}
                variant="outlined"
                value={textValue}
                onChange={handleChange}
            />
            <input className={styles.inputButton} type="submit" value="Search" />
        </form>
    );
};

export default InputForm;