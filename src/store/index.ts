import {configureStore} from "@reduxjs/toolkit";
import {root} from "./reducer";
import {timer} from "./middleware";


const s = configureStore({
    reducer: root,
    middleware: [timer],
});

export default s;