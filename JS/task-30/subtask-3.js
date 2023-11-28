/*
Завдання. Створити нового користувача - зробити POST запит на ендпоінт 'https://jsonplaceholder.typicode.com/users'.
    Використати fetch.
    Для нового користувача вказати поля name, username, email.
    Оскільки дане API працює з JSON то body запиту повинне бути у JSON форматі.
    Вказати для запиту заголовок 'Content-type' з значенням 'application/json'
Після отримання відповіді від API, перевірити чи запит виконався успішно
Вивести у консоль результат

*/

const baseUrl = "https://jsonplaceholder.typicode.com/users";

function addUser () {

    const newUser = {
        name: "Andriy B",
        username: "andriyB",
        email: "smeEmail@gmail.com"
    }

    fetch(baseUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)
    })
        .then(response => {
            return response.json();
        })
        .then(createdUser => {
            console.log("Користувача успішно додано. Result:", createdUser)
        })
        .catch(error => {
            console.error("Error:", error.message)
        });
}

addUser()
