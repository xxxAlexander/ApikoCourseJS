/*
Створити ф-ію isString, яка першим параметром отримує функцію колбек та другим значення.
    Перевіряє чи передане значення це стрічка і колбек це функція та виконує колбек
із цим значенням або виводить помилку в консоль якщо це не стрічка або колбек не є функцією
*/

function isString(callback, value) {
    if(typeof callback !== 'function'){
        console.error("Callback must be a function")
        return
    }

    if(typeof value !== 'string'){
        console.error("Value must be string")
        return
    }

    callback(value)
}

function callback(str) {
    console.log("Значення переданної стрічки:", str);
}

isString(callback, "Hello, World!");

isString("Invalid", "some string");