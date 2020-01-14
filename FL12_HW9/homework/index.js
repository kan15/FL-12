// Your code goes here
function convert(...args) {
    let convertArr = [];
    for(let i = 0; i < args.length; i++) {
        typeof args[i] === 'number' ? convertArr.push(String(args[i])) : convertArr.push(Number(args[i]));
    }
    return convertArr;
}

function executeforEach(arr, func) {
    for (let item of arr) {
        func(item);
    }
}

function mapArray(arr, callbackFunc) {
    let arrMap = [];
    executeforEach(arr, item => arrMap.push(callbackFunc(+item)));
    return arrMap;
}

function filterArray(arr, func) {
    let arrFilt = [];
    executeforEach(arr, function(item) {
        if(func(item) === true ) {
            arrFilt.push(item)
        }
    })
    return arrFilt;
}

function flipOver(str) {
    let strBackwards = '';
    for (let i = str.length-1 ; i >= 0; i--) {
        strBackwards += str[i];
    }
    return strBackwards;
}


function makeListFromRange(arr) {
    let listArr = [];
    for(let i = arr[0]; i <= arr[1]; i++) {
        listArr.push(i);
    }
    return listArr;
}

function getArrayOfKeys(arr, key) {
    let keyArr = [];
    executeforEach(arr, item => keyArr.push(item[key]));
    return keyArr;
}

function substitute(arr) {
    const minValue = 30;
    function callbackFunc(el){
        if (el < minValue){
            return '*';
        } else {
            return el;
        }
    }
    return mapArray(arr, callbackFunc);
}

function getPastDay(date, amountDays) {
    const givenDate = new Date(date);
    givenDate.setDate(givenDate.getDate()-amountDays);
    return givenDate.getDate();
}

function formatDate(date){
    const doubleDigit = 10;
    const year = date.getFullYear();
    const month = date.getMonth()+1;
    const day = date.getDate();
    const hours = date.getHours() < doubleDigit ? '0'+ date.getHours() : date.getHours();
    const minutes = date.getMinutes() < doubleDigit ? '0'+ date.getMinutes() : date.getMinutes();
    const finalDate = `${year}/${month}/${day} ${hours}:${minutes}`;
    return finalDate;
}