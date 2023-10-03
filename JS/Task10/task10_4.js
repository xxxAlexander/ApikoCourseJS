//Дано: Функція яка приймає стрічку яка містить мінімум 1 слово та пробіли. 
//Перший та останній символ не пробіли. Слова можуть бути розділені не лише одним пробілом.

//Результат: Вивести у консоль кількість слів у стрічці.


function calculateWordsInString(string) {
    const words = string.split(' ').filter(word => word.length > 0);
    return words.length;
}

console.log(calculateWordsInString("Easy string for count"));               
console.log(calculateWordsInString("Easy"));                                
console.log(calculateWordsInString("Some string with a triple   space"));   
console.log(calculateWordsInString("Some?  string, with a triple   space"));
