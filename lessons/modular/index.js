'use strict'

var filter = require('./filter')

var dir = process.argv[2],
    extension = process.argv[3]

filter(dir, extension, function(err, filteredFileList){
    if(err) throw err

    filteredFileList.forEach(function(file){
        console.log(file);
    })
})
