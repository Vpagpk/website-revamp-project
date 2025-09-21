# Optimized Next.js Website Foundation for Replit

## Overview
A production-ready Next.js 15 application with PostgreSQL database, optimized for minimal setup time and credit usage on Replit. This template is designed for instant deployment and efficient development.

## ⚡ Quick Setup (Minimal Credits)
**Automatic Setup:**
Just click the "Run" button - setup runs automatically before starting the dev server.

**Manual Setup (if needed):**
```bash
./setup.sh              # Run setup manually
npm install             # Install dependencies  
npm run db:push:force   # Update database (if DATABASE_URL exists)
npm run dev             # Start development
```

## 🎯 Optimizations for Replit
**✅ Pre-configured Environment:**
- Database schema with proper scripts
- Replit proxy compatibility (Next.js config)
- Workflow configuration for instant start
- All dependencies properly defined
- Deployment ready configuration

## Project Architecture
- **Frontend**: Next.js 15 with React 19 (Port 5000)
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS + Radix UI
- **Build System**: Optimized for Replit deployment
- **Environment**: Zero external dependencies

## Key Features
- **🎨 Rich UI Components**: Full Radix UI component library
- **📱 Responsive Design**: Mobile-first design system  
- **🗄️ Database Ready**: PostgreSQL with Drizzle ORM
- **⚡ Instant Setup**: One-command initialization
- **💰 Credit Efficient**: Minimal setup overhead

## ⚡ Development Commands
```bash
# Quick setup
./setup.sh

# Development server  
npm run dev                    # http://localhost:5000

# Database operations
npm run db:push:force        # Update schema (forced)
npm run db:studio            # Database GUI

# Production
npm run build && npm start
```

## 📁 Optimized Structure
```
├── setup.sh              # One-command setup script
├── src/
│   ├── app/              # Next.js 15 App Router
│   ├── components/       # UI components
│   ├── lib/db/          # Database schema & config
│   └── drizzle.config.ts # Database configuration
├── .replit              # Auto-configured workflows
└── package.json         # All scripts pre-configured
```

## 💡 Credit Optimization Features
**Automatic Optimizations:**
1. **Smart Database Setup**: Only runs if DATABASE_URL exists (saves credits)
2. **Idempotent Installation**: Skips npm install if dependencies exist
3. **Auto-Run Integration**: Click "Run" button for complete setup
4. **Error Resilience**: Continues even if database setup fails

**Template Benefits:**
- Minimal exploration needed (pre-configured)
- Conditional database setup (credit-conscious)
- Pre-configured for Replit proxy  
- Instant development after import

## 🚀 Production Ready
- ✅ Database schema configured
- ✅ Deployment scripts ready
- ✅ Environment optimized  
- ✅ Zero external dependencies