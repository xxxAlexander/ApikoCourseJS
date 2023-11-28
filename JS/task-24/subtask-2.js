/*

Дано: Функція для генерації ID
1) Створити клас TodoItem із полями(властивостями): id(генерується у конструкторі за допомогою функції), name, checked(за замовчуванням false).
 Для поля checked написати гетер та сетер (добавити валідацію: поле може приймати лише булеве значення true або false)
2) Створити клас TodoList із полями: id(генерується у конструкторі за допомогою функції), name, items(за замовчуванням пустий масив).
Добавити наступні методи:
    addItem - метод який добавляє елементи до масиву (потрібно зробити валідацію на тип TodoItem)
    removeItemById - метод який видаляє елемент з масиву по id
    getItemById - метод який повертає елемент TodoItem з масиву по id
3) Створити екземпляр класу TodoList;
4) Створити 4 екземпляри класу TodoItem, добавити їх у TodoList та вивести у консоль екземпляр класу TodoList.
5) Поміняти значення checked у одного екземпляру TodoItem та вивести TodoList у консоль( у масиві items це поле має бути оновлене)
6) Видалити 2 екземпляри TodoItem із TodoList та вивести у консоль TodoList(у масиві items має залишитись лише 2 екземпляри TodoItem)
*/

function generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
}


/*1) Створити клас TodoItem із полями(властивостями): id(генерується у конструкторі за допомогою функції), name, checked(за замовчуванням false).
Для поля checked написати гетер та сетер (добавити валідацію: поле може приймати лише булеве значення true або false)*/

class TodoItem {
    id
    name
    #checked

    constructor(name) {
        this.id = generateId();
        this.name = name;
        this.checked = false;
    }

    get checked() {
        return this.#checked;
    }

    set checked(value) {
        if (typeof value === "boolean") {
            this.#checked = value;
        } else {
            console.error("Значення має бути типу boolean");
        }
    }
}

/*2) Створити клас TodoList із полями: id(генерується у конструкторі за допомогою функції), name, items(за замовчуванням пустий масив).
Добавити наступні методи:
    addItem - метод який добавляє елементи до масиву (потрібно зробити валідацію на тип TodoItem)
removeItemById - метод який видаляє елемент з масиву по id
getItemById - метод який повертає елемент TodoItem з масиву по id*/


class TodoList {
    id
    name
    items

    constructor(name) {
        this.id = generateId();
        this.name = name;
        this.items = [];
    }

    addItem(item) {
        if (item instanceof TodoItem) {
            this.items.push(item);
        } else {
            console.error("Добавляймий елемент має бути обєктом класу TodoItem");
        }
    }

    removeItemById(id) {
        this.items = this.items.filter(item => item.id !== id);
    }

    getItemById(id) {
        return this.items.find(item => item.id === id);
    }
}
// 3) Створити екземпляр класу TodoList;

const todoList = new TodoList("Andriy's todo list");

// 4) Створити 4 екземпляри класу TodoItem, добавити їх у TodoList та вивести у консоль екземпляр класу TodoList.

todoList.addItem(new TodoItem("Do task 1"));
todoList.addItem(new TodoItem("Do task 2"));
todoList.addItem(new TodoItem("Do task 3"));
todoList.addItem(new TodoItem("Do task 4"));

console.log(todoList);

//5) Поміняти значення checked у одного екземпляру TodoItem та вивести TodoList у консоль( у масиві items це поле має бути оновлене)

todoList.items[0].checked = true

console.log(todoList);

// 6) Видалити 2 екземпляри TodoItem із TodoList та вивести у консоль TodoList(у масиві items має залишитись лише 2 екземпляри TodoItem)

todoList.removeItemById(todoList.items[1].id);
todoList.removeItemById(todoList.items[2].id);

console.log(todoList);





