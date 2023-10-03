//Дано: Функція приймає Об’єкт типу {[name]: {age: number, city: string}} 
//Результат: Вивести у консоль масив із іменами людей які із міста "London" та старше 18 років 



function findUser(initialObject) {
    return Object.keys(initialObject).filter(name => initialObject[name].age > 18 && initialObject[name].city === "London");
}

const users = {
    Max: { age: 23, city: "London" },
    Alex: { age: 20, city: "NY" },
    Olga: { age: 17, city: "London" }
};

const londonResidents = findUser(users);
console.log(londonResidents);
