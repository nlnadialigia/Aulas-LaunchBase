const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modalFullscreen = document.querySelector('.modal-fullscreen')

for (let card of cards){
    card.addEventListener('click', function () {
        pageId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https:rocketseat.com.br/${pageId}`
    })
    
}

  
modalFullscreen.addEventListener("click", ()=>{
    modalOverlay.classList.toggle('maximize')   
})

document.querySelector('.close-modal').addEventListener('click',()=>{
    modalOverlay.classList.remove('active')
    modalOverlay.classList.remove('maximize')
  })
  

