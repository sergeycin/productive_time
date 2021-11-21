import {combineReducers} from 'redux'
import {themeReducer} from './reducers/themeReducer'

export  const rootReducer = combineReducers({
    theme: themeReducer,
    
})