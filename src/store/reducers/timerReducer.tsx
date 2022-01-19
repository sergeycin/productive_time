 

interface timerState {
    minutes: number,
    seconds:number,
    sumMinutes:number
  }
  export enum timerActionTypes{
    MINUTES = 'MINUTES',
    SECONDS = 'SECONDS',
    DEFAULT = 'DEFAULT',
    SUMMINUTES = 'SUMMINUTES',
  }
  interface MinutesAction {
    type: timerActionTypes.MINUTES,
    payload: number
  }
  interface SecondsAction{
    type:  timerActionTypes.SECONDS,    
    payload: number
  
  }
  interface DefaultAction{
    type:  timerActionTypes.DEFAULT,    
    payload: number
  
  }
  interface SumAction{
    type:  timerActionTypes.SUMMINUTES,    
    payload: number
  
  }
export type TimerAction = MinutesAction| DefaultAction | SecondsAction | SumAction; 
  
  const timerCount: timerState = {
    minutes: 1,
    seconds: 0,
    sumMinutes: 0
  
  }

 export const timerReducer = (state = timerCount,action: TimerAction ) : timerState => {
   switch (action.type) {
      case  timerActionTypes.MINUTES:
  return {...state, minutes: state.minutes - action.payload}
        case timerActionTypes.SECONDS:
  return {...state, seconds: state.seconds - action.payload}
  case timerActionTypes.DEFAULT:
    return {...state, minutes: state.minutes = action.payload}
    case timerActionTypes.SUMMINUTES:
      return {...state, sumMinutes: state.sumMinutes + action.payload}
     default:
     return state
  
  
   }
  }

  export const timerActionMinutes = (payload:number) => ({type: timerActionTypes.MINUTES, payload})
  export const timerActionSeconds = (payload:number) => ({type: timerActionTypes.SECONDS, payload})
  export const timerActionDefault = (payload:number) => ({type: timerActionTypes.DEFAULT, payload})
  export const timerActionSum = (payload:number) => ({type: timerActionTypes.SUMMINUTES, payload})