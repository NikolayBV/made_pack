import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {decrement, increment} from "./store/reducer";
import {Button} from "@mui/material";
import {StateParam} from "./types/models";



export const App = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state: StateParam) => state.counter);// function for getting state value

    return (
        <div className='container'>
            <Button variant='text' onClick={() => dispatch(decrement())}>-</Button>
            {counter}
            <Button variant='text' onClick={() => dispatch(increment())}>+</Button>
        </div>
    );
}; //main component



//todo: кнопки (mui comnonents) отобразить по центру;
//todo: styled compnonents;
//todo: emotions;
//todo: разбить файлы app.tsx и разнести логику по разным файлам
//todo: commit;