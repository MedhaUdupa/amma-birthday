#!/bin/bash

# Quick deployment script

echo "🚀 Quick Deploy to GitHub"
echo ""

# Try to get GitHub username from git config or email
EMAIL=$(git config --get user.email)
USERNAME=$(echo $EMAIL | cut -d'@' -f1 | sed 's/[0-9]//g')

echo "Detected possible username: $USERNAME"
echo ""
echo "Step 1: Creating repository on GitHub..."
echo "Please go to: https://github.com/new"
echo "Repository name: amma-birthday"
echo "Make it PUBLIC"
echo "DO NOT initialize with README"
echo ""
read -p "Press Enter after you've created the repository..."

echo ""
echo "Step 2: Pushing code..."
git remote add origin "https://github.com/$USERNAME/amma-birthday.git" 2>/dev/null || git remote set-url origin "https://github.com/$USERNAME/amma-birthday.git"
git branch -M main
git push -u origin main

echo ""
echo "✅ Done! Now enable GitHub Pages:"
echo "https://github.com/$USERNAME/amma-birthday/settings/pages"
echo "Source: GitHub Actions"
echo ""
echo "Your site will be at: https://$USERNAME.github.io/amma-birthday/"
