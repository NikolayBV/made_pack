import {increment} from "./reducer";


export const timer = ({ dispatch }: { dispatch: any }) => {
    setInterval(() => dispatch(increment()), 1000);

    return (next: any) => (action: any) => {
        next(action);
    };
};