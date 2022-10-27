import {combineReducers} from "redux";
import {AnyAction, createAction} from "@reduxjs/toolkit";

export const increment = createAction("increment");
export const decrement = createAction("decrement");

export const counter = (state = 0, action: AnyAction) =>
    increment.match(action) ? state + 1 : decrement.match(action) ? state - 1 : state;

export const root = combineReducers({ counter });