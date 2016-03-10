"use strict";
var fs = require('fs')

var filePath = process.argv[2]
var fileBuffer = fs.readFile(filePath, 'utf8', function(err, data){
    if(err) throw err

    var lines = data.split("\n")

    console.log(lines.length - 1);
})
