/* let simplifiedMilliseconds=0
let seconds = 0
let minutes = 0
let hours = 0

const tenMsInterval=setInterval(()=>{showTime()},10)

function showTime() {
    simplifiedMilliseconds=simplifiedMilliseconds + 1
    if (simplifiedMilliseconds > 99) {
        simplifiedMilliseconds = 0
        seconds = seconds +1
    } if (seconds >59) { //los segundos solo llegan a 60
        seconds = 0
        minutes = minutes + 1
    }
    console.log(`${minutes}:${(seconds<10)?'0'+seconds:seconds}:${(simplifiedMilliseconds<10)?'0'+simplifiedMilliseconds:simplifiedMilliseconds}`);//muestra el tiempo, si es menor a 10 agrega un 0
}

setTimeout(()=>{clearInterval(tenMsInterval)},15000) //<------------con esto se para (en 15 seg)
 */
let ms=0
let seconds = 0
let minutes = 0
let hours = 0
let timeStart=Date.now()//ms desde el 1 de enero de 1970 a las 0:00:00 hasta hoy
function stopWatch(){
     ms = Date.now() - timeStart;
    if(ms>1000){
        seconds++
        seconds=Math.trunc(seconds)
        if(seconds>59){
            seconds=0
            minutes++
            
        }
    }
    console.log('seconds',seconds,':','ms',ms,);

    // console.log(currentTime)
}
const stopWatchInterval=setInterval(()=>{stopWatch()},10)
setTimeout(()=>{clearInterval(stopWatchInterval)},10000)






