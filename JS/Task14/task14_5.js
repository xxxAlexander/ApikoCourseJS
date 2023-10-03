function removeObj(arrayOfObj, keyName, value) {
    return arrayOfObj.filter(obj => obj[keyName] !== value);
}

const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];
const result = removeObj(arr, "age", 2);
console.log(result); 

const result2 = removeObj(result, "year", 2);
console.log(result2);