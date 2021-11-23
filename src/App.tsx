import React from 'react';
import { useDispatch } from 'react-redux';
import Dark from './pages/Dark';
import White from './pages/White';
import { UserActionTypes, useTypesSelector } from './store/reducers/themeReducer';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const themen = useTypesSelector(state => state.theme)
  console.log(themen);

  const whiteHandler = () =>{
    dispatch({type: UserActionTypes.WHITE_THEME, payload: 1})
  }

  const darkHendler = () =>{
    dispatch({type: UserActionTypes.DARK_THEME, payload: 0})
  }

  function currentTheme() {
    if(themen == 0){
  
      return <White />
    
    }
    else{
     
  
      return <Dark />
    }
  }

  return (
    <div>
   {
currentTheme()
   }
  
    </div>
  );
}


export default App;
