#!/bin/bash

# Automated GitHub Setup Script for Amma's Birthday Website

set -e

echo "🎂 Setting up GitHub repository for Amma's Birthday Website"
echo ""

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    echo "📦 Installing GitHub CLI..."
    if command -v brew &> /dev/null; then
        brew install gh
    else
        echo "❌ Homebrew not found. Please install GitHub CLI manually:"
        echo "   Visit: https://cli.github.com/"
        exit 1
    fi
fi

# Check if already authenticated
if ! gh auth status &> /dev/null; then
    echo "🔐 Authenticating with GitHub..."
    echo "   Please follow the prompts to authenticate..."
    gh auth login
else
    echo "✅ Already authenticated with GitHub"
fi

# Get GitHub username
GITHUB_USER=$(gh api user -q .login)
echo "👤 Logged in as: $GITHUB_USER"
echo ""

# Check if repository already exists
if gh repo view "$GITHUB_USER/amma-birthday" &> /dev/null; then
    echo "⚠️  Repository already exists!"
    read -p "Do you want to push to existing repository? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
else
    echo "📦 Creating GitHub repository..."
    gh repo create amma-birthday --public --source=. --remote=origin --push
    echo "✅ Repository created and code pushed!"
fi

# Set up remote if it doesn't exist
if ! git remote get-url origin &> /dev/null; then
    echo "🔗 Setting up remote..."
    git remote add origin "https://github.com/$GITHUB_USER/amma-birthday.git"
fi

# Ensure we're on main branch
git branch -M main 2>/dev/null || true

# Push to GitHub
echo "🚀 Pushing code to GitHub..."
git push -u origin main || git push --set-upstream origin main

echo ""
echo "✅ Code pushed successfully!"
echo ""
echo "📝 Next: Enable GitHub Pages"
echo "   1. Go to: https://github.com/$GITHUB_USER/amma-birthday/settings/pages"
echo "   2. Source: Select 'GitHub Actions'"
echo "   3. Save"
echo ""
echo "🌐 Your website will be available at:"
echo "   https://$GITHUB_USER.github.io/amma-birthday/"
echo ""
echo "⏳ The deployment will start automatically via GitHub Actions!"
