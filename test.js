let simplifiedMilliseconds=0
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





