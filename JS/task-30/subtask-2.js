/*
Крім ресурсу /users API надає ще інші ресурси, наприклад /albums щоб отримати дані фотоальбомів
І ці ресурси можуть залежати один від одного, наприклад ми можемо отримати альбоми які належать певному користувачу за
допомогою ендпоінту /users/1/albums - отримаємо альбоми користувача у якого поле id = 1
Завдання. Отримати список усіх альбомів які належать користувачу з id - 10.
Використати fetch.
    Після отримання відповіді від API, перевірити чи запит виконався успішно (чи знаходиться код відповіді в діапазоні 200-299)
Вивести у консоль результат*/

const baseUrl = "https://jsonplaceholder.typicode.com/users/"
const albumsEndpoint = "/albums"

function getUserAlbum(userId) {
    fetch(`${baseUrl}${userId}${albumsEndpoint}`)
        .then(response => {
            return response.json()
        })
        .then(albums => {
            console.log("Result:", albums)
        })
        .catch(error => {
            console.error("Error:", error.message)
        });
}

getUserAlbum(10)
