const { server, io } = require('./load.js');

io.on('connection', (socket) => {
	console.log(`"${socket.id}" connected`);
	socket.on('disconnect', () => {
		console.log(`"${socket.id}" disconnected`);
	});
});

server.listen(process.env.PORT || '9000');
