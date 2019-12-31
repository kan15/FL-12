function makeNumber(args) {
    let str = '';
    for( let i = 0; i < args.length; i++ ) {
        if (isNaN(args[i]) === false) {
            str += args[i];
        }
    }
    str = parseInt(str);
    return str;
}
makeNumber('erer384jjjfd123');