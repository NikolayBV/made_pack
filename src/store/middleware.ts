import {increment} from "./reducer";
import {AnyAction, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@reduxjs/toolkit/dist/query/core/apiState";


export const timer = ({ dispatch }: { dispatch: Function }) => {
    setInterval(() => dispatch(increment()), 1000);

    return (next: Function) => (action: PayloadAction<number>) => {
        next(action);
    };
};

//asynchronous state change function with an interval of 1 second