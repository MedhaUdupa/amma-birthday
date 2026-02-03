# Happy 48th Birthday, Amma! 🎂

A beautiful, responsive single-page React website built with Tailwind CSS and Framer Motion.

## Features

- ✨ Elegant landing page with "Open with Love" button
- 🎂 Animated birthday cake with 48 flickering candles
- 📸 Memories section with image grid
- 💌 Messages section with beautiful typography
- 📱 Fully responsive (Mobile, Tablet, Desktop)

## Quick Start

### 1. Add Your Images

Place your 4 images in the `public/images/` folder:
- `memory1.jpg`
- `memory2.jpg`
- `memory3.jpg`
- `memory4.jpg`

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### 4. Deploy to GitHub Pages

**Option A: Using the deployment script**
```bash
./deploy.sh
```

**Option B: Manual deployment**

1. Create a new repository on GitHub named `amma-birthday`
2. Add the remote:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/amma-birthday.git
   git branch -M main
   git push -u origin main
   ```
3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - The workflow will automatically deploy on push

Your website will be available at: `https://YOUR_USERNAME.github.io/amma-birthday/`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.
