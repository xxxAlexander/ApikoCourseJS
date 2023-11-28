/*
1) Створити ф-ію конструктор Calculator та до її прототипу добавити два методи sum(a,b) та subtract(a,b)
2) Створити ф-ію конструктор AdvancedCalculator
(наслідує методи від Calculator) та до її прототипу добавити два методи multiply(a,b) та divide(a,b)
*/

function Calculator() {
}

Calculator.prototype.sum = (a, b) => a + b
Calculator.prototype.subtract = (a, b) => a - b

function AdvancedCalculator() {
    Calculator.call(this);
}

AdvancedCalculator.prototype = Object.create(Calculator.prototype);
AdvancedCalculator.prototype.constructor = AdvancedCalculator;

AdvancedCalculator.prototype.multiply = (a, b) => a * b
AdvancedCalculator.prototype.divide = (a, b) => b !== 0 ? a / b : NaN


let calculator = new Calculator();

console.log(calculator.sum(5, 3));
console.log(calculator.subtract(5, 3));

let advancedCalc = new AdvancedCalculator();

console.log(advancedCalc.multiply(5, 3));
console.log(advancedCalc.divide(6, 2));
console.log(advancedCalc.divide(6, 0));