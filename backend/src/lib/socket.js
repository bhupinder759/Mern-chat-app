import { Server } from 'socket.io';
import http from 'http';
import express from 'express';


const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173', // Allow all origins for simplicity, adjust as needed
        // methods: ['GET', 'POST'],
        // allowedHeaders: ['Content-Type'],
        // credentials: true
    }
})

export function getReceiverSocketId(userId)  {
    return userSocketMap[userId];
}

//used to store online users
const userSocketMap = {}; // {userId: socketId}

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    const userId = socket.handshake.query.userId; // Assuming userId is sent in the query string
    if (userId) userSocketMap[userId] = socket.id;

    io.emit("getOnlineUsers", Object.keys(userSocketMap)); // Emit online users to all clients

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });

    // Handle other events as needed
})

export { io, app, server };