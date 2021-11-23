import {combineReducers, createStore} from 'redux'
import {themeReducer} from './reducers/themeReducer'

export  const rootReducer = combineReducers({
    theme: themeReducer,
    
})


export const store = createStore(themeReducer);