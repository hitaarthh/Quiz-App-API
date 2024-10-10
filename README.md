# Quiz App API

A RESTful API for a basic online quiz application using Node.js and Express.js.

## Features

- **User Authentication** (Register/Login)
- **MCQ Quiz Management**
  - Create Quiz
  - List Quizzes
  - Get Quiz Details
  - Take Quiz
  - View Quiz Results

## Technology Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **JSON Web Tokens** for authentication

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/quiz-app-api.git
   cd quiz-app-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory with the following content:
   ```bash
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/quiz-app
   JWT_SECRET=your_secret_key_here
   ```

4. **Ensure MongoDB is running** on your machine.

5. **Install necessary packages:**
   ```bash
   npm install express mongoose bcryptjs jsonwebtoken dotenv
   ```

6. **Install development dependencies:**
   ```bash
   npm install --save-dev nodemon
   ```

7. **Start the server:**
   ```bash
   npm start
   ```

The server should now be running at `http://localhost:3000`.

## API Endpoints

- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - User login
- **POST** `/api/quizzes` - Create a new quiz (requires authentication)
- **GET** `/api/quizzes` - List all quizzes
- **GET** `/api/quizzes/:id` - Get details of a specific quiz
- **POST** `/api/quizzes/:id/take` - Take a quiz and view results (requires authentication)

## Testing

You can use tools like **Postman** or **curl** to test the API endpoints.

Example curl command for user registration:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"username":"testuser","email":"test@example.com","password":"password123"}' http://localhost:3000/api/auth/register
```
