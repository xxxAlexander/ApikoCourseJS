//Дано: масив [3, 2, "2", null, 1.5, 9.5, undefined];

//Результат: Вивести у консоль суму чисел у масиві.
const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
function calculateSumOfArray() {
    let sum = 0;

    for (let i = 0; i < initialArray.length; i++) {
        if (typeof initialArray[i] === 'number' && !isNaN(initialArray[i])) {
            sum += initialArray[i];
        }
    }

    console.log(sum);
}

calculateSumOfArray();
