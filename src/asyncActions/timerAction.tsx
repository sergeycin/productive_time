import { Dispatch } from "redux"
import React from 'react';
import { useTypesSelector } from "../store";

import { TimerAction, timerActionMinutes } from "../store/reducers/timerReducer"


// const minutes = useTypesSelector(state => state.timer.minutes)
//   console.log(minutes);
export const timerAction = () => {
    
    let n:number =1
    
    return async function(dispatch:Dispatch<TimerAction>){
        let timerId = setInterval(() => dispatch(timerActionMinutes(n)), 1000);

        setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
    }
   
}
