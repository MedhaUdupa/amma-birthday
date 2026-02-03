# Deployment Instructions

## Adding Your Images

1. Place your 4 images in the `public/images/` folder with these names:
   - `memory1.jpg`
   - `memory2.jpg`
   - `memory3.jpg`
   - `memory4.jpg`

## Deploying to GitHub Pages

### Option 1: Using GitHub CLI (Recommended)

1. Make sure you have GitHub CLI installed: `brew install gh` (on Mac)

2. Login to GitHub:
   ```bash
   gh auth login
   ```

3. Create the repository and push:
   ```bash
   gh repo create amma-birthday --public --source=. --remote=origin --push
   ```

4. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (will be created automatically by the workflow)
   - Folder: `/ (root)`
   - Click Save

5. The GitHub Actions workflow will automatically deploy your site!

### Option 2: Manual GitHub Setup

1. Create a new repository on GitHub named `amma-birthday`

2. Add, commit, and push your code:
   ```bash
   git add .
   git commit -m "Initial commit: Amma's 48th birthday website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/amma-birthday.git
   git push -u origin main
   ```

3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - The workflow will automatically deploy on push to main

## Your Website URL

Once deployed, your website will be available at:
```
https://YOUR_USERNAME.github.io/amma-birthday/
```

## Local Development

To test locally:
```bash
npm run dev
```

Then open http://localhost:5173 in your browser.
