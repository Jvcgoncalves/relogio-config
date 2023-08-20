import { ChangeStructure } from "./ChangeStructure.js";
import { Clock } from "./Clock.js";
import { Stopwatch } from "./Stopwatch.js";
import { Timer } from "./Timer.js";
// const changeStructure = new ChangeStructure()
export class TravelIntoSTC{
   static changeOperation(wichIs){
      switch(wichIs){
         case 'clock':
               ChangeStructure.changeSystem('clock')
               Clock.stopClock()
               Timer.stopTimer() 
               Stopwatch.stopStopwatch()
               Clock.startClock() 
         break;
         case 'stopwatch':
            ChangeStructure.changeSystem('stopwatch')
            Clock.stopClock()
            Timer.stopTimer() 
            Stopwatch.stopStopwatch()
            Stopwatch.startStopwatch()
         break;
         case 'timer':
            ChangeStructure.changeSystem('timer')
            Clock.stopClock()
            Timer.stopTimer() 
            Stopwatch.stopStopwatch()
            Timer.startTimer()
            Timer.addTime()
         break;
      }      
   }
}