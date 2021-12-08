import React from 'react';
import { useDispatch } from 'react-redux';
import { UserActionTypes, useTypesSelector } from '../store/reducers/themeReducer';
import './White.css'



const White: React.FC = () => {

  const dispatch = useDispatch();
  const themewhite = useTypesSelector(state => state.theme)
  console.log(themewhite);

  const darkHandler = () =>{
    dispatch({type: UserActionTypes.WHITE_THEME, payload: 1})
    document.body.classList.remove('white');
    document.body.classList.add('dark');
  }

  const whiteHendler = () =>{
    dispatch({type: UserActionTypes.DARK_THEME, payload: 0})
    document.body.classList.remove('dark');
    document.body.classList.add('white');
   
  }

  return (
    <div>
  <h1 className="whiteHead">White</h1>

  <button className="whitebtn" onClick={() => whiteHendler()} >Светлая тема</button>
      <button className="darkbtn" onClick={() => darkHandler()}>Темная тема</button>
    </div>
  );
}


export default White;