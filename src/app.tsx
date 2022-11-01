import React from "react";
import Counter from "./components/counter";
import Selector from "./components/selector";





export const App = () => {
    window.addEventListener('load', async () => {
        if('serviceWorker' in navigator){
            try{
                await navigator.serviceWorker.register('sw.js', {
                    scope: '../dist'
                });
                console.log('SW worked!');
            } catch (e){
                console.log('SW Error!');
            }
        }
    })

    return (
        <Counter />
    );
}; //main component



//todo: кнопки (mui comnonents) отобразить по центру;
//todo: styled compnonents;
//todo: emotions;
//todo: разбить файлы app.tsx и разнести логику по разным файлам
//todo: commit;