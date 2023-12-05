/*
Зробити запит до SWAPI щоб отримати список людей з прізвищем Skywalker, вивести у консоль.
    Документація по пошуку - https://swapi.py4e.com/documentation#search
Результат: вивести у консоль список людей з прізвищем Skywalker у форматі:
    [{ name: 'Luke Skywalker', height: 172, ... }, { name: 'Anakin Skywalker', height: 188, ... }, ...]*/


async function getSkywalkers() {
    try {
        const response = await fetch('https://swapi.py4e.com/api/people/?search=Skywalker');

        if (!response.ok) {
            throw new Error(`Failed with status code: ${response.status}`);
        }

        const data = await response.json();
        const skywalkers = data.results

        console.log(skywalkers);
    } catch (error) {
        console.error("Request Error:", error);
    }
}

getSkywalkers();