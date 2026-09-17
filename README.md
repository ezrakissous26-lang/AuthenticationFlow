````md
# AuthenticationFlow

A full-stack authentication application built with React, Express, MongoDB and JWT.

## Features

- User registration
- User login
- Password hashing with bcrypt
- JWT authentication
- Protected users page
- React Router navigation
- Zustand authentication state
- LocalStorage token persistence
- Zod validation

## Technologies

### Frontend
- React
- TypeScript
- React Router
- Zustand
- Vite

### Backend
- Node.js
- Express
- MongoDB
- JWT
- bcrypt
- Zod

## Installation

### Backend

From the project root:

```bash
npm i
````

### Frontend

From the `client` folder:

```bash
cd client
npm i
```

## Environment Variables

Create a `.env` file in the project root.

Add your MongoDB URI and JWT secret.

> The MongoDB connection string must use a URI without `mongodb+srv://`.

Example:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=3000
```

## Run the Project

### Backend

From:

```text
AuthenticationFlow/
```

Run:

```bash
npm start
```

### Frontend

From:

```text
AuthenticationFlow/client/
```

Run:

```bash
npm run dev
```

## Pages

* `/` - Home
* `/login` - Login
* `/register` - Register
* `/users` - Protected users page