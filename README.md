# JWT Authentication System - Full Stack Implementation

This repository contains a complete end-to-end implementation of JWT-based authentication for login and sign-up functionality with a Node.js/Express backend and React frontend.

## Project Structure

```
Project6thSEM/
├── BACKEND/
│   ├── CONTROLARS/
│   │   └── authController.js      # Authentication logic
│   ├── models/
│   │   └── User.js                # MongoDB User schema
│   ├── routes/
│   │   └── authRoutes.js          # Auth API routes
│   ├── middleware/
│   │   └── authMiddleware.js      # JWT verification middleware
│   ├── utils/
│   │   └── jwtToken.js            # JWT token generation
│   ├── server.js                  # Main server file
│   ├── package.json               # Backend dependencies
│   ├── .env                       # Environment variables
│   ├── .env.example               # Example env file
│   └── API_DOCUMENTATION.md       # API documentation
│
└── FRONTED/
    ├── src/
    │   ├── components/
    │   │   ├── auth/
    │   │   │   └── AuthForm.tsx    # Login/Signup form with API integration
    │   │   └── ProtectedRoute.tsx  # Protected route wrapper
    │   ├── services/
    │   │   └── authService.js      # API client and token management
    │   ├── App.tsx
    │   └── main.tsx
    ├── .env.example               # Example env file
    ├── vite.config.ts             # API proxy configuration
    └── package.json               # Frontend dependencies
```

## Features

✅ **User Registration (Sign Up)**
- Full name, email, and password validation
- Password confirmation check
- Duplicate email detection
- Secure password hashing with bcrypt

✅ **User Login**
- Email and password authentication
- Secure password comparison
- JWT token generation

✅ **JWT Token Management**
- Token generation with 7-day expiration
- Token storage in localStorage
- Protected route implementation
- Token refresh capability

✅ **Security**
- Password hashing with bcrypt (10 salt rounds)
- JWT signature verification
- Protected API routes
- CORS enabled
- Error handling and validation

✅ **RESTful API**
- Standard HTTP methods (POST, GET)
- Proper status codes (201, 200, 400, 401, 409, 500)
- JSON request/response format
- Bearer token authentication

## Backend Setup

### Prerequisites
- Node.js v16+ 
- MongoDB (Atlas or local)

### Installation

```bash
cd BACKEND
npm install
```

### Environment Variables

Create `.env` file (or update existing):
```env
MONGOSE_URL=mongodb+srv://your_username:your_password@cluster.mongodb.net/?appName=Cluster0
NODE_ENV=DEVELOPMENT
JWT_SECRET=your_super_secret_key_here_change_in_production
PORT=5000
```

### Start Backend

```bash
npm start       # Production
npm run dev     # Development with auto-reload
```

Backend runs on: `http://localhost:5000`

## Frontend Setup

### Prerequisites
- Node.js v16+

### Installation

```bash
cd FRONTED
npm install
```

### Environment Variables

Create `.env` file:
```env
VITE_API_URL=http://localhost:5000/api
```

### Start Frontend

```bash
npm run dev
```

Frontend runs on: `http://localhost:5173`

## API Endpoints

### `POST /api/auth/signup`
Register a new user
```json
Request:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}

Response (201):
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": { "id": "...", "name": "John Doe", "email": "john@example.com" }
}
```

### `POST /api/auth/login`
Login with email and password
```json
Request:
{
  "email": "john@example.com",
  "password": "password123"
}

Response (200):
{
  "success": true,
  "message": "Logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": { "id": "...", "name": "John Doe", "email": "john@example.com" }
}
```

### `GET /api/auth/me` (Protected)
Get current user info
```
Headers: Authorization: Bearer {token}

Response (200):
{
  "success": true,
  "user": { "id": "...", "name": "John Doe", "email": "john@example.com" }
}
```

### `POST /api/auth/logout`
Logout user (frontend-managed)
```json
Response (200):
{
  "success": true,
  "message": "Logged out successfully"
}
```

## Frontend Features

### AuthForm Component
- Login mode: Email + Password
- Signup mode: Name + Email + Password + Confirm Password
- Real-time form validation
- Loading states during API calls
- Error message display
- Automatic redirection to dashboard on success
- Disabled form inputs during submission

### Auth Service
```javascript
import { authAPI, tokenStorage } from './services/authService';

// Sign up
await authAPI.signup({ name, email, password, confirmPassword });

// Login
await authAPI.login({ email, password });

// Get current user
await authAPI.getCurrentUser(token);

// Token management
tokenStorage.setToken(token);
tokenStorage.getToken();
tokenStorage.removeToken();
tokenStorage.isTokenValid();
```

### Protected Routes
```jsx
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  }
/>
```

## Running Locally

### Terminal 1 - Backend
```bash
cd BACKEND
npm install
npm run dev
```

### Terminal 2 - Frontend
```bash
cd FRONTED
npm install
npm run dev
```

Access the app at: `http://localhost:5173`

## Testing API

### Using cURL

Sign Up:
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name":"John Doe",
    "email":"john@example.com",
    "password":"password123",
    "confirmPassword":"password123"
  }'
```

Login:
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email":"john@example.com",
    "password":"password123"
  }'
```

Get User (with token):
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Using Postman
1. Import the API endpoints
2. For protected routes, add `Authorization` header: `Bearer {token}`
3. Test each endpoint with sample data

## Security Considerations

### In Development ✓
- Passwords are hashed with bcrypt
- JWT tokens are signed with secret key
- CORS is enabled for local development

### For Production ⚠️
1. **Change JWT_SECRET** to a strong random string
2. **Use HTTPS** for all communications
3. **Update CORS** to specific domains only:
   ```javascript
   cors({
     origin: 'https://yourdomain.com',
     credentials: true
   })
   ```
4. **Add Rate Limiting** to prevent brute force attacks
5. **Use Secure Cookies** instead of localStorage for tokens
6. **Add Input Sanitization** to prevent injection attacks
7. **Implement Refresh Tokens** for better security
8. **Add API Key** for additional security layer
9. **Enable HTTPS Only** in production

## Error Handling

The API provides detailed error messages:

```json
{
  "success": false,
  "message": "User already exists with this email"
}
```

Common errors:
- **400**: Bad request (missing fields, validation failed)
- **401**: Unauthorized (invalid credentials, expired token)
- **409**: Conflict (user already exists)
- **500**: Server error

## Database Schema

### User Model
```javascript
{
  name: String (required, trimmed),
  email: String (required, unique, lowercase, validated),
  password: String (required, minimum 6 chars, hashed),
  createdAt: Date (default: now)
}
```

## Token Format

JWT tokens contain:
```javascript
{
  userId: "65a1b2c3d4e5f6g7h8i9j0k1",
  iat: 1705315200,  // Issued at
  exp: 1706006400   // Expires in 7 days
}
```

## Troubleshooting

### MongoDB Connection Error
- Verify connection string in `.env`
- Check if MongoDB Atlas IP whitelist includes your IP
- Ensure MongoDB credentials are correct

### CORS Error in Frontend
- Check backend is running on port 5000
- Verify API URL in frontend `.env`
- Check Vite proxy configuration in `vite.config.ts`

### Authentication Issues
- Clear localStorage and retry login
- Verify JWT_SECRET matches on both sides
- Check token hasn't expired
- Ensure Authorization header format: `Bearer {token}`

### Port Already in Use
```bash
# Kill process on port 5000
lsof -i :5000
kill -9 <PID>

# Or use different port in .env
PORT=5001
```

## Next Steps

1. ✅ Add refresh token mechanism
2. ✅ Implement email verification
3. ✅ Add password reset functionality
4. ✅ Implement rate limiting
5. ✅ Add comprehensive logging
6. ✅ Add user profile endpoints
7. ✅ Implement role-based access control (RBAC)

## Support

For issues or questions, refer to:
- Backend: `/BACKEND/API_DOCUMENTATION.md`
- Frontend: Check component files for implementation details

## License

MIT
