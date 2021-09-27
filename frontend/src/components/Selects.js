import React from 'react';

// Components from MUI
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Grow from '@material-ui/core/Grow';
import handleScore from "../utils/handleScore";

const Selects = (text, className, setVariable, lsVariable, fullWidth, color, setCategoryScore, categoryScore, setNistScore) => {

    const handleChange = (value) => {
        setVariable(value)
        handleScore(value, setCategoryScore, categoryScore)//TODO: add nist scoring
    }

    return (
        <>
            <Grow in={true}>
                <InputLabel id="inputLabel" className={className}>{text}</InputLabel>
            </Grow>
            <Grow in={true}>
                <Select
                    onChange={(e => handleChange(e.target.value))}
                    labelId="inputLabel"
                    value={localStorage.getItem(lsVariable)}
                    fullWidth={true}
                    color={color}
                    variant="outlined"
                >
                    <MenuItem value={"yes"}>Yes - Provide more details</MenuItem>
                    <MenuItem value={"no"}>No</MenuItem>
                    <MenuItem value={"pns"}>Prefer not to say</MenuItem>
                </Select>
            </Grow>
        </>
    )
}

export default Selects;