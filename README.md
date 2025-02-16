# AI Chatbot (ChatGPT Clone) using Node.js, Next.js & MongoDB Atlas

This project is an AI-powered chatbot built using **Node.js** for the backend, **Next.js** for the frontend, and **MongoDB Atlas** for data storage. It integrates the **Gemini API** (Google Generative AI) to generate responses and supports user authentication and multi-chat functionality.

## Features

- 🌍 **Full-Stack Web App** using Node.js, Express, Next.js
- 🤖 **AI-Powered Chatbot** powered by Gemini API
- 🔐 **User Authentication** (OAuth planned but currently removed for study)
- 🗄 **MongoDB Atlas Integration** for user, chat, and message storage
- 💬 **Multiple Chat Support** - Users can have separate chat sessions
- 🚀 **Backend API** with Express & TypeScript
- 🎨 **Frontend UI** built with Next.js

## Tech Stack

### Backend (Node.js + Express)

- TypeScript
- Express.js
- MongoDB Atlas (Mongoose ODM)
- Passport.js (OAuth planned)
- Google Generative AI (Gemini API)
- dotenv (Environment Variables)

### Frontend (Next.js)

- React (via Next.js)
- Tailwind CSS (for styling)
- SWR (for data fetching)
- Context API (for state management)

## Project Structure

```
📦 AI Chatbot Project
 ┣ 📂 backend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 config         # Configurations (DB, API Keys, etc.)
 ┃ ┃ ┣ 📂 controllers    # Express Controllers
 ┃ ┃ ┣ 📂 models        # Mongoose Models (User, Chat, Message)
 ┃ ┃ ┣ 📂 routes        # API Routes
 ┃ ┃ ┣ 📂 services      # Gemini API integration
 ┃ ┃ ┣ 📂 types         # TypeScript Type Definitions
 ┃ ┃ ┣ 📂 utils         # Helper Functions
 ┃ ┃ ┗ 📜 server.ts     # Express Server Setup
 ┃ ┣ 📜 .env            # Environment Variables
 ┃ ┣ 📜 package.json    # Dependencies
 ┃ ┣ 📜 tsconfig.json   # TypeScript Config

 ┣ 📂 frontend
 ┃ ┣ 📂 app            # Next.js App Router
 ┃ ┣ 📂 components     # React UI Components
 ┃ ┣ 📂 context        # Global State Management
 ┃ ┣ 📂 hooks          # Custom Hooks
 ┃ ┣ 📂 lib            # API Helpers
 ┃ ┣ 📂 public         # Static Files (Icons, Images, etc.)
 ┃ ┣ 📂 shared         # Shared Utilities
 ┃ ┣ 📜 next.config.js # Next.js Config
 ┃ ┣ 📜 package.json   # Dependencies
 ┃ ┗ 📜 tsconfig.json  # TypeScript Config

 ┣ 📜 .gitignore
 ┗ 📜 README.md
```

## Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2️⃣ Backend Setup

```sh
cd backend
npm install  # Install dependencies
```

#### Setup Environment Variables (`backend/.env`)

```env
GEMINI_API_KEY=your-gemini-api-key
MONGO_URI=your-mongodb-atlas-connection-string
SESSION_SECRET=your-session-secret
```

#### Run Backend Server

```sh
npm run dev
```

### 3️⃣ Frontend Setup

```sh
cd frontend
npm install  # Install dependencies
```

#### Start Frontend

```sh
npm run dev
```

### 4️⃣ Open in Browser

```
http://localhost:3000
```

## API Endpoints

### User Authentication

- **POST /auth/google** → Google OAuth (Planned, not implemented yet)
- **POST /auth/login** → Local Login (TBD)
- **POST /auth/logout** → Logout

### Chat Operations

- **POST /chat/new** → Start a new chat
- **POST /chat/send** → Send message to chatbot
- **GET /chat/history** → Retrieve chat history

## Future Improvements

- ✅ OAuth Authentication (Google, GitHub)
- ✅ Persistent Sessions
- ✅ UI Enhancements (Better animations, loaders)
- ✅ Improved AI Model Selection (configurable)

## Contributions

Feel free to fork and submit PRs! 🚀

## License

MIT License
