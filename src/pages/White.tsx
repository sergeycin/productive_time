import React from 'react';
import { useDispatch } from 'react-redux';
import { UserActionTypes, useTypesSelector } from '../store/reducers/themeReducer';
import './White.css'



const White: React.FC = () => {

  const dispatch = useDispatch();
  const themewhite = useTypesSelector(state => state.theme)
  console.log(themewhite);

 
  let flagTheme:boolean = false;
  let switchClass:string = 'switch-btn';
const themeHandler = () =>{
  if (flagTheme === true){
    dispatch({type: UserActionTypes.WHITE_THEME, payload: 1})
    document.body.classList.remove('white');
    document.body.classList.add('dark');

    flagTheme = false;
    switchClass = 'switch-btn ';
    
  }
  else{
    dispatch({type: UserActionTypes.DARK_THEME, payload: 0})
    document.body.classList.remove('dark');
    document.body.classList.add('white');
    flagTheme = true;
    switchClass = 'switch-btn switch-on';
  }
}
  return (
    <div>
  <h1 className="whiteHead">White</h1>

      <div className={switchClass} onClick={() => themeHandler() }> </div>
    </div>
  );
}


export default White;