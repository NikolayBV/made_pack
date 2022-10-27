import {combineReducers} from "redux";
import {AnyAction, createAction} from "@reduxjs/toolkit";

export const increment = createAction("increment"); //increase the state by 1
export const decrement = createAction("decrement"); //decrease the state by 1

export const counter = (state = 0, action: AnyAction) =>
    increment.match(action) ? state + 1 : decrement.match(action) ? state - 1 : state;
//the function reducer of the state change
export const root = combineReducers({ counter });//converting multiple reducers into a single function