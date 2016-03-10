'use strict'

var argv = process.argv,
    sum = 0

for(var i = 2, len = argv.length; i < len; i++){
    sum += Number(argv[i])
}

console.log(sum);
