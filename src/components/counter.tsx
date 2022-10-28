import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {StateParam} from "../types/models";
import {Button} from "@mui/material";
import Selector from "./selector";
import {decrement, increment, decrementByAmount, incrementByAmount} from "../store/reducer";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state: StateParam) => state.value);// function for getting state value
    const [value, setValue] = useState('1');
    return (
        <div className='container'>
            <Selector value={value} setValue={setValue}/>
            <Button variant='text' onClick={() =>{
                    if(value !== '1') {
                        dispatch(decrementByAmount(+value))
                    }
                    else{
                        dispatch(decrement())
                    }
                }
            }
            >-</Button>
            {counter}
            <Button variant='text' onClick={() => {
                    if(value !== '1') {
                        dispatch(incrementByAmount(+value))
                    }
                    else{
                        dispatch(increment())
                    }
                }
            }

            >+</Button>
        </div>
    );
};

export default Counter;