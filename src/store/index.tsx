import {combineReducers, createStore, applyMiddleware} from 'redux'
import {themeReducer} from './reducers/themeReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk"
import { timerReducer } from './reducers/timerReducer'

import { TypedUseSelectorHook, useSelector} from 'react-redux';

export  const rootReducer = combineReducers({
    theme: themeReducer,
    timer: timerReducer,
   
})
  /*Хук для использования данных в useSelector */
  type RootState = ReturnType<typeof rootReducer>
  export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector
  /*end */

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));