console.log('Файл подключен')

function popupOpen(){
  document.addEventListener('click', (e)=>{
    console.log(e.target)
  })
}