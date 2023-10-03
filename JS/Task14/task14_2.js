//Дано: функція яка приймає масив чисел 
//Результат: вивести у консоль "YES" якщо усі числа у масив парні та "NO" в іншому випадку 


function isEvenArray(initialArray) {
    let hasUnevenNumber = false
    initialArray.forEach(element => {
        if(element % 2 !== 0){
            hasUnevenNumber = true
            return
        }
    });

    console.log(hasUnevenNumber  ? 'NO' : 'yes')

   }
   isEvenArray([2,4,6,8]);
   isEvenArray([2,3,6,8]);
