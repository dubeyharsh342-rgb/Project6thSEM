#!/bin/bash

# JWT Authentication System - Setup Verification Script
# This script verifies that all dependencies are installed and configured correctly

echo "========================================"
echo "JWT Auth System - Verification Script"
echo "========================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counters
PASSED=0
FAILED=0

# Function to check command existence
check_command() {
    if command -v $1 &> /dev/null; then
        echo -e "${GREEN}✓${NC} $1 is installed"
        ((PASSED++))
        return 0
    else
        echo -e "${RED}✗${NC} $1 is not installed"
        ((FAILED++))
        return 1
    fi
}

# Function to check file existence
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1 exists"
        ((PASSED++))
        return 0
    else
        echo -e "${RED}✗${NC} $1 is missing"
        ((FAILED++))
        return 1
    fi
}

# Function to check directory existence
check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} $1 directory exists"
        ((PASSED++))
        return 0
    else
        echo -e "${RED}✗${NC} $1 directory is missing"
        ((FAILED++))
        return 1
    fi
}

echo "1. Checking System Requirements"
echo "================================"
check_command "node"
check_command "npm"
echo ""

echo "2. Checking Backend Setup"
echo "========================="
check_dir "BACKEND"
check_file "BACKEND/package.json"
check_file "BACKEND/.env"
check_file "BACKEND/server.js"
check_dir "BACKEND/models"
check_dir "BACKEND/CONTROLARS"
check_dir "BACKEND/routes"
check_dir "BACKEND/middleware"
check_dir "BACKEND/utils"
echo ""

echo "3. Checking Backend Files"
echo "=========================="
check_file "BACKEND/models/User.js"
check_file "BACKEND/CONTROLARS/authController.js"
check_file "BACKEND/routes/authRoutes.js"
check_file "BACKEND/middleware/authMiddleware.js"
check_file "BACKEND/utils/jwtToken.js"
echo ""

echo "4. Checking Frontend Setup"
echo "=========================="
check_dir "FRONTED"
check_file "FRONTED/package.json"
check_file "FRONTED/vite.config.ts"
check_dir "FRONTED/src"
check_dir "FRONTED/src/components"
check_dir "FRONTED/src/services"
echo ""

echo "5. Checking Frontend Files"
echo "==========================="
check_file "FRONTED/src/components/auth/AuthForm.tsx"
check_file "FRONTED/src/components/ProtectedRoute.tsx"
check_file "FRONTED/src/services/authService.js"
echo ""

echo "6. Checking Documentation"
echo "========================="
check_file "README.md"
check_file "QUICK_START.md"
check_file "API_DOCUMENTATION.md"
check_file "TESTING_GUIDE.md"
check_file "DEPLOYMENT_GUIDE.md"
check_file "IMPLEMENTATION_SUMMARY.md"
check_file "BACKEND/.env.example"
check_file "FRONTED/.env.example"
echo ""

echo "7. Checking Backend Dependencies"
echo "=================================="
cd BACKEND 2>/dev/null
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓${NC} Backend node_modules installed"
    ((PASSED++))
    
    # Check specific packages
    if [ -f "node_modules/express/package.json" ]; then
        echo -e "${GREEN}✓${NC} express is installed"
        ((PASSED++))
    else
        echo -e "${RED}✗${NC} express is not installed"
        ((FAILED++))
    fi
    
    if [ -f "node_modules/mongoose/package.json" ]; then
        echo -e "${GREEN}✓${NC} mongoose is installed"
        ((PASSED++))
    else
        echo -e "${RED}✗${NC} mongoose is not installed"
        ((FAILED++))
    fi
    
    if [ -f "node_modules/jsonwebtoken/package.json" ]; then
        echo -e "${GREEN}✓${NC} jsonwebtoken is installed"
        ((PASSED++))
    else
        echo -e "${RED}✗${NC} jsonwebtoken is not installed"
        ((FAILED++))
    fi
    
    if [ -f "node_modules/bcrypt/package.json" ]; then
        echo -e "${GREEN}✓${NC} bcrypt is installed"
        ((PASSED++))
    else
        echo -e "${RED}✗${NC} bcrypt is not installed"
        ((FAILED++))
    fi
else
    echo -e "${YELLOW}⚠${NC} Backend node_modules not installed (run 'npm install')"
    ((FAILED++))
fi
cd - > /dev/null 2>&1
echo ""

echo "8. Checking Frontend Dependencies"
echo "=================================="
cd FRONTED 2>/dev/null
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓${NC} Frontend node_modules installed"
    ((PASSED++))
    
    # Check specific packages
    if [ -f "node_modules/react/package.json" ]; then
        echo -e "${GREEN}✓${NC} react is installed"
        ((PASSED++))
    else
        echo -e "${RED}✗${NC} react is not installed"
        ((FAILED++))
    fi
    
    if [ -f "node_modules/react-router-dom/package.json" ]; then
        echo -e "${GREEN}✓${NC} react-router-dom is installed"
        ((PASSED++))
    else
        echo -e "${RED}✗${NC} react-router-dom is not installed"
        ((FAILED++))
    fi
else
    echo -e "${YELLOW}⚠${NC} Frontend node_modules not installed (run 'npm install')"
    ((FAILED++))
fi
cd - > /dev/null 2>&1
echo ""

echo "9. Checking Environment Variables"
echo "=================================="
if grep -q "MONGOSE_URL" BACKEND/.env 2>/dev/null; then
    echo -e "${GREEN}✓${NC} MONGOSE_URL is set in BACKEND/.env"
    ((PASSED++))
else
    echo -e "${RED}✗${NC} MONGOSE_URL is not set"
    ((FAILED++))
fi

if grep -q "JWT_SECRET" BACKEND/.env 2>/dev/null; then
    echo -e "${GREEN}✓${NC} JWT_SECRET is set in BACKEND/.env"
    ((PASSED++))
else
    echo -e "${RED}✗${NC} JWT_SECRET is not set"
    ((FAILED++))
fi

if grep -q "NODE_ENV" BACKEND/.env 2>/dev/null; then
    echo -e "${GREEN}✓${NC} NODE_ENV is set in BACKEND/.env"
    ((PASSED++))
else
    echo -e "${RED}✗${NC} NODE_ENV is not set"
    ((FAILED++))
fi
echo ""

echo "========================================"
echo "Verification Summary"
echo "========================================"
echo -e "Checks Passed: ${GREEN}$PASSED${NC}"
echo -e "Checks Failed: ${RED}$FAILED${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
    echo -e "${GREEN}✓ All checks passed! System is ready.${NC}"
    echo ""
    echo "Next Steps:"
    echo "==========="
    echo "1. Backend Setup:"
    echo "   cd BACKEND"
    echo "   npm install  (if not done)"
    echo "   npm run dev"
    echo ""
    echo "2. Frontend Setup (new terminal):"
    echo "   cd FRONTED"
    echo "   npm install  (if not done)"
    echo "   npm run dev"
    echo ""
    echo "3. Access application:"
    echo "   http://localhost:5173"
    echo ""
    exit 0
else
    echo -e "${RED}✗ Some checks failed. Please fix the issues above.${NC}"
    echo ""
    echo "Common Fixes:"
    echo "============="
    echo "1. Install Node.js & npm from https://nodejs.org/"
    echo "2. Run 'npm install' in BACKEND and FRONTED directories"
    echo "3. Configure BACKEND/.env with MongoDB URL and JWT_SECRET"
    echo "4. See QUICK_START.md for detailed setup instructions"
    echo ""
    exit 1
fi
