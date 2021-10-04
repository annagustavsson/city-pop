import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import styles from "./inputForm.module.scss"

interface Props {
    label: String,
    handleClick: Function,
    isCleared: Boolean,
}

export const InputForm = ({ label, handleClick, isCleared }: Props) => {
    const [textValue, setTextValue] = useState<string>("");
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (textValue !== "") {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [textValue])

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
                value={isCleared ? "" : textValue}
                onChange={handleChange}
            />
            {visible && <input className={styles.inputButton} type="submit" value="Search" />}
        </form>
    );
};

export default InputForm;