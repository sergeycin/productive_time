import { Dispatch } from "redux"

import { TimerAction, timerActionMinutes, timerActionSeconds } from "../store/reducers/timerReducer"



export const timerAction = (minutes:number,seconds:number) => {
    
   let minutesMS:number = minutes * 60000
    let secondsMS:number = seconds * 1000
    let n:number =1
    let countFlag:number = 0
    minutes = minutes -1
    console.log('time',seconds)
    
    return async function(dispatch:Dispatch<TimerAction>){
        dispatch(timerActionMinutes(1))
     
         let  timerSeconds = setInterval(() => {
            if(countFlag <=0){
               dispatch(timerActionSeconds(-60))
                countFlag = 60;
            }
            else{
                dispatch(timerActionSeconds(n))
                countFlag--
            }
            
        } ,1000);
       
        let  timerMinutes  =  setInterval(() => dispatch(timerActionMinutes(n)), 60000);

        setTimeout(() => {  clearInterval(timerMinutes); dispatch(timerActionMinutes(-1)) }, minutesMS);
        setTimeout(() => { clearInterval(timerSeconds); dispatch(timerActionSeconds(1))}, minutesMS);
    }
   
}
