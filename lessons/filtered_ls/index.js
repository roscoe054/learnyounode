'use strict'

var fs = require('fs')

var dir = process.argv[2],
    extension = process.argv[3]

if(dir && extension){
    fs.readdir(dir, function(err, list){
        var reg = new RegExp("^.+\\." + extension + "$")

        for(var i = 0, len = list.length; i < len; i++){
            var fileName = list[i]
            if(reg.test(fileName)){ // if (path.extname(file) === '.' + process.argv[3])
                console.log(fileName);
            }
        }
    })
}
