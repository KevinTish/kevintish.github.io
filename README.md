# Mechanical Engineer Portfolio

A single-page portfolio website built with pure HTML, CSS, and JavaScript — no frameworks or build tools required.

## 🚀 Deploy to GitHub Pages

### Option A — New Repository (Recommended)

1. **Create a new repo** on GitHub named `yourusername.github.io` (replace with your actual GitHub username)
2. **Upload files** — drag and drop all files in this folder into the repo, or use Git:

```bash
git init
git add .
git commit -m "Initial portfolio deploy"
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

3. **Enable GitHub Pages** — Go to repo → Settings → Pages → Source: `main` branch → `/root` folder → Save
4. Visit `https://yourusername.github.io` — it's live! ✅

---

### Option B — Project Subdirectory

If you want the portfolio at `https://yourusername.github.io/portfolio/`:

1. Create a repo named `portfolio`
2. Push all files to the `main` branch
3. Settings → Pages → Source: `main` / `root` → Save
4. Visit `https://yourusername.github.io/portfolio/`

---

## ✏️ Customization

Open `index.html` in any text editor and find these sections to update:

| What to change | Search for |
|---|---|
| Your name | `Alex Reinholt` |
| Job title / tagline | `hero-sub` class |
| Stats (years, projects, patents) | `stat-num` elements |
| About text | `about-text` section |
| Project cards | `project-card` blocks |
| Work experience | `exp-item` blocks |
| Contact email | `alex@reinholt.eng` |
| Page `<title>` | top of `<head>` |

## 📁 File Structure

```
/
├── index.html        ← The entire website (HTML + CSS + JS)
├── _config.yml       ← Tells GitHub Pages not to process with Jekyll
├── .nojekyll         ← Backup Jekyll bypass flag
└── README.md         ← This file
```

## 🌐 Custom Domain (Optional)

To use a custom domain like `alexreinholt.com`:

1. Add a `CNAME` file to this repo containing just your domain:
   ```
   alexreinholt.com
   ```
2. In your domain registrar, point DNS to GitHub Pages:
   - `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or a `CNAME` record → `yourusername.github.io`
3. In repo Settings → Pages → Custom domain → enter your domain → Save

## License

MIT — use freely for personal portfolios.
