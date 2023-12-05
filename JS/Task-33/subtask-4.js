/*
Написати функцію fetchSWAPI яка буде приймати кінцевий ресурс, робити запит до SWAPI і повертати відповідь у вигляді об'єкту.
Функція fetchSWAPI буде приймати 2 параметри:

     resource - стрічка - кінцевий ресурс (наприклад 'planets/') або повна url на SWAPI (наприклад https://swapi.py4e.com/api/planets/1/),
     в функції перевіряти і будувати кінцевий url
    throwError - булеве значення - чи потрібно викидати помилку у разі невдалого ревесту. По замовчуванню - false.

    Функція fetchSWAPI повинна перевіряти чи запит відбувся успішно.
    У разі помилки її потрібно обробляти - вивести у консоль resource та помилку. Також якщо throwError - true то викидати помилку далі.
    Функція повинна повертати розпаршений об'єкт відповіді від API.
    Функція містить в собі root url на SWAPI, додає кінцевий ресурс resource і робить запит.
    Після реалізації функції потрібно її протестувати викликавши декілька раз з параметрами як вказано нижче
    і вивести результат виконання запитів - testFetchSWAPI.

    Приклад результату:
    person  {name: "Luke Skywalker", height: "172", ...}
    film  {title: "A New Hope", episode_id: 4, ...}
    films/1001/  fetchSWAPI error  Error: Failed with status code: 404
    film1001Id  undefined
    films/1101/  fetchSWAPI error  Error: Failed with status code: 404
    testFetchSWAPI error  Error: Failed with status code: 404
*/

 import {fetchSWAPI} from "./fetchSWAPI.js";
async function testFetchSWAPI() {
    try {
        const person = await fetchSWAPI("people/1/")
        console.log("person ", person)
        console.log("------------------------------")

        const film = await fetchSWAPI("https://swapi.py4e.com/api/films/1/")
        console.log("film ", film)
        console.log("------------------------------")

        const film1001Id = await fetchSWAPI("films/1001/")
        console.log("film1001Id ", film1001Id)
        console.log("------------------------------")

        await fetchSWAPI("films/1101/", true)
    } catch (error) {
        console.log("testFetchSWAPI error ", error)
    }
}

testFetchSWAPI()

