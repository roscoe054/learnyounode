'use strict'

var http = require('http')

var server = http.createServer(function(req, res) {
	if (req.method === 'POST') {
		var body = ''

		req.setEncoding('utf8')
		req.on('data', function(data) {
			body += data
		})
		req.on('end', function() {
			res.end(body.toUpperCase())
		})
	}
})
server.listen(process.argv[2])

// official version
// var http = require('http')
// var map = require('through2-map')
//
// var server = http.createServer(function(req, res) {
// 	if (req.method != 'POST')
// 		return res.end('send me a POST\n')
//
// 	req.pipe(map(function(chunk) {
// 		return chunk.toString().toUpperCase()
// 	})).pipe(res)
// })
//
// server.listen(Number(process.argv[2]))
