import { TravelIntoSTC } from "./TravelIntoSTC.js"
require('../css/index.css')
require('../css/mediaQuery.css')

let travelButtons = document.querySelectorAll('.changeOperationsButtons')

TravelIntoSTC.changeOperation(document.querySelector('.relogio').dataset.system)
travelButtons.forEach(ev=>{
   ev.addEventListener('click',()=>{
      TravelIntoSTC.changeOperation(ev.dataset.goTo)
   })
})