export class ChangeStructure{
   static changeSystem(wich){
      let divMain = document.querySelector('.relogio')
      switch(wich){
         case 'clock':         
            divMain.id='clock'
            divMain.setAttribute('data-system','clock')
            divMain.innerHTML=
            `<div class="clock">
               <div class="tempo">
                  <p id="horas">00</p><span>Horas</span>
               </div>
               <span>:</span>
               <div class="tempo">
                  <p id="minutos">00</p><span>Minutos</span>
               </div>
               <span>:</span>
               <div class="tempo">
                  <p id="segundos">00</p><span>Segundos</span>
               </div>
            </div>
            `
         break;
         case 'stopwatch':
            divMain.setAttribute('data-system','stopwatch')
            divMain.id='stopwatch'
            divMain.innerHTML=`
            <div class='stopwatch'>
               <div class="tempo">
                  <p id="horas">00</p>
                  <span>Horas</span>
               </div>
                  <span>:</span>
               <div class="tempo">
                  <p id="minutos">00</p>
                  <span>Minutos</span>
               </div>
                  <span>:</span>
               <div class="tempo">
                  <p id="segundos">00</p>
                  <span>Segundos</span>
               </div>
                  <span>:</span>
               <div class="tempo">
                  <p id="miliSegundos">00</p>
                  <span>Milisegundos</span>
               </div>
            </div>
            <div class="stopwatch-buttons">
            <button id="startButton">Começar</button>
            <button id="restartButton">Reiniciar</button>
            <button id="stopButton">Parar</button>
            </div>`
         break;
         case 'timer':
            divMain.setAttribute('data-system','timer')
            divMain.id='timer'
            divMain.innerHTML=`
            <div class="start-stop">
               <button id="startButton">Começar</button>
               <button id="stopButton">Parar</button>
            </div>
            <div class="timer">
               <div class="tempo">
                   <p id="horas">00</p><span>Horas</span>
               </div>
               <span>:</span>
               <div class="tempo">
                   <p id="minutos">00</p><span>Minutos</span>
               </div>
               <span>:</span>
               <div class="tempo">
                   <p id="segundos">00</p><span>Segundos</span>
               </div>
            </div>
            <div class="inputsForAddTime">
               <div class="inputDivs">
                  <label for="hoursToAdd">Horas</label>
                  <input type="number" name="timeToAdd" id="hoursToAdd">
               </div>
               <div class="inputDivs">
                  <label for="minutesToAdd">Minutos</label>
                  <input type="number" name="timeToAdd" id="minutesToAdd">
                  <button class="add">Adicionar</button>
               </div>
               <div class="inputDivs">
                  <label for="secondsToadd">Segundos</label>
                  <input type="number" name="timeToAdd" id="secondsToAdd">
               </div>
            </div>    
            `
      }
   }
}