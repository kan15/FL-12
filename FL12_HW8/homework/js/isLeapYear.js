function isLeapYear(input) {
    let date = new Date(input);
    let year = date.getFullYear();
    if (isNaN(year)) {
        return 'Invalid Date'
    } else if(year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
        return `${year} is a leap year`
    } else if(year % 4 !==0 || year % 100 === 0 ) {
        return `${year} is not a leap year`
    } else {
        return 'Invalid Date'
    }
}
isLeapYear('2020-01-01 00:00:00'); 