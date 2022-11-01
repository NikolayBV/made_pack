import {counter, decrement, increment} from "./reducer";
import {AnyAction, createStore, Middleware, PayloadAction} from "@reduxjs/toolkit";
import store from "./index";



export const timer = ( { dispatch }: { dispatch: Function }) => {

    setInterval(() => {
        const state = store.getState();
        if(state.count.value >= 0) dispatch(increment());
        if(state.count.value < 0) dispatch(decrement());
        if(state.count.value === 20) alert('Value equal 20!');
    }, 1000);
    return (next: Function) => (action: PayloadAction<number>) => {
        next(action);
    };
};



//asynchronous state change function with an interval of 1 second