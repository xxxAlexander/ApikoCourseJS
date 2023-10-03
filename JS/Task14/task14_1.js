function unicFn(initialArray) {
    return initialArray.filter((value, index, array) => array.indexOf(value) === index);
}

const initialArray = [2, 3, 1, 3, 3, 7];
const uniqueValues = unicFn(initialArray);
console.log(uniqueValues);