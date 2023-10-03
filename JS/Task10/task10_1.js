function printPowsOf2(number) {
    if (typeof number !== 'number') {
        console.log("incorrect type");
        return;
    }

    for (let i = 1; i <= number; i *= 2) {
        console.log(i);
    }
}

printPowsOf2("302");
printPowsOf2(null);  
printPowsOf2(128);   
printPowsOf2(60);