var express = require('express');
var app = express();
var http = require('http');
var environment = process.env.NODE_ENV || 'development';

console.log(`Running express backend in environment: ${environment}`);

var server = http.createServer(app);

const io = require('socket.io')(server, {
	cors: {
		// origin: 'http://localhost:3000/',
		origin: '*',
		methods: ['GET', 'POST'],
	},
});

module.exports = {
	server: server,
	io: io,
};
