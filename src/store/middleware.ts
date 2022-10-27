import {counter, decrement, increment, root} from "./reducer";
import {AnyAction, createStore, Middleware, PayloadAction} from "@reduxjs/toolkit";
import store from "./index";
import {Simulate} from "react-dom/test-utils";


export const timer = ( { dispatch }: { dispatch: Function }) => {

    setInterval(() => {
        const state = store.getState()
        if(state.counter >= 0) dispatch(increment());
        if(state.counter < 0) dispatch(decrement());
    }, 1000);
    return (next: Function) => (action: PayloadAction<number>) => {
        next(action);
    };
};



//asynchronous state change function with an interval of 1 second