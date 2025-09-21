#!/bin/bash
set -e

echo "🚀 Setting up Next.js project for Replit..."

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Installing..."
    exit 1
fi

# Install dependencies only if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "📦 Dependencies already installed, skipping..."
fi

# Check if database is needed and DATABASE_URL is available
if [ -f "src/lib/db/schema.ts" ] && [ -n "$DATABASE_URL" ]; then
    echo "🗄️ Setting up database schema..."
    if npm run db:push:force; then
        echo "✅ Database schema updated"
    else
        echo "⚠️ Database setup failed, but continuing..."
    fi
elif [ -f "src/lib/db/schema.ts" ] && [ -z "$DATABASE_URL" ]; then
    echo "ℹ️ Database schema found but no DATABASE_URL - skipping database setup to save credits"
else
    echo "ℹ️ No database schema found, skipping..."
fi

echo "✅ Setup complete!"