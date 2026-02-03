#!/bin/bash

# Direct deployment to gh-pages branch

set -e

echo "🚀 Deploying to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run build

# Create a temporary directory for gh-pages
rm -rf gh-pages-temp
mkdir gh-pages-temp
cd gh-pages-temp

# Clone the repository
git clone https://github.com/MedhaUdupa/amma-birthday.git .
git checkout --orphan gh-pages
git rm -rf .

# Copy built files
cp -r ../dist/* .

# Commit and push
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force

cd ..
rm -rf gh-pages-temp

echo ""
echo "✅ Deployed successfully!"
echo "🌐 Your website: https://MedhaUdupa.github.io/amma-birthday/"
echo ""
echo "📝 Now go to: https://github.com/MedhaUdupa/amma-birthday/settings/pages"
echo "   And select 'gh-pages' branch as the source"
