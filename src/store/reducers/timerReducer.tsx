 

interface timerState {
    minutes: number,
    seconds:number
  }
  export enum timerActionTypes{
    MINUTES = 'MINUTES',
    SECONDS = 'SECONDS',
  
  }
  interface MinutesAction {
    type: timerActionTypes.MINUTES,
    payload: number
  }
  interface SecondsAction{
    type:  timerActionTypes.SECONDS,    
    payload: number
  
  }
  
export type TimerAction = MinutesAction| SecondsAction;
  
  const timerCount: timerState = {
    minutes: 2,
    seconds: 60
  
  }

 export const timerReducer = (state = timerCount,action: TimerAction ) : timerState => {
   switch (action.type) {
      case  timerActionTypes.MINUTES:
  return {...state, minutes: state.minutes - action.payload}
        case timerActionTypes.SECONDS:
  return {...state, seconds: state.seconds - action.payload}
     default:
     return state
  
  
   }
  }

  export const timerActionMinutes = (payload:number) => ({type: timerActionTypes.MINUTES, payload})
  export const timerActionSeconds = (payload:number) => ({type: timerActionTypes.SECONDS, payload})