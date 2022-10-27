import {increment} from "./reducer";
import {AnyAction} from "@reduxjs/toolkit";


export const timer = ({ dispatch }: { dispatch: any }) => {
    setInterval(() => dispatch(increment()), 1000);

    return (next: any) => (action: AnyAction) => {
        next(action);
    };
};

//asynchronous state change function with an interval of 1 second