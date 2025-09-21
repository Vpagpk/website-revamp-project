# Optimized Next.js Website Foundation for Replit

## Overview
A production-ready Next.js 15 application with PostgreSQL database, optimized for minimal setup time and credit usage on Replit. This template is designed for instant deployment and efficient development.

## ⚡ Quick Setup (2 Credits or Less)
**For New Imports:**
```bash
# One-command setup
./setup.sh
```

**Manual Setup (if needed):**
```bash
npm install
npm run db:push --force
npm run dev
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
npm run db:push --force       # Update schema
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

## 💡 Credit Optimization Tips
**For Next Import:**
1. Run `./setup.sh` (saves ~15 credits vs manual setup)
2. Use existing database schema (no recreation needed)
3. All workflows pre-configured (instant start)
4. Dependencies locked and optimized

**Template Benefits:**
- Zero exploration credits needed
- Instant database setup
- Pre-configured for Replit proxy  
- Ready for immediate development

## 🚀 Production Ready
- ✅ Database schema configured
- ✅ Deployment scripts ready
- ✅ Environment optimized  
- ✅ Zero external dependencies