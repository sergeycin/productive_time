import React from 'react';
import { useDispatch } from 'react-redux';
import { UserActionTypes } from '../store/reducers/themeReducer';
import personLogo from '../img/person.svg';
import coin from '../img/coin.svg';
import prewiew from '../img/prewiew.png';
import burger from '../img/menu2.svg';
import './Dark.css'
import { useTypesSelector } from '../store';
import { timerAction } from '../asyncActions/timerAction';



const Dark: React.FC = () => {
  
  const dispatch = useDispatch();
  // const themewhite = useTypesSelector(state => state.theme.theme)
  const minutes = useTypesSelector(state => state.timer.minutes)
  const seconds = useTypesSelector(state => state.timer.seconds)
  console.log(minutes);
  console.log(seconds)
  document.body.classList.add('dark');

 
  let flagTheme:boolean = true;
  let switchClass:string = 'switch-btn switch-on';
const themeHandler = () :void =>{
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

// let left:number = 60
let right:number = 0


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
    <div className="header__mobile-menu"><img src={burger} alt="" /></div>
            </div>
          </div>
        </div>
        </div>
        
      </header>
  
  <main className="main">
    <div className="oclock">
      <div className="container">
      <div className="ocklock__header"><p>Вы были сконцентрированы 180 мин</p></div>
      <div className="ocklock__visual">
        <div className="oclock__circle-gray">
          <div className="oclock__circle-blue">
            <div className="oclock__button"><button className="choice-btn"></button></div>
            <div className="oclock__image">
              <img src={prewiew} alt="" />
            </div>
          </div>
        </div>
      </div>

    <div className="oclock__time"><h2>{minutes}:{seconds}</h2></div>

    <div className="oclock__begin"><button onClick={() => dispatch(timerAction(minutes,seconds))}  className="begin-btn">Начать</button></div>


      </div>
      
    </div>
  </main>

   
      
    </div>
    
  );
}


export default Dark;
