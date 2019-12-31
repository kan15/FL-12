function addOne(x) {
    return x+1;
}    
function pipe(param, ...args) {
    const result = args.reduce(function(accum, someFunc) {
        return someFunc(accum);
    }, param);
    return result;
    }
pipe(1, addOne, addOne);




















// function addOne(x) {
//     return x + 1;
// }
// function pipe(argument, ...functions) {
//     return functions.reduce((accumulator, currentFunction) => currentFunction(accumulator),argument);
// }
// console.log(pipe(0.5, addOne, addOne));