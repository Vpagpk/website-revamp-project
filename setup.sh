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

# Check if database is needed and push schema
if [ -f "src/lib/db/schema.ts" ]; then
    echo "🗄️ Setting up database schema..."
    if npm run db:push --force; then
        echo "✅ Database schema updated"
    else
        echo "⚠️ Database setup failed, but continuing..."
    fi
else
    echo "ℹ️ No database schema found, skipping..."
fi

echo "✅ Setup complete!"
echo "🌐 Your app will be available at http://localhost:5000"
echo "🚀 Run 'npm run dev' to start development"