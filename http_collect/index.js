'use strict'

var http = require('http')

var url = process.argv[2],
    dataCollect = ''

http.get(url, function(res){
    res.setEncoding('utf8')
    res.on('data', function(data){
        dataCollect += data
    })
    res.on('end', function(){
        console.log(dataCollect.length);
        console.log(dataCollect);
    })
})
