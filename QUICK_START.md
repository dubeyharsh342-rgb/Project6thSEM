# Quick Start Guide - JWT Authentication Implementation

## Overview
This guide will help you get the authentication system running in under 5 minutes.

## Prerequisites
- Node.js v16+
- MongoDB (Atlas recommended)
- Terminal/Command prompt

## Step 1: Backend Setup (2 minutes)

```bash
# Navigate to backend
cd BACKEND

# Install dependencies
npm install

# Your .env file is already set up with:
# - MongoDB URL
# - JWT_SECRET
# - NODE_ENV=DEVELOPMENT
# - PORT=5000
```

## Step 2: Start Backend (1 minute)

```bash
# Start development server with auto-reload
npm run dev

# You should see:
# MongoDB connected successfully
# Server is running on port 5000
# Environment: DEVELOPMENT
```

## Step 3: Frontend Setup (1 minute)

In a new terminal:

```bash
# Navigate to frontend
cd FRONTED

# Install dependencies
npm install

# .env.example already created
```

## Step 4: Start Frontend (1 minute)

```bash
npm run dev

# You should see:
# VITE v5.4.1 ready in 123 ms
# ➜  Local:   http://localhost:5173/
```

## Step 5: Test the Application

1. Open browser to `http://localhost:5173`
2. Click "Create account" to go to signup
3. Fill in the form:
   - Name: John Doe
   - Email: john@example.com
   - Password: password123
   - Confirm: password123
4. Click "Create account"
5. You should be redirected to `/dashboard`

## Testing Login

1. Go to `http://localhost:5173/login`
2. Enter credentials:
   - Email: john@example.com
   - Password: password123
3. Click "Sign in"
4. You should be redirected to `/dashboard`

## Verify Token Storage

Open browser DevTools (F12) → Application/Storage → Local Storage:
- You should see `authToken` and `user` values

## API Testing with cURL

### Test Signup
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Test User",
    "email":"test@example.com",
    "password":"password123",
    "confirmPassword":"password123"
  }'
```

Expected Response:
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "name": "Test User",
    "email": "test@example.com"
  }
}
```

### Test Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email":"test@example.com",
    "password":"password123"
  }'
```

### Test Get Current User (Protected)
```bash
# Replace TOKEN with actual token from signup/login response
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer TOKEN"
```

## Common Issues

### Backend won't start
- Check MongoDB URL in `.env`
- Verify port 5000 is available
- Check internet connection for MongoDB Atlas

### Frontend can't connect to backend
- Ensure backend is running on port 5000
- Check API URL in browser DevTools Console
- Verify CORS is working

### Authentication fails
- Check email doesn't already exist (signup)
- Verify password is correct (login)
- Check MongoDB connection
- Clear browser localStorage and try again

## File Structure Reference

```
BACKEND/
├── server.js                 ← Main entry point
├── models/User.js           ← Database schema
├── CONTROLARS/authController.js  ← Business logic
├── routes/authRoutes.js     ← API endpoints
├── middleware/authMiddleware.js  ← JWT verification
└── utils/jwtToken.js        ← Token generation

FRONTED/
├── src/components/
│   ├── auth/AuthForm.tsx    ← Login/Signup UI
│   └── ProtectedRoute.tsx   ← Route protection
├── src/services/
│   └── authService.js       ← API client
├── vite.config.ts           ← API proxy
└── package.json
```

## Next Steps

1. ✅ Implement dashboard page (already routed)
2. ✅ Add logout functionality
3. ✅ Add password reset
4. ✅ Add email verification
5. ✅ Add refresh token mechanism

## Production Checklist

Before deploying to production:

- [ ] Change JWT_SECRET to a random string
- [ ] Update CORS allowed origins
- [ ] Enable HTTPS
- [ ] Add rate limiting
- [ ] Implement refresh tokens
- [ ] Add email verification
- [ ] Enable security headers
- [ ] Set up MongoDB backups
- [ ] Enable logging
- [ ] Test all error scenarios

## Support

For detailed API documentation, see: `/BACKEND/API_DOCUMENTATION.md`
For full project info, see: `/README.md`
