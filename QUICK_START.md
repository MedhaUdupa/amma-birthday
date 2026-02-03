# 🚀 Quick Start Guide - Deploy Your Website Now!

## Step 1: Add Your Images (2 minutes)

1. Open the `public/images/` folder
2. Add your 4 images and name them:
   - `memory1.jpg`
   - `memory2.jpg`
   - `memory3.jpg`
   - `memory4.jpg`

## Step 2: Create GitHub Repository (3 minutes)

1. Go to https://github.com/new
2. Repository name: `amma-birthday`
3. Make it **Public**
4. **DO NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

## Step 3: Connect and Deploy (2 minutes)

Run these commands in your terminal:

```bash
cd /Users/medhaudupa/amma-birthday
git remote add origin https://github.com/YOUR_USERNAME/amma-birthday.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Step 4: Enable GitHub Pages (1 minute)

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source", select **GitHub Actions**
5. The deployment will start automatically!

## Step 5: Wait for Deployment (2-3 minutes)

1. Go to the **Actions** tab in your repository
2. Wait for the workflow to complete (green checkmark)
3. Your website is live! 🎉

## Your Website URL

Once deployed, visit:
```
https://YOUR_USERNAME.github.io/amma-birthday/
```

---

## Alternative: Use the Deployment Script

If you prefer, you can use the automated script:

```bash
./deploy.sh
```

The script will guide you through the process!

---

## Need Help?

- Check `README.md` for detailed instructions
- Check `DEPLOYMENT.md` for troubleshooting
