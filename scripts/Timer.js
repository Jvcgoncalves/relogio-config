export class Timer{
   static intervalId = null;
   static startedOnce= false;

   static addTime() {
      let horas = document.querySelector('#horas')
      let minutos = document.querySelector('#minutos')
      let segundos = document.querySelector('#segundos')
     
      let h=Number(horas.innerText)
      let min=Number(minutos.innerText)
      let sec= Number(segundos.innerText)
      document.title=`Timer ${horas.textContent} : ${minutos.textContent} : ${segundos.textContent}`
      function check(){
         if(Number(minutos.textContent)>=60){
            h+=1
            horas.innerText=h
            min = Number(minutos.textContent)-60
            minutos.innerText=min
         }
         if(Number(segundos.textContent)>=60){
            min+=1
            minutos.innerText=min
            sec = Number(segundos.textContent)-60
            segundos.innerText=sec
         }
      }
      document.querySelector('.add').addEventListener('click',()=>{ 
         this.stopTimer()
         h=Number(horas.innerText)
         min=Number(minutos.innerText)
         sec= Number(segundos.innerText)

         let hoursToAdd = Number(document.querySelector('#hoursToAdd').value)
         let minutesToAdd = Number(document.querySelector('#minutesToAdd').value)
         let secondsToAdd = Number(document.querySelector('#secondsToAdd').value)
         
         // Adicionando minutos
         
         if(minutesToAdd==60){
            h+=1
         } else if(minutesToAdd>60){
            do{
               minutesToAdd-=60
               h+=1
               console.log(minutesToAdd)
            } while (minutesToAdd>=60)
            console.log(minutesToAdd)
            min += minutesToAdd 
         } else {
            min += minutesToAdd
         }

         // Adicionando segundos
         
         if(secondsToAdd==60){
            min+=1
         } else if(secondsToAdd>60){
            do{
               secondsToAdd-=60
               min+=1
            } while (secondsToAdd>=60)
            sec += secondsToAdd
         } else {
            sec += secondsToAdd
         }
         h+=hoursToAdd
         horas.innerText= h < 10 ? `0${h}` : h
         minutos.innerText= min < 10 ? `0${min}` : min
         segundos.innerText= sec < 10 ? `0${sec}` : sec
         check()
         document.querySelector('#hoursToAdd').value=''
         document.querySelector('#minutesToAdd').value=''
         document.querySelector('#secondsToAdd').value=''
      })
   }
   static startTimer(){
      let startButton = document.getElementById('startButton')
      startButton.addEventListener('click',()=>{
         this.stopTimer()
         this.startedOnce= true
         let horas = document.querySelector('#horas')
         let minutos = document.querySelector('#minutos')
         let segundos = document.querySelector('#segundos')
         let h = Number(horas.innerText)
         let min = Number(minutos.innerText)
         let sec = Number(segundos.innerText)

         this.intervalId = setInterval(()=>{  
         if(min === 0 && sec === 0 && h === 0){
            this.stopTimer()
         }
         if(sec>0 || min >0 || h >0){
            if(sec<=0 && min>=0){
               min--
               sec=60
               if(min < 0 && h >0){
                     min=59
                     h--
               }
            } else if(sec ===0 && min === 0 && h > 0 ){
               h--
               sec=59
               min=59
            }
            sec--
         } 
         
         horas.innerText= h < 10 ? `0${h}` : h
         minutos.innerText= min < 10 ? `0${min}` : min
         segundos.innerText= sec < 10 ? `0${sec}` : sec
         document.title=`Timer ${horas.textContent} : ${minutos.textContent} : ${segundos.textContent}`
         },1000)

      })
      document.getElementById('stopButton').addEventListener('click',()=>{
         clearInterval(this.intervalId)
      })
   }
   static stopTimer() {
      if (this.intervalId !== null) {
         clearInterval(this.intervalId);
         this.intervalId = null;
      }
   }
}