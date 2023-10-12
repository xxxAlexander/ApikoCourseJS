// Global Scope: створити змінну в глобальній області видимості, створити функцію і в тілі функції вивести цю змінну в консоль
// Function Scope: створити функцію, оголосити зміну всередині функції, тоді спробувати вивести цю змінну в консоль всередині функції,
// та за межами функції
// Block Scope: Створити функцію, в функції написати блок {} всередині якого оголосити змінну та вивести її в консоль, 
// тоді вивести в консоль цю змінну за межами блоку, та подивитись на результат

var globalVariable = "Я глобальна змінна";

function globalScopeFunction() {
  console.log(globalVariable);
}

globalScopeFunction(); 

function functionScope() {
  var localVariable = "Я змінна в області видимості функції";
  console.log(localVariable);
}

functionScope(); 
function blockScopeFunction() {
  if (true) {
    let blockVariable = "Я змінна в області видимості блоку";
    console.log(blockVariable);
  }
  
}

blockScopeFunction(); 