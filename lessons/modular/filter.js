'use strict'

var fs = require('fs'),
    path = require('path')

module.exports = function(dir, extension, callback){
    if(!dir || !extension){
        return callback(new Error('params not right'))
    }

    var filteredFileList = []
    fs.readdir(dir, function(err, list){
        if (err){
            return callback(err);
        }

        list.forEach(function(file){
            if(path.extname(file) && path.extname(file) === '.' + extension){
                filteredFileList.push(file)
            }
        })

        callback(null, filteredFileList)
    })
}
