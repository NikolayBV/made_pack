import {combineReducers} from "redux";
import {AnyAction, createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";

// export const increment = createAction("increment"); //increase the state by 1
// export const decrement = createAction("decrement"); //decrease the state by 1

const initialState = {
    value: 0,
}

export const counter = createSlice({
    name: 'count',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        decrementByAmount: (state, action) => {
            state.value -= action.payload
        },
    }
});

export default counter.reducer;
export const { increment, decrement, incrementByAmount, decrementByAmount } = counter.actions;
// export const counter = (state = 0, action: PayloadAction<number>) =>
//     increment.match(action) ? state + 1: decrement.match(action) ? state - 1 : state;
// //the function reducer of the state change
//export const root = combineReducers({ counter });//converting multiple reducers into a single function