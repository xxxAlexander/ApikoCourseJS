function filterArray(initialArray) {
    console.log(initialArray.filter((item)=> typeof item === 'string' ))
}
filterArray([2,4,'Hello', 5, 'World']);