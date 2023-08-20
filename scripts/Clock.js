export class Clock{
   static intervalId = null;

   static startClock() {
      this.intervalId = setInterval(function (){
         let date = new Date()
         let horas = document.querySelector('#horas')
         let minutos = document.querySelector('#minutos')
         let segundos = document.querySelector('#segundos')
         horas.innerText = date.getHours()
         minutos.innerText = date.getMinutes()
         segundos.innerText = date.getSeconds()
         document.title=`Horário ${horas.innerText} : ${minutos.innerText} : ${segundos.innerText}`
      }) 
   }
   static stopClock() {
      if (this.intervalId !== null) {
         clearInterval(this.intervalId);
         this.intervalId = null;
      }
   }
}