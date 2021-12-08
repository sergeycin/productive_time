import React from 'react';
import { useDispatch } from 'react-redux';
import { UserActionTypes, useTypesSelector } from '../store/reducers/themeReducer';
import './Dark.css'

const Dark: React.FC = () => {

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
    <div className="wrapperDark">
  <h1 className="darkhead">Dark</h1>
  <button className="whitebtn" onClick={() => whiteHendler()} >Светлая тема</button>
      <button className="darkbtn" onClick={() => darkHandler()}>Темная тема</button>
    </div>
  );
}


export default Dark;
