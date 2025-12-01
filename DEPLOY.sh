#!/bin/bash

# Portfolio Deployment Script
# This script builds and deploys your portfolio to GitHub Pages

echo "🚀 Starting Portfolio Deployment..."
echo ""

# Step 1: Install dependencies
echo "📦 Installing dependencies..."
npm install
echo "✅ Dependencies installed"
echo ""

# Step 2: Build the project
echo "🔨 Building project..."
npm run build
echo "✅ Build complete"
echo ""

# Step 3: Initialize Git (if not already initialized)
if [ ! -d ".git" ]; then
  echo "📝 Initializing Git repository..."
  git init
  git branch -M main
  echo "✅ Git repository initialized"
  echo ""
fi

# Step 4: Add all files
echo "📄 Adding files to Git..."
git add .
echo "✅ Files added"
echo ""

# Step 5: Commit
echo "💾 Committing changes..."
git commit -m "Deploy portfolio - $(date '+%Y-%m-%d %H:%M:%S')"
echo "✅ Changes committed"
echo ""

# Step 6: Add remote (if not already added)
if ! git remote | grep -q origin; then
  echo "🔗 Adding remote repository..."
  echo "Please enter your GitHub repository URL:"
  read REPO_URL
  git remote add origin $REPO_URL
  echo "✅ Remote repository added"
  echo ""
fi

# Step 7: Push to GitHub
echo "📤 Pushing to GitHub..."
git push -u origin main
echo "✅ Code pushed to GitHub"
echo ""

echo "🎉 Deployment complete!"
echo ""
echo "📍 Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Go to Settings → Pages"
echo "3. Select 'main' branch as source"
echo "4. Click Save"
echo "5. Your portfolio will be live at: https://Nirajtiwari6698.github.io/portfolio"
echo ""
echo "✨ Your portfolio is now deployed!"
