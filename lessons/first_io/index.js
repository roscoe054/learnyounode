"use strict";
var fs = require('fs')

var filePath = process.argv[2]
var fileBuffer = fs.readFileSync(filePath)

if(fileBuffer){
    var fileContent = fileBuffer.toString(),
        lines = fileContent.split("\n")

    console.log(lines.length - 1);
} else {
    console.log('no file');
}
