# Role-Based Access Control (RBAC) Web Application

This project is a **Role-Based Access Control (RBAC)** web application built using the **MERN stack (MongoDB, Express, React, Node.js)**. The application includes user authentication, role-based authorization, and secured routes. 

It demonstrates scalable, secure, and efficient handling of user roles and permissions. 

## Features

### Authentication & Authorization
- **User Registration**: Users can register with a username, email, password, and role (e.g., User, Admin, Moderator).
- **User Login**: Secure login using JWT-based authentication.
- **Role-Based Access Control**: 
  - Admin can access and manage all routes.
  - Users have limited access based on their roles.

### Key Functionalities
- **Logout**: Users can securely log out from the application.
- **Protected Routes**: Role-specific routes are implemented for secure navigation.
- **Dynamic Role Selection**: Role assignment during registration.

### User Roles
1. **Admin**:
   - Full access to all routes.
2. **Moderator**:
   - Limited access based on business requirements.
3. **User**:
   - Basic access to user-specific routes.

## Technologies Used

### Frontend
- **React**: Component-based UI development.
- **Axios**: For API requests.
- **React Router**: For route management.
- **Bootstrap**: For styling and responsiveness.

### Backend
- **Node.js**: Backend runtime environment.
- **Express.js**: Lightweight web framework.
- **MongoDB**: Database to store user data and roles.
- **Mongoose**: ODM for MongoDB.
- **JWT**: JSON Web Tokens for secure authentication and authorization.

## Installation and Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (Local/Cloud Instance)
- A package manager (npm or yarn)

### Steps to Run the Application

#### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
