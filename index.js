const server = require('http').createServer();
const { Server } = require('socket.io');
const io = new Server(server, { cors: { origin: '*' } });
const port = process.env.PORT || 3000;


io.on('connection', (socket) => {
    console.log("new client connected");
    socket.on('chat message', msg => {
        io.emit('chat message', msg);
        socket.broadcast.emit('newMessage', msg);
    });
});

server.listen(3000, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});
