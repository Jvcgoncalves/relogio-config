export class Stopwatch {
   static intervalId = null
   static startStopwatch() {
      this.intervalId = 'início'
      let segundosPart =  document.getElementById('segundos')
      let minutosPart =  document.getElementById('minutos')
      let horasPart =  document.getElementById('horas') 
      let miliSegundosPart =  document.getElementById('miliSegundos') 
      let miliSegundos=0
      let segundos=0
      let minutos=0
      let horas=0
      let intervalId = null;
      document.title=`Cronômetro: 00 : 00 : 00` 
      function startCron(){
         miliSegundos += 10
         if(miliSegundos===1000){
            miliSegundos=0
            segundos++
         if(segundos===60){
            minutos++
            segundos=0
            if(minutos===60){
               minutos=0
               horas++
            }
         }} 
         miliSegundosPart.innerText=miliSegundos.toString().slice(0,2)
         segundosPart.innerText=segundos < 10 ? `0${segundos}` : segundos
         minutosPart.innerText=minutos < 10 ? `0${minutos}` : minutos
         horasPart.innerText=horas < 10 ? `0${horas}` : horas
         document.title=`Cronômetro: ${horasPart.textContent} : ${minutosPart.textContent} : ${segundosPart.textContent}`    
      }
      document.getElementById('restartButton').addEventListener('click',()=>{
          segundos=0
          miliSegundos=0
          minutos=0
          horas=0
          miliSegundosPart.innerText=miliSegundos < 10 ? `0${miliSegundos}` : miliSegundos
          segundosPart.innerText='00'
          minutosPart.innerText='00'
          horasPart.innerText='00'
          document.title=`Cronômetro: ${horasPart.textContent} : ${minutosPart.textContent} : ${segundosPart.textContent}`   
      })
      document.getElementById('startButton').addEventListener('click',()=>{
         this.stopStopwatch()
         intervalId = setInterval(startCron,10)
         this.intervalId = intervalId
      })
      document.getElementById('stopButton').addEventListener('click',()=>{
         clearInterval(intervalId)
      })
   }
   static stopStopwatch() {
      if (this.intervalId !== null) {
         clearInterval(this.intervalId);
         this.intervalId = null;
      }
   }
}