import {applyMiddleware, configureStore} from "@reduxjs/toolkit";
import counter from "./reducer";
import {timer} from "./middleware";
import {useDispatch} from "react-redux";
import {useAppDispatch} from "./hooks";


const store = configureStore({
    reducer: {
        count: counter
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(timer)
});
//state creation function

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
