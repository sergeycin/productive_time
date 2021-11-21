import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dark from './pages/Dark';
import White from './pages/White';
import { useTypesSelector } from './store/reducers/themeReducer';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useTypesSelector(state => state.theme)
  console.log(theme);

  function currentTheme() {
    if(theme == 0){
  
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
