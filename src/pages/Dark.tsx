import React from 'react';
import { useDispatch } from 'react-redux';
import { UserActionTypes, useTypesSelector } from '../store/reducers/themeReducer';
import './Dark.css'

const Dark: React.FC = () => {
  const dispatch = useDispatch();
  const themewhite = useTypesSelector(state => state.theme)
  console.log(themewhite);

  const whiteHandler = () =>{
    dispatch({type: UserActionTypes.WHITE_THEME, payload: 1})
  }

  const darkHendler = () =>{
    dispatch({type: UserActionTypes.DARK_THEME, payload: 0})
  }

  return (
    <div>
  <h1>Dark</h1>
  <button className="white" onClick={() => darkHendler()} >Светлая тема</button>
      <button className="dark" onClick={() => whiteHandler()}>Темная тема</button>
    </div>
  );
}


export default Dark;
