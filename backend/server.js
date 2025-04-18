import http from 'http';
import {Server as SocketIOServer} from 'socket.io';
import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

// Create HTTP server
const server = http.createServer(app);

// Create Socket.IO server
const io = new SocketIOServer(server, {
	cors: {
		origin: process.env.CLIENT_URL,
		credentials: true,
	},
});

// Socket.IO connection event
io.on('connection', (socket) => {
	console.log(`New client connected: ${socket.id}`);

	// Handle disconnection
	socket.on('disconnect', () => {
		console.log(`Client disconnected: ${socket.id}`);
	});

	// Example event emission
	socket.on('greet', (name) => {
		console.log(`Hello, ${name}!`);
		// Broadcast greeting to all connected clients
		io.emit('greet', `Hello, ${name}!`);
	});
});

// Start the server
server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

