import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {StateParam} from "../types/models";
import {Button} from "@mui/material";
import Selector from "./selector";
import {decrement, increment, decrementByAmount, incrementByAmount} from "../store/reducer";
import {useAppDispatch, useAppSelector} from "../store/hooks";

const Counter = () => {
    const dispatch = useAppDispatch();
    const counter = useAppSelector((state: StateParam) => state.count.value);// function for getting state value
    const [value, setValue] = useState('1');

    return (
        <div className='container'>
            <Selector value={value} setValue={setValue}/>
            <div className='counterForm'>
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
                <p data-testid='counter'>{counter}</p>
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
        </div>
    );
};

export default Counter;