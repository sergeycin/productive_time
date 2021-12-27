import { Dispatch } from "redux"

import { TimerAction, timerActionMinutes, timerActionSeconds } from "../store/reducers/timerReducer"



export const timerAction = (minutes:number,seconds:number) => {
    
   let minutesMS:number = minutes * 60000
    let secondsMS:number = seconds * 1000
    let n:number =1
    let countFlag:number = 60
    console.log('time',seconds)
    return async function(dispatch:Dispatch<TimerAction>){
        let  timerMinutes  =  setInterval(() => dispatch(timerActionMinutes(n)), 60000);
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
       


        setTimeout(() => {  clearInterval(timerMinutes); alert('stop'); }, minutesMS);
        setTimeout(() => { clearInterval(timerSeconds); alert('stop'); }, minutesMS);
    }
   
}
