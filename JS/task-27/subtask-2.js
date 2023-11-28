/*
Дано: обєкт Date та його методи https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
Створити ф-ію clock, яка імітує поведінку годинника: кожну секунду виводить в консоль час у форматі "Hours:Minutes:Seconds";
*/

function clock() {
    setInterval(() => {
        const crrDate = new Date();
        const hours = crrDate.getHours().toString().padStart(2, '0');
        const minutes = crrDate.getMinutes().toString().padStart(2, '0');
        const seconds = crrDate.getSeconds().toString().padStart(2, '0');

        console.log(`${hours}:${minutes}:${seconds}`);
    }, 1000);
}

clock();