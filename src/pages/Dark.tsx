import React from 'react';
import { useDispatch } from 'react-redux';
import { UserActionTypes, useTypesSelector } from '../store/reducers/themeReducer';
import personLogo from '../img/person.svg';
import coin from '../img/coin.svg';
import './Dark.css'


const Dark: React.FC = () => {

  const dispatch = useDispatch();
  const themewhite = useTypesSelector(state => state.theme)
  console.log(themewhite);
  document.body.classList.add('dark');

 
  let flagTheme:boolean = true;
  let switchClass:string = 'switch-btn switch-on';
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
    <div className="wrapperDark">

      <header className="header">
        <div className="container">
        <div className="header__row">
          <div className="header__head"><h1>PRODUCTIVE TIME</h1></div>
          <div className="header__last">
            <div className="header__last-row">
              <div className="header__stat"><p>Статистика</p></div>
              <div className="header__person"><img src={personLogo} alt="" /></div>
              <div className="header__switch" onClick={() => themeHandler() }>
                <p>Dark Theme</p>
      <div className={switchClass} > </div>
    </div>
    <div className="header__coin"><img src={coin} alt="" /></div>
            </div>
          </div>
        </div>
        </div>
        
      </header>
  <h2 className="darkhead">Dark</h2>

   
      
    </div>
    
  );
}


export default Dark;
