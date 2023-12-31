// Дано: написати Анонімну функцію та присвоїти її значення змінній convert, функція має приймати число, 
// яке є кількістю байтів та повертати стрічку із переведеними байтами в мб, 
// з двома знаками після коми в форматі "100.00 Mb" та викликати цю функцію використовуючи call 
// Результат: функція приймає число (байти) та перетворює у стрічку у форматі Мб наприклад: 
// 10000 -> 0.01 Mb

//let convert; // write your anonymous function here

let convert = function(bytes) {
    let megabytes = (bytes / 1024 / 1024).toFixed(2);
    return megabytes + " Mb";
  };
  
  let result = convert(10000);
  console.log(result); 