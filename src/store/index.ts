import {configureStore} from "@reduxjs/toolkit";
import counter from "./reducer";
import {timer} from "./middleware";


const store = configureStore({
    reducer: counter,
    middleware: [timer],
});
//state creation function
export default store;