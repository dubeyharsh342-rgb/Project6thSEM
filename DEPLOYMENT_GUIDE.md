# Deployment Guide - JWT Authentication System

## Pre-Deployment Checklist

### Security
- [ ] Change JWT_SECRET to strong random string
- [ ] Change NODE_ENV to PRODUCTION
- [ ] Update CORS allowed origins
- [ ] Enable HTTPS/SSL
- [ ] Set secure cookie options
- [ ] Enable rate limiting
- [ ] Add input sanitization
- [ ] Review all error messages (don't expose sensitive info)

### Backend Configuration
- [ ] Update MongoDB connection string
- [ ] Set proper environment variables
- [ ] Configure logging
- [ ] Set up monitoring/alerts
- [ ] Enable backup strategy

### Frontend Configuration
- [ ] Update API base URL to production backend
- [ ] Build for production (optimize)
- [ ] Enable error tracking (e.g., Sentry)
- [ ] Set up CDN if needed
- [ ] Configure analytics

### Testing
- [ ] Run all security tests
- [ ] Load test endpoints
- [ ] Test all user flows end-to-end
- [ ] Verify error handling
- [ ] Check database backups work

---

## Environment Configuration

### Backend Production .env

```env
# Database
MONGOSE_URL=mongodb+srv://prod_username:prod_password@prod-cluster.mongodb.net/?appName=Cluster0

# Server
PORT=5000
NODE_ENV=PRODUCTION

# Security - Generate strong random string (32+ chars)
JWT_SECRET=your_super_secret_random_string_32chars_minimum_change_this

# Optional
LOG_LEVEL=info
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

### Frontend Production .env

```env
VITE_API_URL=https://api.yourdomain.com/api
VITE_APP_ENV=production
```

---

## Generating Strong JWT_SECRET

### Option 1: Node.js
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Option 2: OpenSSL
```bash
openssl rand -hex 32
```

### Option 3: Python
```bash
python3 -c "import secrets; print(secrets.token_hex(32))"
```

---

## Backend Deployment (Node.js/Express)

### Option 1: Heroku

1. **Prepare for Deployment**
   ```bash
   cd BACKEND
   
   # Create Procfile
   echo "web: node server.js" > Procfile
   
   # Initialize git (if not done)
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Deploy**
   ```bash
   heroku create your-app-name
   heroku config:set JWT_SECRET="your_strong_secret"
   heroku config:set MONGOSE_URL="your_prod_mongo_url"
   git push heroku main
   ```

3. **Verify**
   ```bash
   heroku logs --tail
   ```

### Option 2: AWS EC2

1. **Launch EC2 Instance**
   - Ubuntu 20.04 LTS
   - t2.micro (free tier eligible)

2. **Install Dependencies**
   ```bash
   ssh -i your-key.pem ubuntu@your-instance-ip
   
   sudo apt update
   sudo apt install nodejs npm git
   
   # Install PM2 for process management
   sudo npm install -g pm2
   ```

3. **Clone and Setup**
   ```bash
   git clone your-repo-url
   cd Project6thSEM/BACKEND
   npm install
   ```

4. **Set Environment Variables**
   ```bash
   nano .env
   # Add production values
   ```

5. **Start with PM2**
   ```bash
   pm2 start server.js --name "auth-api"
   pm2 startup
   pm2 save
   ```

6. **Setup Nginx Reverse Proxy**
   ```bash
   sudo apt install nginx
   sudo nano /etc/nginx/sites-available/default
   ```

   Add:
   ```nginx
   server {
     listen 80;
     server_name your-domain.com;
     
     location / {
       proxy_pass http://localhost:5000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
     }
   }
   ```

7. **Enable HTTPS with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

### Option 3: DigitalOcean App Platform

1. **Connect Repository**
   - Link GitHub/GitLab repository
   - Select BACKEND folder as root

2. **Configure Environment**
   - Set environment variables in dashboard
   - JWT_SECRET, MONGOSE_URL, NODE_ENV

3. **Deploy**
   - Push to main branch
   - Automatic deployment triggered

---

## Frontend Deployment

### Option 1: Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
cd FRONTED
vercel

# Set environment variables in Vercel dashboard
VITE_API_URL=https://your-backend-url
```

### Option 2: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Option 3: AWS S3 + CloudFront

1. **Build Frontend**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://your-domain-name
   ```

3. **Upload Build**
   ```bash
   aws s3 sync dist/ s3://your-domain-name/
   ```

4. **Setup CloudFront**
   - Create distribution pointing to S3
   - Configure certificate (ACM)
   - Set cache policies

### Option 4: GitHub Pages

```bash
# Update vite.config.ts
export default {
  base: '/repository-name/',
  // ... other config
}

# Build
npm run build

# Deploy to gh-pages branch
npm run deploy
```

---

## CORS Configuration for Production

### Backend (server.js)

```javascript
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      'https://yourdomain.com',
      'https://www.yourdomain.com',
      'https://app.yourdomain.com'
    ];
    
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
```

---

## HTTPS/SSL Setup

### Using Let's Encrypt (Free)

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Generate certificate
sudo certbot certonly --standalone -d yourdomain.com

# Auto-renew
sudo certbot renew --dry-run
```

### Node.js with HTTPS

```javascript
import https from 'https';
import fs from 'fs';

const options = {
  key: fs.readFileSync('/path/to/private-key.pem'),
  cert: fs.readFileSync('/path/to/certificate.pem'),
};

https.createServer(options, app).listen(443);
```

---

## Security Headers

### Add Security Headers Middleware

```javascript
import helmet from 'helmet';

app.use(helmet());
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});
```

---

## Rate Limiting

### Install and Configure

```bash
npm install express-rate-limit
```

```javascript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);

// Stricter limit for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // 5 attempts per 15 minutes
  message: 'Too many login attempts, please try again later',
});

app.use('/api/auth/login', authLimiter);
app.use('/api/auth/signup', authLimiter);
```

---

## Logging and Monitoring

### Setup Morgan for Logging

```bash
npm install morgan
```

```javascript
import morgan from 'morgan';

if (process.env.NODE_ENV === 'PRODUCTION') {
  app.use(morgan('combined')); // Log to file
} else {
  app.use(morgan('dev'));
}
```

### Setup Error Tracking (Sentry)

```bash
npm install @sentry/node
```

```javascript
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
});
```

---

## Database Backup Strategy

### MongoDB Atlas Automated Backups

1. Enable in MongoDB Atlas dashboard
2. Set backup frequency (daily recommended)
3. Retention: 30-90 days minimum

### Manual Backup

```bash
mongodump \
  --uri "mongodb+srv://user:pass@cluster.mongodb.net/db" \
  --out /path/to/backup
```

---

## Monitoring Checklist

- [ ] Set up error tracking (Sentry, Rollbar)
- [ ] Enable application metrics monitoring
- [ ] Configure uptime monitoring
- [ ] Set up log aggregation (CloudWatch, Logstash)
- [ ] Create alerts for:
  - Error rate > 1%
  - Response time > 500ms
  - Database disconnection
  - Memory usage > 80%
  - Disk usage > 90%

---

## Production Deployment Checklist

### Before Going Live
- [ ] All environment variables set
- [ ] Database backups working
- [ ] Monitoring and alerts enabled
- [ ] Security headers configured
- [ ] Rate limiting enabled
- [ ] HTTPS configured
- [ ] CORS properly configured
- [ ] Error handling tested
- [ ] Load testing completed
- [ ] Security audit completed

### Post-Deployment
- [ ] Monitor logs for errors
- [ ] Check API endpoints are responding
- [ ] Verify authentication flow
- [ ] Test with real user data
- [ ] Monitor performance metrics
- [ ] Keep dependencies updated

---

## Rollback Plan

If issues occur:

1. **Immediate Actions**
   ```bash
   # Stop current deployment
   pm2 stop auth-api
   pm2 delete auth-api
   ```

2. **Revert to Previous Version**
   ```bash
   git revert <commit-hash>
   npm install
   pm2 start server.js
   ```

3. **Communication**
   - Notify users of downtime
   - Update status page
   - Post incident summary

---

## Performance Optimization

### Backend
- [ ] Enable gzip compression
- [ ] Implement caching (Redis)
- [ ] Optimize database queries
- [ ] Use connection pooling
- [ ] Enable keep-alive connections

### Frontend
- [ ] Minify JavaScript/CSS
- [ ] Lazy load components
- [ ] Implement caching strategies
- [ ] Use CDN for static assets
- [ ] Optimize images

---

## Maintenance Schedule

- **Daily**: Monitor logs and alerts
- **Weekly**: Review security logs, check backups
- **Monthly**: Performance analysis, dependency updates
- **Quarterly**: Security audit, capacity planning
- **Annually**: Major version updates, disaster recovery test

---

## Helpful Resources

- [Express.js Production Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
- [MongoDB Security Checklist](https://docs.mongodb.com/manual/security/)
- [OWASP Security Guidelines](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
