import {combineReducers, createStore, applyMiddleware} from 'redux'
import {themeReducer} from './reducers/themeReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk"
import { timerReducer } from './reducers/timerReducer'

export  const rootReducer = combineReducers({
    theme: themeReducer,
    timer: timerReducer,
    
})


export const store = createStore(themeReducer, composeWithDevTools(applyMiddleware(thunk)));