function calculateWordsInString(string) {
    const words = string.split(' ').filter(word => word.length > 0);
    return words.length;
}

console.log(calculateWordsInString("Easy string for count"));               
console.log(calculateWordsInString("Easy"));                                
console.log(calculateWordsInString("Some string with a triple   space"));   
console.log(calculateWordsInString("Some?  string, with a triple   space"));