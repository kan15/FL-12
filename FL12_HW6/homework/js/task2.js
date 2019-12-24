// Your code goes here
let a = prompt('Enter side A');
let b = prompt('Enter side B');
let c = prompt('Enter side C');
a = Math.round(parseInt(a));
b = Math.round(parseInt(b));
c = Math.round(parseInt(c));
if ( a <= 0 || b <= 0 || c <= 0 ) {
    console.log('A triangle must have 3 sides with a positive definite length');
} else if (isNaN(a) || isNaN(b) || isNaN(c) ){
    console.log('input values should be ONLY numbers');
} else if ( a + b <= c || b + c <= a || c + a <= b ) {
    console.log('Triangle doesn’t exist');
} else if ( a + b > c || b + c > a || c + a > b ){
    if ( a === b === c) {
        console.log('Equilateral triangle');
    } else if ( a === b && a !== c || b === c && a !== c || a === c && b !== c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Scalene triangle');
    }
}