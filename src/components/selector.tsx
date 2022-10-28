import React, {ChangeEvent, ChangeEventHandler, SetStateAction, useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

interface SelectorParam{
    value: string,
    setValue: SetStateAction<any>
}

const Selector = ({value, setValue}: SelectorParam) => {
    function onChangeCount(e: SelectChangeEvent){
        setValue(e.target.value as string)
    }
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label="Age"
                onChange={onChangeCount}
            >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
            </Select>
        </FormControl>
    );
};

export default Selector;