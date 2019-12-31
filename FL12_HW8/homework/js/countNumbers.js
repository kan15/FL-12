function makeNumber(args) {
    let str = '';
    for( let i = 0; i < args.length; i++ ) {
        if (isNaN(args[i]) === false) {
            str += args[i];
        }
    }
    return str;
}

function countNumbers(args) {
    let result = {};
    const numbers = makeNumber(args);
    const numbersAllArr = numbers.split('');
    const uniqueNumbersSet = new Set(numbers);
    const uniqueNumbersArr = Array.from(uniqueNumbersSet);
    uniqueNumbersArr.sort();
    for(let i = 0; i < uniqueNumbersArr.length; i++) {
        let amount = 0;
        for(let j = 0; j < numbersAllArr.length; j++) {
            if(uniqueNumbersArr[i]===numbersAllArr[j]){
                amount = amount + 1;
            }
            result[uniqueNumbersArr[i]] = amount;
        }
    }
}
countNumbers('erer384jj4444666888jfd123');