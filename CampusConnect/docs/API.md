# CampusConnect - API Documentation

## 📋 Overview

This document describes all REST API endpoints for CampusConnect Backend.

**Base URL**: `http://localhost:5000/api`

---

## 🔐 Authentication

Most endpoints require JWT authentication. Include the token in request headers:

```
Authorization: Bearer <your_jwt_token>
```

### Response Format
All responses follow this format:

**Success Response:**
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { /* data */ }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error message"
}
```

---

## 👤 Authentication Endpoints

### Register User
- **Endpoint**: `POST /auth/register`
- **Auth Required**: No
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@college.edu",
    "password": "password123",
    "department": "CSE",
    "rollNumber": "2021001",
    "semester": 4,
    "phone": "9876543210"
  }
  ```
- **Response**: `{ token, user }`
- **Status Code**: 201

### Login User
- **Endpoint**: `POST /auth/login`
- **Auth Required**: No
- **Request Body**:
  ```json
  {
    "email": "john@college.edu",
    "password": "password123"
  }
  ```
- **Response**: `{ token, user }`
- **Status Code**: 200

### Get Profile
- **Endpoint**: `GET /auth/profile`
- **Auth Required**: Yes
- **Response**: `{ user }`
- **Status Code**: 200

### Update Profile
- **Endpoint**: `PUT /auth/profile`
- **Auth Required**: Yes
- **Request Body**:
  ```json
  {
    "name": "Jane Doe",
    "phone": "9876543210",
    "address": "123 Street",
    "department": "ECE"
  }
  ```
- **Response**: `{ user }`
- **Status Code**: 200

### Change Password
- **Endpoint**: `PUT /auth/change-password`
- **Auth Required**: Yes
- **Request Body**:
  ```json
  {
    "currentPassword": "oldpassword",
    "newPassword": "newpassword123"
  }
  ```
- **Response**: `{ message }`
- **Status Code**: 200

### Logout
- **Endpoint**: `POST /auth/logout`
- **Auth Required**: Yes
- **Response**: `{ message }`
- **Status Code**: 200

---

## 📊 Attendance Endpoints (To be implemented)

### Get All Attendance
- **Endpoint**: `GET /attendance`
- **Auth Required**: Yes
- **Query Parameters**:
  - `subject` (optional)
  - `month` (optional)
  - `limit` (default: 10)
- **Response**: `{ attendanceRecords }`

### Mark Attendance
- **Endpoint**: `POST /attendance`
- **Auth Required**: Yes (Admin/Faculty)
- **Request Body**:
  ```json
  {
    "student": "user_id",
    "subject": "Data Structures",
    "date": "2024-05-20",
    "status": "present"
  }
  ```

### Get Attendance by ID
- **Endpoint**: `GET /attendance/:id`
- **Auth Required**: Yes
- **Response**: `{ attendanceRecord }`

### Update Attendance
- **Endpoint**: `PUT /attendance/:id`
- **Auth Required**: Yes (Admin/Faculty)
- **Request Body**: `{ status, remarks }`

### Delete Attendance
- **Endpoint**: `DELETE /attendance/:id`
- **Auth Required**: Yes (Admin)
- **Response**: `{ message }`

---

## 📝 Notes Endpoints (To be implemented)

### Get All Notes
- **Endpoint**: `GET /notes`
- **Query Parameters**:
  - `subject` (optional)
  - `search` (optional)
  - `sortBy` (default: -createdAt)
- **Response**: `{ notes, count }`

### Create Note
- **Endpoint**: `POST /notes`
- **Auth Required**: Yes
- **Request Body**:
  ```json
  {
    "title": "Data Structures - Lecture 5",
    "subject": "Data Structures",
    "description": "Binary trees and traversal",
    "tags": ["trees", "algorithms"]
  }
  ```
- **Response**: `{ note }`
- **Status Code**: 201

### Search Notes
- **Endpoint**: `GET /notes/search`
- **Query Parameters**:
  - `q` (search query)
  - `subject` (optional)
- **Response**: `{ notes }`

### Get Note by ID
- **Endpoint**: `GET /notes/:id`
- **Response**: `{ note }`

### Update Note
- **Endpoint**: `PUT /notes/:id`
- **Auth Required**: Yes
- **Request Body**: `{ title, description, tags }`

### Delete Note
- **Endpoint**: `DELETE /notes/:id`
- **Auth Required**: Yes
- **Response**: `{ message }`

### Like/Unlike Note
- **Endpoint**: `POST /notes/:id/like`
- **Auth Required**: Yes
- **Response**: `{ likes, isLiked }`

### Download Note
- **Endpoint**: `GET /notes/:id/download`
- **Response**: File download

---

## 🎉 Events Endpoints (To be implemented)

### Get All Events
- **Endpoint**: `GET /events`
- **Query Parameters**:
  - `category` (optional)
  - `status` (default: upcoming)
  - `sortBy` (default: date)
- **Response**: `{ events, count }`

### Create Event
- **Endpoint**: `POST /events`
- **Auth Required**: Yes (Admin/Faculty)
- **Request Body**:
  ```json
  {
    "title": "Tech Fest 2024",
    "description": "Annual tech festival",
    "category": "Academic",
    "date": "2024-05-25",
    "location": "Main Auditorium",
    "capacity": 100,
    "cost": 0
  }
  ```

### Get Event by ID
- **Endpoint**: `GET /events/:id`
- **Response**: `{ event }`

### Update Event
- **Endpoint**: `PUT /events/:id`
- **Auth Required**: Yes (Organizer)
- **Request Body**: (any event fields)

### Delete Event
- **Endpoint**: `DELETE /events/:id`
- **Auth Required**: Yes (Organizer/Admin)

### Register for Event
- **Endpoint**: `POST /events/:id/register`
- **Auth Required**: Yes
- **Response**: `{ registered }`

### Mark Interest in Event
- **Endpoint**: `POST /events/:id/interested`
- **Auth Required**: Yes
- **Response**: `{ interested }`

### Get Registered Events
- **Endpoint**: `GET /events/user/registered`
- **Auth Required**: Yes
- **Response**: `{ events }`

---

## 📋 Assignment Endpoints (To be implemented)

### Get All Assignments
- **Endpoint**: `GET /assignments`
- **Query Parameters**:
  - `subject` (optional)
  - `status` (optional)
- **Response**: `{ assignments }`

### Create Assignment
- **Endpoint**: `POST /assignments`
- **Auth Required**: Yes (Faculty)
- **Request Body**:
  ```json
  {
    "title": "Assignment 1",
    "subject": "Data Structures",
    "description": "Implementation of binary trees",
    "dueDate": "2024-05-30",
    "points": 20
  }
  ```

### Get Assignment by ID
- **Endpoint**: `GET /assignments/:id`
- **Response**: `{ assignment }`

### Submit Assignment
- **Endpoint**: `POST /assignments/:id/submit`
- **Auth Required**: Yes
- **Request Body**: (with file upload)
- **Response**: `{ submission }`

### Grade Assignment
- **Endpoint**: `PUT /assignments/:id/grade`
- **Auth Required**: Yes (Faculty)
- **Request Body**:
  ```json
  {
    "student": "student_id",
    "score": 18,
    "feedback": "Good work"
  }
  ```

### Get Submissions
- **Endpoint**: `GET /assignments/:id/submissions`
- **Auth Required**: Yes (Faculty)
- **Response**: `{ submissions }`

---

## ⚠️ HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Success |
| 201 | Created - Resource created |
| 400 | Bad Request - Invalid input |
| 401 | Unauthorized - Auth required |
| 403 | Forbidden - No permission |
| 404 | Not Found - Resource not found |
| 500 | Server Error |

---

## 🔍 Error Responses

### Validation Error
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": "Invalid email format"
  }
}
```

### Authentication Error
```json
{
  "success": false,
  "message": "Not authorized to access this route"
}
```

### Not Found Error
```json
{
  "success": false,
  "message": "Resource not found"
}
```

---

## 🧪 Example API Calls

### Using cURL

```bash
# Register
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@college.edu","password":"pass123"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@college.edu","password":"pass123"}'

# Get Profile (with token)
curl -X GET http://localhost:5000/api/auth/profile \
  -H "Authorization: Bearer your_token_here"
```

### Using JavaScript/Axios

```javascript
import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

// Register
const register = async () => {
  const response = await axios.post(`${API_URL}/auth/register`, {
    name: 'John Doe',
    email: 'john@college.edu',
    password: 'password123'
  })
  return response.data
}

// Login
const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, {
    email,
    password
  })
  return response.data
}

// Get Profile
const getProfile = async (token) => {
  const response = await axios.get(`${API_URL}/auth/profile`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}
```

---

## 🔐 JWT Token Format

After login/register, you receive a JWT token:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY...IiwiaWF0IjoxNjg0MDAwMDAwLCJleHAiOjE2ODQ2MDQwMDB9.xyz...
```

The token contains:
- **Header**: Algorithm and type
- **Payload**: User ID and timestamps
- **Signature**: Verification hash

**Expiration**: 7 days (configurable in .env)

---

## 📊 Rate Limiting

API requests are rate-limited to prevent abuse:
- Default: 100 requests per 15 minutes per IP
- Configurable in `.env` file

---

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [JWT Documentation](https://jwt.io)
- [Postman API Client](https://www.postman.com)

---

**Last Updated**: May 2024  
**API Version**: 1.0.0

