import {combineReducers} from "redux";
import {createAction} from "@reduxjs/toolkit";

export const increment = createAction("increment");
export const decrement = createAction("decrement");

export const counter = (s = 0, action: any) =>
    increment.match(action) ? s + 1 : decrement.match(action) ? s - 1 : s;

export const root = combineReducers({ counter });