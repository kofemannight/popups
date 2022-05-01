export class Popup {
  constructor({
    openSelector: openSelector,
    closeSelector:closeSelector,
  }){
    this.openSelector = openSelector
    this.closeSelector = closeSelector
  }
  openPopup() {
    console.log('я работаю из ююю')


    // document.addEventListener('click', (event) => {
    //   if (event.target.classList.contains(openSelector)) {
    //     const popupLink = event.target.dataset.popup;
    //     console.log(popupLink)
    //     const popupBlock = document.getElementById(popupLink);
    //     popupBlock.classList.toggle('open');
    //     // ! Не забыть удалить потом
    //     console.log('Попап открывается');
    //   }
    // })
  }
}

