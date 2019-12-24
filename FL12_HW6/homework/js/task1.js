// Your code goes here
let a = prompt('Enter coefficient A');
let b = prompt('Enter coefficient B');
let c = prompt('Enter coefficient C');
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);
if (a === 0 || isNaN(a)|| isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
} else {
    const two = 2;
    const four = 4;
    let D = Math.pow(b, two) - four*a*c;
    let x1 = Math.round((-b+Math.sqrt(D))/two*a);
    let x2 = Math.round((-b-Math.sqrt(D))/two*a);
    if ( D < 0) {
        console.log('No solution');
    } else if ( D === 0) {
        console.log(`x = ${x1}`);
    } else {
        console.log(`x1 = ${x1} and x2 = ${x2}`);
    }
}
