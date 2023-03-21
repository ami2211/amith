import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Validition1 = () => {
    const [submitted, setSubmitted] = useState(false);

    const [Inputname, setInputname] = useState({
        fname: ""
    })
    const [validation, setValidation] = useState({
        fname: ""
    })
    const inputHandler = (e) => {
        const { name, value } = e.target
        setInputname({ ...Inputname, [name]: value })

    }
    const checkValidation = () => {
        let errors = validation;
        if (!Inputname.fname.trim()) {

            errors.fname = "First name is required";
        } else {
            errors.fname = "";
        }
        setValidation(errors);
    };
    useEffect(() => {
        checkValidation();
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }
    return (
        <div>
            <form
                id="registrationForm"
                onSubmit={handleSubmit}
                >
                <br /><TextField id="outlined-basic" label='First Name' name='fname' variant='outlined' value={Inputname.fname} onChange={inputHandler} /><br />
                {(validation.fname && submitted) && <p>{validation.fname}</p>}<br />
                <Button type='submit' variant='contained'>save</Button>
            </form>
        </div>
    )
}

export default Validition1
