/*Створити ф-ію timer, яка приймає число(секунди)
та імітує поведінку таймера: кожну секунду виводить в консоль стрічку
Timer: ${s}, де ${s} - кількість секунд що залишилось*/

function timer (seconds) {
   const intervalId = setInterval(() => {
       console.log(`Timer: ${seconds}`)

       if(seconds <= 0){
           clearInterval(intervalId)
           console.log('End timer')
       }

       seconds -= 1
   }, 1000)
}


timer(10)

