import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import styles from "./inputForm.module.scss"

interface Props {
    label: string,
    handleClick: Function,
    textValue: string,
    handleTextChange: Function
}


export const InputForm = ({ label, handleClick, textValue, handleTextChange, }: Props) => {
    // const [textValue, setTextValue] = useState<string>("");
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (textValue !== "") {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [textValue])

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        handleClick(textValue)
    }

    const handleChange = (e: any) => {
        handleTextChange(e)
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
            {visible && <input className={styles.inputButton} type="submit" value="Search" />}
        </form>
    );
};

export default InputForm;