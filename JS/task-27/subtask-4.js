/*

Створити клас який містить поле name.
    Зробити так щоб це поле автоматично через 5с занулювалося(ставало null) після створення об’єкта
Також добавити функцію(метод) цього класу яка буде зупиняти(скасовувати) це занулювання*/


class SomeClass {
    name
    nullifyTimeoutId

    constructor() {
        this.name = "Some initial value";

        this.nullifyTimeoutId = setTimeout(() => {
            this.name = null;
            console.log("Полю name було присвоєне значення null");
        }, 5000);
    }

    cancelNullification() {
        clearTimeout(this.nullifyTimeoutId);
        console.log("Занулення скасоване");
    }
}

const someObject = new SomeClass();
const someObject2 = new SomeClass();


someObject2.cancelNullification();

setTimeout(() => {
    console.log(`Значення поля name обєкта 1 '${someObject.name}' через 6 секунд`);
    console.log(`Значення поля name обєкта 2 '${someObject2.name}' через 6 секунд`);
}, 6000);