import React from 'react';
import Dark from './pages/Dark';
import White from './pages/White';
import {  useTypesSelector } from './store/reducers/themeReducer';

const App: React.FC = () => {

  const themen = useTypesSelector(state => state.theme)
  console.log(themen);



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
