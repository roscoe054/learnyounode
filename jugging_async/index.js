'use strict'

// no async version
// var http = require('http')
//
// var urls = [process.argv[2], process.argv[3], process.argv[4]],
//     dataSet = [],
//     completeCount = 3
//
// urls.forEach(function(url, index){
//     dataSet[index] = ''
//
//     http.get(url, function(res){
//         res.setEncoding('utf8')
//         res.on('data', function(data){
//             dataSet[index] += data
//         })
//         res.on('end', function(){
//             completeCount--
//
//             if(completeCount === 0){
//                 dataSet.forEach(function(data){
//                     console.log(data);
//                 })
//             }
//         })
//     })
// })

// async version
var http = require('http')
var async = require('async')

var urls = [process.argv[2], process.argv[3], process.argv[4]]

async.parallel([
    httpGet,
    httpGet,
    httpGet
], function(err, results){
    results.forEach(function(data){
        console.log(data);
    })
})

function httpGet(callback){
    var dataCollect = ''
    http.get(urls.shift(), function(res){
        res.setEncoding('utf8')
        res.on('data', function(data){
            dataCollect += data
        })
        res.on('end', function(){
            callback(null, dataCollect)
        })
    })
}
