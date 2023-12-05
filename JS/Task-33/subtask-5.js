
/*Написати функцію яка буде використовувати попередньо написану функцію fetchSWAPI,
    ця функція повинна робити запити щоб отримати дані людини з вказаним ім'ям,' +
' після цього на основі отриманої відповіді паралельно отримати деталі фільмів у яких людина з'явилась.
    Функція повинна повертати об'єкт з ім'ям людини та списком
з деталями фільмів у форматі: {name: ‘’, films: [{title: ‘’, episode_id: ‘’, ...}, ...]}*/

import {fetchSWAPI} from "./fetchSWAPI.js";
async function getPersonFilms(name) {
    try {
        const person = await fetchSWAPI(`people/?search=${name}`);

        if (person.results.length === 0) {
            throw new Error(`Person with name '${name}' not found.`);
        }

        const personData = person.results[0];
        const filmsPromises = personData.films.map(filmUrl => fetchSWAPI(filmUrl));

        const films = await Promise.all(filmsPromises);

        return {
            name: personData.name,
            films: films,
        };
    } catch (error) {
        console.error("getPersonAndFilms error:", error);
        return null;
    }
}

async function testGetPersonFilms() {
    const lukeFilms = await getPersonFilms("Luke");
    console.log("lukeFilms ", lukeFilms);

    const kenobiFilms = await getPersonFilms("Kenobi");
    console.log("kenobiFilms ", kenobiFilms);
}

testGetPersonFilms();
