import { TypedUseSelectorHook, useSelector} from 'react-redux';

interface themeState {
    theme: number
  }
  export enum UserActionTypes{
    DARK_THEME= 'DARK_THEME',
    WHITE_THEME = 'WHITE_THEME',
  
  }
  interface DarkAction {
    type: UserActionTypes.DARK_THEME,
    payload: 0
  }
  interface WhiteAction{
    type:  UserActionTypes.WHITE_THEME,
    payload: 0
  
  }
  
  type ThemeAction = DarkAction | WhiteAction;
  
  const themeColor: themeState = {
    theme: 0,
  
  }
  /*Хук для использования данных в useSelector */
  type RootState = ReturnType<typeof themeReducer>
  export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector
  /*end */
  
 export const themeReducer = (state = themeColor,action: ThemeAction ) : themeState => {
   switch (action.type) {
      case  UserActionTypes.DARK_THEME:
  return {...state, theme: state.theme = action.payload}
        case UserActionTypes.WHITE_THEME:
  return {...state, theme: state.theme = action.payload}
     default:
     return state
  
  
   }
  }