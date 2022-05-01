"use strict";

console.log('Файл подключен')

import { Popup } from './libs/popup.js'
console.log(Popup)

const popupOne = new Popup({
  openSelector: 'poppup-link',
  closeSelector: 'popup__close',
});


console.log(popupOne)



// document.addEventListener('click', (event) => {
//   if(event.target.dataset.popup){
//     const popupLink = event.target.dataset.popup;
//     const popupBlock = document.getElementById(popupLink);
//     popupBlock.classList.toggle('open')
// // ! Не забыть удалить потом
//     console.log('Попап открывается')
//   }
//   if(event.target.dataset.popupclose){
//     const popupLink = event.target.dataset.popupclose;
//     const popupBlock = document.getElementById(popupLink);
//     popupBlock.classList.toggle('open')
//     // ! Не забыть удалить потом
//     console.log('Попап закрывается')
//   }
// })