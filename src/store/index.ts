import {configureStore} from "@reduxjs/toolkit";
import {root} from "./reducer";
import {timer} from "./middleware";


const store = configureStore({
    reducer: root,
    middleware: [timer],
});
//state creation function
export default store;