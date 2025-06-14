# MERN Chat App

A real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack with Socket.IO for real-time communication.

![Screenshot 2025-06-14 163909](https://github.com/user-attachments/assets/ee757826-4da4-4f4f-ac25-0e8e5b13dd2d)
![Screenshot 2025-06-14 163845](https://github.com/user-attachments/assets/f7d17537-efaa-4dce-a91b-6180b67bd293)
![Screenshot 2025-06-14 164013](https://github.com/user-attachments/assets/523d47e1-ac26-4dda-816a-308221a31a06)
![Screenshot 2025-06-14 164001](https://github.com/user-attachments/assets/77bceddb-1e8f-461a-9a3e-f93cc9833f42)
![Screenshot 2025-06-14 163930](https://github.com/user-attachments/assets/3df7900c-a965-4525-bdd8-3aba5b15dd72)


---

## Features

- Real-time chat functionality
- User authentication (signup & login)
- Private messaging
- Group chats (if implemented)
- Secure password hashing (bcrypt)
- JWT-based authentication
- RESTful API backend
- Socket.IO integration for live messaging
- Responsive frontend with React
- MongoDB database for message & user storage

---

## Tech Stack

**Frontend:**
- React.js
- Axios
- React Router DOM
- Context API / Redux (if used)

**Backend:**
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (jsonwebtoken)
- Bcrypt
- Socket.IO

**Database:**
- MongoDB Atlas (or local MongoDB)

**Other Tools:**
- dotenv (for environment variables)
- CORS
- Helmet

---

## Installation & Setup

### 1. Clone the repository

git clone https://github.com/bhupinder759/Mern-chat-app.git
cd Mern-chat-app

cd backend
npm install

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

npm run dev

cd frontend
npm install
npm start
