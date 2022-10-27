import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {decrement, increment} from "./store/reducer";
import {Button} from "@mui/material";


export const App = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state: any) => state.counter);
    return (
        <div className='container'>
            <Button variant='text' onClick={() => dispatch(decrement())}>-</Button>
            {counter}
            <Button variant='text' onClick={() => dispatch(increment())}>+</Button>
        </div>
    );
};



//todo: кнопки (mui comnonents) отобразить по центру;
//todo: styled compnonents;
//todo: emotions;
//todo: разбить файлы app.tsx и разнести логику по разным файлам
//todo: commit;