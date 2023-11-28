/*
На лекції ми використовували API jsonplaceholder - 'https://jsonplaceholder.typicode.com/'
Можна перейти за посиланням і ще раз ознайомитись з даним API
Можна створити константу baseUrl = https://jsonplaceholder.typicode.com
const baseUrl = "https://jsonplaceholder.typicode.com";
Будемо використовувати ресурс /users щоб отримати дані користувачів
Завдання: Отримати список користувачів з віддаленого ресурсу /users.
    Використати fetch.
    Очікуваний результат - масив користувачів*/

const baseUrl = "https://jsonplaceholder.typicode.com"
const usersEndpoint = "/users"

const getUsers = () => {
    fetch(`${baseUrl}${usersEndpoint}`)
        .then(response => {
            return response.json()
        }).then(users => {
            console.log("Result:", users)
        }).catch(error => {
            console.error("Error:", error.message)
        });
};

getUsers();