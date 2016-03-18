'use strict'

var http = require('http')
var url = require('url')

var server = http.createServer(function(req, res) {
	if (req.method === 'GET') {
		var parsedUrl = url.parse(req.url, true),
			result,
			d = new Date(parsedUrl.query.iso)

		if (req.url.indexOf('parsetime') > -1) {
			result = {
				"hour": d.getHours(),
				"minute": d.getMinutes(),
				"second": d.getSeconds()
			}
		} else if (req.url.indexOf('unixtime') > -1) {
			result = {
				"unixtime": d.getTime()
			}
		}

		res.writeHead(200, {'Content-Type': 'application/json'})
		res.end(JSON.stringify(result))
	}
})
server.listen(process.argv[2])

// official version
// var http = require('http')
// var url = require('url')
//
// function parsetime(time) {
// 	return {
// 		hour: time.getHours(),
// 		minute: time.getMinutes(),
// 		second: time.getSeconds()
// 	}
// }
//
// function unixtime(time) {
// 	return {
// 		unixtime: time.getTime()
// 	}
// }
//
// var server = http.createServer(function(req, res) {
// 	var parsedUrl = url.parse(req.url, true)
// 	var time = new Date(parsedUrl.query.iso)
// 	var result
//
// 	if (/^\/api\/parsetime/.test(req.url))
// 		result = parsetime(time)
// 	else if (/^\/api\/unixtime/.test(req.url))
// 		result = unixtime(time)
//
// 	if (result) {
// 		res.writeHead(200, {
// 			'Content-Type': 'application/json'
// 		})
// 		res.end(JSON.stringify(result))
// 	} else {
// 		res.writeHead(404)
// 		res.end()
// 	}
// })
// server.listen(Number(process.argv[2]))
