#!/bin/bash

echo "🚀 Setting up Next.js project for Replit..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Push database schema
echo "🗄️ Setting up database..."
npm run db:push --force

echo "✅ Setup complete! Run 'npm run dev' to start the development server."
echo "🌐 Your app will be available at http://localhost:5000"