//Дано: функція яка приймає масив елементів будь-яких типів 
//Результат: вивести у консоль масив який містить лише стрічки початкового масиву 


function filterArray(initialArray) {
    console.log(initialArray.filter((item)=> typeof item === 'string' ))
}
filterArray([2,4,'Hello', 5, 'World']);
