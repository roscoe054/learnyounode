'use strict'

var http = require('http')

var url = process.argv[2]
if (url) {
	http.get(url, function(response) {
		response.setEncoding('utf8')
		response.on('data', console.log)
		response.on('error', console.error)
	})
}
