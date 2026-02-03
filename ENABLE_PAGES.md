# 🚀 Enable GitHub Pages - Quick Steps

## Step 1: Enable GitHub Pages (30 seconds)

1. Go to: https://github.com/MedhaUdupa/amma-birthday/settings/pages
2. Under "Source", select: **"GitHub Actions"** (NOT "Deploy from a branch")
3. Click **"Save"**

## Step 2: Wait for Deployment (2-3 minutes)

1. Go to: https://github.com/MedhaUdupa/amma-birthday/actions
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (green checkmark)

## Step 3: Your Website is Live! 🎉

Your website will be available at:
**https://MedhaUdupa.github.io/amma-birthday/**

---

## If GitHub Actions Option Doesn't Appear:

1. Go to Settings → Pages
2. Under "Source", select "Deploy from a branch"
3. Branch: `gh-pages`
4. Folder: `/ (root)`
5. Click Save

Then the workflow will automatically create the `gh-pages` branch on the next push.
