import React,{useState} from 'react';
import { useDispatch } from 'react-redux';


export  const SoundClick = function(minutesAdd:number) {
    let audio = document.querySelector('audio')
    audio?.play()
    setTimeout(() => {audio?.pause(); }, 15000);
   
    // nameField.autoplay = true; // Автоматически запускаем
}