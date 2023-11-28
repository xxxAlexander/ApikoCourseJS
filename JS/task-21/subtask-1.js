/*
Написати функцію вищого порядку compose
яка прийматиме довільну кількість функцій як аргумент і створюватиме з них композицію*/

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

const f = x => x+1
const g = x => x+2
const h = x => x+3

const composedFunc = compose(f, g, h);

console.log(composedFunc(0))

/*
Написати карі функцію (modifyArray) яка прийматиме спочатку
як аргумент функцію (modifyCondition), а далі прийматиме як
аргумент масив стрічок (data), карі функція повинна повертати
модифікований масив згідно умови (modifyCondition) яка прийшла на початку карі функції
*/

const modifyCondition = (item) => item * item
const dataArr = [0,1,2,3,4]

const modifyArray = modifyCondition => data => data.map(modifyCondition);

console.log(modifyArray(modifyCondition)(dataArr))

/*
Написати композиції allToLower та capitalizeAllFirst
використовуючи власний compose та modifyArray які прийматимуть
масив стрічок та повертатимуть наступний результат:
    const testArray = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];
1) allToLower - приймає testArray -> перетворює стрічки так що
    усі символи приводяться до нижнього регістру 'Result: custom - web - and - mobile - platforms length: 39'
2) capitalizeAllFirst - приймає testArray -> перетворює стрічки
    так що лише перший символ у верхньому регістрі, інші у нижньому,
    об'єднує їх в одну стрічку з символом'-' -> виводить в консоль ' +''
     Result: Custom-Web-And-Mobile-Platforms length: 31'
*/


const arr = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];

const allToLowerCondition =  (str) => str.toLowerCase()
const allToLower = modifyArray(allToLowerCondition);

const capitalizeAllFirstCondition = (str) => str.charAt(0).toUpperCase() + str.slice(1)
const capitalizeAllFirst = modifyArray(capitalizeAllFirstCondition);

const joinWithHyphen = data => data.join('-');

const composedFunction = compose(joinWithHyphen, capitalizeAllFirst, allToLower);

console.log(allToLower(arr))
console.log(capitalizeAllFirst(arr))
console.log(composedFunction(arr))






