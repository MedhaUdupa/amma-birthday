#!/bin/bash

# Deployment script for Amma's Birthday Website

echo "🎂 Deploying Amma's 48th Birthday Website to GitHub Pages"
echo ""

# Check if git remote exists
if ! git remote get-url origin &> /dev/null; then
    echo "⚠️  No GitHub remote found. Please create a repository on GitHub first."
    echo ""
    echo "Steps:"
    echo "1. Go to https://github.com/new"
    echo "2. Create a repository named 'amma-birthday'"
    echo "3. Run: git remote add origin https://github.com/YOUR_USERNAME/amma-birthday.git"
    echo "4. Run this script again"
    exit 1
fi

# Check if images exist
if [ ! -f "public/images/memory1.jpg" ]; then
    echo "⚠️  Warning: Images not found in public/images/"
    echo "   Please add your images as: memory1.jpg, memory2.jpg, memory3.jpg, memory4.jpg"
    echo ""
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Rename branch to main if needed
current_branch=$(git branch --show-current)
if [ "$current_branch" != "main" ]; then
    echo "🔄 Renaming branch to 'main'..."
    git branch -M main
fi

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "📝 Next steps:"
    echo "1. Go to your repository on GitHub"
    echo "2. Settings → Pages"
    echo "3. Source: GitHub Actions"
    echo "4. The workflow will automatically deploy your site!"
    echo ""
    echo "🌐 Your website will be available at:"
    echo "   https://YOUR_USERNAME.github.io/amma-birthday/"
else
    echo "❌ Failed to push to GitHub"
    exit 1
fi
