function printSeasonByMonth(month) {
    const lowercaseMonth = month.toLowerCase();

    switch (lowercaseMonth) {
        case "dec":
        case "jan":
        case "feb":
            console.log("winter");
            break;
        case "march":
        case "april":
        case "may":
            console.log("spring");
            break;
        case "june":
        case "july":
        case "aug":
            console.log("summer");
            break;
        case "sep":
        case "oct":
        case "nov":
            console.log("autumn");
            break;
        default:
            console.log("Invalid month");
            break;
    }
}

printSeasonByMonth("SEP"); 
printSeasonByMonth("NOV");  
printSeasonByMonth("JULY");      
printSeasonByMonth("APRIL");