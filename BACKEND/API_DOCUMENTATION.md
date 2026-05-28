# Backend Setup and API Documentation

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)

### Steps

1. **Install Dependencies**
   ```bash
   cd BACKEND
   npm install
   ```

2. **Environment Configuration**
   - The `.env` file is already configured with:
     - MongoDB connection URL
     - JWT_SECRET (change this in production)
     - NODE_ENV

3. **Start the Backend Server**
   ```bash
   npm start       # Production
   npm run dev     # Development with auto-reload
   ```

The backend will run on `http://localhost:5000`

---

## API Endpoints

### Authentication Routes (`/api/auth`)

#### 1. Sign Up
- **Route**: `POST /api/auth/signup`
- **Content-Type**: `application/json`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "confirmPassword": "password123"
  }
  ```
- **Success Response** (201):
  ```json
  {
    "success": true,
    "message": "User registered successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "65a1b2c3d4e5f6g7h8i9j0k1",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
  ```
- **Error Response**:
  - 400: Missing fields, password mismatch, or password too short
  - 409: User already exists
  - 500: Server error

#### 2. Login
- **Route**: `POST /api/auth/login`
- **Content-Type**: `application/json`
- **Request Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Success Response** (200):
  ```json
  {
    "success": true,
    "message": "Logged in successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "65a1b2c3d4e5f6g7h8i9j0k1",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
  ```
- **Error Response**:
  - 400: Missing email or password
  - 401: Invalid credentials
  - 500: Server error

#### 3. Get Current User (Protected Route)
- **Route**: `GET /api/auth/me`
- **Headers**: `Authorization: Bearer {token}`
- **Success Response** (200):
  ```json
  {
    "success": true,
    "user": {
      "id": "65a1b2c3d4e5f6g7h8i9j0k1",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
  ```
- **Error Response**:
  - 401: Invalid or expired token
  - 404: User not found
  - 500: Server error

#### 4. Logout
- **Route**: `POST /api/auth/logout`
- **Content-Type**: `application/json`
- **Success Response** (200):
  ```json
  {
    "success": true,
    "message": "Logged out successfully"
  }
  ```

---

## Frontend Integration

### Setting Up Frontend

1. **Install Dependencies**
   ```bash
   cd FRONTED
   npm install
   ```

2. **Environment Configuration**
   - Copy `.env.example` to `.env`
   - Update API URL if needed (default: `http://localhost:5000/api`)

3. **Start Frontend Development Server**
   ```bash
   npm run dev
   ```

The frontend will run on `http://localhost:5173`

### API Service Usage

The frontend includes an `authService.js` that provides:

```javascript
import { authAPI, tokenStorage } from './services/authService';

// Sign Up
const response = await authAPI.signup({ name, email, password, confirmPassword });
tokenStorage.setToken(response.token);

// Login
const response = await authAPI.login({ email, password });
tokenStorage.setToken(response.token);

// Get Current User
const user = await authAPI.getCurrentUser(token);

// Logout
await authAPI.logout();

// Token Management
tokenStorage.getToken();      // Get stored token
tokenStorage.removeToken();   // Remove token
tokenStorage.isTokenValid();  // Check if token exists
```

### Protected Routes

Use the `ProtectedRoute` component to protect dashboard routes:

```jsx
import ProtectedRoute from './components/ProtectedRoute';
import DashboardPage from './pages/DashboardPage';

<Routes>
  <Route path="/login" element={<LoginPage />} />
  <Route path="/signup" element={<SignupPage />} />
  <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    }
  />
</Routes>
```

---

## Running Both Services

### Terminal 1: Backend
```bash
cd BACKEND
npm install
npm run dev
```

### Terminal 2: Frontend
```bash
cd FRONTED
npm install
npm run dev
```

Both services will be running:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:5173`

---

## Security Best Practices

1. **JWT Secret**: Change `JWT_SECRET` in `.env` to a strong, random string in production
2. **CORS**: Currently allows all origins. Update in `server.js` for production
3. **Password Security**: Passwords are hashed using bcrypt with 10 salt rounds
4. **Token Expiry**: JWT tokens expire after 7 days
5. **HTTPS**: Use HTTPS in production
6. **Environment Variables**: Never commit `.env` files with sensitive data

---

## Testing the API

### Using cURL

#### Sign Up
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123","confirmPassword":"password123"}'
```

#### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

#### Get Current User
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer <token>"
```

### Using Postman
- Import the endpoints listed above
- For protected routes, add `Authorization` header with `Bearer {token}`

---

## Troubleshooting

### Backend Connection Issues
- Ensure MongoDB is running and connection URL is correct
- Check if port 5000 is available
- Verify Node.js version is compatible

### Frontend API Errors
- Check if backend is running on port 5000
- Verify CORS is properly configured
- Check browser console for detailed error messages

### Token Issues
- Tokens expire after 7 days
- Ensure `Authorization` header format is correct: `Bearer {token}`
- Clear localStorage and re-login if experiencing persistent issues

