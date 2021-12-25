import { TypedUseSelectorHook, useSelector} from 'react-redux';

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
    payload: 0
  }
  interface SecondsAction{
    type:  timerActionTypes.SECONDS,
    payload: 0
  
  }
  
  type TimerAction = MinutesAction| SecondsAction;
  
  const timerCount: timerState = {
    minutes: 60,
    seconds: 0
  
  }
  /*Хук для использования данных в useSelector */
  type RootState = ReturnType<typeof timerReducer>
  export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector
  /*end */
  
 export const timerReducer = (state = timerCount,action: TimerAction ) : timerState => {
   switch (action.type) {
      case  timerActionTypes.MINUTES:
  return {...state, minutes: state.minutes + action.payload}
        case timerActionTypes.SECONDS:
  return {...state, seconds: state.seconds + action.payload}
     default:
     return state
  
  
   }
  }