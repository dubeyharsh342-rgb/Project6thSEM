# Testing Guide - JWT Authentication System

## Test Scenarios

### 1. User Registration Tests

#### Test 1.1: Valid Registration
**Steps:**
1. POST `/api/auth/signup`
2. Send valid data with matching passwords

**Expected:**
- Status: 201
- Token returned
- User object returned
- Token stored in localStorage

**Data:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

#### Test 1.2: Duplicate Email
**Steps:**
1. Register a user
2. Try to register with same email

**Expected:**
- Status: 409
- Error: "User already exists with this email"

#### Test 1.3: Password Mismatch
**Steps:**
1. POST `/api/auth/signup` with mismatched passwords

**Expected:**
- Status: 400
- Error: "Passwords do not match"

**Data:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "password123",
  "confirmPassword": "different123"
}
```

#### Test 1.4: Short Password
**Steps:**
1. POST `/api/auth/signup` with short password

**Expected:**
- Status: 400
- Error: "Password must be at least 6 characters long"

**Data:**
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "short",
  "confirmPassword": "short"
}
```

#### Test 1.5: Missing Fields
**Steps:**
1. POST `/api/auth/signup` without required fields

**Expected:**
- Status: 400
- Error: "Please provide all required fields"

---

### 2. Login Tests

#### Test 2.1: Valid Login
**Steps:**
1. Register a user first
2. POST `/api/auth/login` with correct credentials

**Expected:**
- Status: 200
- Token returned
- User object returned
- Success message

**Data:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Test 2.2: Invalid Email
**Steps:**
1. POST `/api/auth/login` with non-existent email

**Expected:**
- Status: 401
- Error: "Invalid email or password"

**Data:**
```json
{
  "email": "nonexistent@example.com",
  "password": "password123"
}
```

#### Test 2.3: Wrong Password
**Steps:**
1. POST `/api/auth/login` with correct email but wrong password

**Expected:**
- Status: 401
- Error: "Invalid email or password"

**Data:**
```json
{
  "email": "john@example.com",
  "password": "wrongpassword"
}
```

#### Test 2.4: Missing Email
**Steps:**
1. POST `/api/auth/login` without email

**Expected:**
- Status: 400
- Error: "Please provide email and password"

---

### 3. Protected Route Tests

#### Test 3.1: Valid Token
**Steps:**
1. Get token from login
2. GET `/api/auth/me` with valid token in Authorization header

**Expected:**
- Status: 200
- Current user data returned

**Headers:**
```
Authorization: Bearer {valid_token}
```

#### Test 3.2: Missing Token
**Steps:**
1. GET `/api/auth/me` without Authorization header

**Expected:**
- Status: 401
- Error: "No token provided. Please log in."

#### Test 3.3: Invalid Token
**Steps:**
1. GET `/api/auth/me` with malformed token

**Expected:**
- Status: 401
- Error: "Invalid or expired token. Please log in again."

**Headers:**
```
Authorization: Bearer invalid_token_string
```

#### Test 3.4: Expired Token
**Steps:**
1. Manually manipulate token to simulate expiration
2. GET `/api/auth/me` with expired token

**Expected:**
- Status: 401
- Error: "Invalid or expired token. Please log in again."

---

### 4. Frontend UI Tests

#### Test 4.1: Signup Form Validation
**Steps:**
1. Navigate to `/signup`
2. Leave name field empty
3. Click Create account

**Expected:**
- Form validation error
- No API call made

#### Test 4.2: Signup Success
**Steps:**
1. Fill all fields correctly
2. Click Create account

**Expected:**
- Loading state shows
- Redirect to `/dashboard`
- Token in localStorage

#### Test 4.3: Login Error Display
**Steps:**
1. Navigate to `/login`
2. Enter wrong credentials
3. Click Sign in

**Expected:**
- Error message displayed in red box
- Remains on login page
- Token NOT stored

#### Test 4.4: Protected Route Access
**Steps:**
1. Logout or clear localStorage
2. Navigate directly to `/dashboard`

**Expected:**
- Redirect to `/login` automatically

#### Test 4.5: Dashboard Access After Login
**Steps:**
1. Login successfully
2. Navigate to `/dashboard`

**Expected:**
- Dashboard loads
- No redirect to login

---

### 5. Token Management Tests

#### Test 5.1: Token Storage
**Steps:**
1. Signup/Login
2. Open DevTools → Application → Local Storage

**Expected:**
- `authToken` key exists with JWT value
- `user` key exists with user data

#### Test 5.2: Token Persistence
**Steps:**
1. Login and navigate to dashboard
2. Refresh page
3. Dashboard should still be accessible

**Expected:**
- Token still valid
- Page loads without re-login

#### Test 5.3: Token Removal on Logout
**Steps:**
1. Login
2. Click logout
3. Check localStorage

**Expected:**
- `authToken` removed
- Next dashboard access redirects to login

---

### 6. Database Tests

#### Test 6.1: User Created in Database
**Steps:**
1. Signup new user
2. Check MongoDB

**Expected:**
- User document created
- Password is hashed (not plaintext)
- All fields populated

#### Test 6.2: Duplicate Email Check
**Steps:**
1. Signup user
2. Try to signup with same email
3. Check MongoDB

**Expected:**
- Only one document with that email
- Unique index enforced

---

## Running Tests

### Manual Testing with cURL

```bash
# Signup
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Test User",
    "email":"test@example.com",
    "password":"password123",
    "confirmPassword":"password123"
  }'

# Extract token from response and use in next command

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email":"test@example.com",
    "password":"password123"
  }'

# Get current user (replace TOKEN)
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer TOKEN"
```

### Manual Testing with Postman

1. **Create Collection**: JWT Auth Tests
2. **Create Requests**:
   - POST /auth/signup
   - POST /auth/login
   - GET /auth/me (with Authorization)
3. **Use Variables**:
   - `base_url`: http://localhost:5000/api
   - `token`: Retrieved from signup/login response
4. **Test Each Endpoint**

### Frontend Testing Checklist

- [ ] Signup with valid data → Redirected to dashboard
- [ ] Signup with duplicate email → Error shown
- [ ] Signup with mismatched password → Error shown
- [ ] Login with correct credentials → Redirected to dashboard
- [ ] Login with wrong password → Error shown
- [ ] Access dashboard without login → Redirected to login
- [ ] Token persists on page refresh
- [ ] Error messages display properly
- [ ] Loading states show during API calls
- [ ] Form validation works

---

## Performance Tests

### Response Time
- Signup: < 500ms
- Login: < 300ms
- Get User: < 200ms

### Load Test
- Simulate 100 concurrent signups
- Verify no data loss
- Check database performance

---

## Security Tests

### Password Security
- [ ] Passwords are hashed in database (not plaintext)
- [ ] Password comparison uses bcrypt.compare()
- [ ] Password not returned in responses

### Token Security
- [ ] Tokens have expiration (7 days)
- [ ] Token signature verified on each protected request
- [ ] Invalid tokens rejected

### CORS Security
- [ ] Only allowed origins can access
- [ ] Credentials properly handled

### Input Validation
- [ ] Email format validated
- [ ] Password length checked
- [ ] All required fields validated

---

## Browser DevTools Testing

### Application Tab
- [ ] authToken present in localStorage
- [ ] user data stored correctly
- [ ] Token updated after login

### Network Tab
- [ ] API calls show correct method (POST/GET)
- [ ] Request/response bodies visible
- [ ] Status codes correct

### Console Tab
- [ ] No JavaScript errors
- [ ] No CORS errors
- [ ] Network requests logged

---

## Edge Cases to Test

1. Rapid signup/login attempts
2. Very long email addresses
3. Special characters in name
4. Multiple concurrent requests
5. Network timeout simulation
6. Invalid JSON in request body
7. Missing Content-Type header
8. Request with extra fields
9. Whitespace-only inputs
10. Case sensitivity in email

---

## Success Criteria

All tests should pass with:
- ✅ Correct status codes
- ✅ Expected response structure
- ✅ Proper error messages
- ✅ No data loss
- ✅ Token validation working
- ✅ Database consistency
- ✅ No security vulnerabilities
